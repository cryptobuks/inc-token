import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent extends BasePageComponent {

  readonly titleKey = "legal_privacy";

  //options: any[];

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    /*this.options = [
      { 
        name: this.translateService.instant('terms_of_service'), 
        path: '/terms' 
      },
      { 
        name: this.translateService.instant('cookie_policy'), 
        path: '/privacy',
        id: 'cookies'
      },
      { 
        name: this.translateService.instant('privacy_policy'), 
        path: '/privacy' 
      }
    ];*/
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  /*onOptionClick(event: any) {
    //console.log('onOptionClick:', event.option.path, event);
    if(event.option.id) {
      window.location.href = event.option.path + '#' + event.option.id;
    } else {
      this.router.navigate([event.option.path]);
    }
  }*/
}
