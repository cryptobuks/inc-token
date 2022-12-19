import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { Lang } from '../models/lang';
import { Router } from '@angular/router';
declare var components: any;

// Ciclo de vida de los componentes: https://angular.io/guide/lifecycle-hooks
@Component({
  template: 'NO UI TO BE FOUND HERE!'
})
export abstract class BasePageComponent implements OnInit, OnDestroy {

  protected router: Router;
  protected translateService: TranslateService;
  protected titleKey: string = "app_name";

  get lang(): Lang {
    return AppComponent.instance.selectedLang;
  };

  constructor(protected element: ElementRef) {
    this.router = AppModule.injector.get(Router);
    this.translateService = AppModule.injector.get(TranslateService);
  }

  ngOnInit() {
    components[this.constructor.name] = this;

    this.translateService.get(['']).subscribe(translations => {
      this.setTitle(this.translateService.instant(this.titleKey));
      this.onInit();
    });
  }

  ngOnDestroy(): any {
    components[this.constructor.name] = null;
    this.onDestroy();
  }

  abstract onInit(): void;
  abstract onDestroy(): void;

  setTitle(title: string): void {
    AppComponent.instance.setTitle(title);
  }

  scrollToElement(element: HTMLElement, block: ScrollLogicalPosition = 'center') {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: block });
    }
  }
  
  scrollToRef(elementRef: ElementRef) {
    this.scrollToElement(elementRef?.nativeElement);
  }

  loadScript(id: string, src: string) {
    if (document.getElementById(id)) return;
    let js = document.createElement("script");
    js.id = id;
    js.src = src;
    this.element.nativeElement.appendChild(js);
  }
}
