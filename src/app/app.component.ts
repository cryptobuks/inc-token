import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from './models/lang';
import { getUserLocale } from './shared/helper';
import { DOCS_URL, langMap, SURVEY_URL } from './shared/constants';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MatToolbar } from '@angular/material/toolbar';
import { filter } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { WatchAssetService } from './services/watch-asset.service';
import { fadeAnim } from './anims/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnim
  ]
})
export class AppComponent implements OnInit {

  static instance: AppComponent;

  langs: Lang[] = [];

  selectedLang: Lang;
  currentLocal: string;
  currentView: string;
  fadeState = '*';

  @ViewChild('toolbar') toolbar: MatToolbar;
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(
    private titleService: Title,
    private translateService: TranslateService,
    private router: Router,
    @Inject(LOCALE_ID) defLocale: string,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private watchAssetService: WatchAssetService
    ) {
    this.matIconRegistry.addSvgIcon(
      `life_signal`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/life_signal.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `metamask`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/metamask.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `telegram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/telegram.svg")
    );

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      //console.log(event);
      const url = (event as NavigationEnd).url;

      if (url == '/survey') {
        window.location.href = SURVEY_URL;
        return;
      }

      if (url == '/docs') {
        window.location.href = DOCS_URL;
        return;
      }

      this.currentView = url;
      this.fadeState = 'out';
    });

    AppComponent.instance = this;
    this.currentLocal = getUserLocale(defLocale);
    let localVals = this.currentLocal.split("-");
    let langCode = localVals[0].toLowerCase();

    // Por si el user cambia el valor de localStorage en la consola de desarrollo
    if (localStorage.language && langMap.get(localStorage.language)) {
      langCode = localStorage.language;
    }
    // Comprobar si el lenguage es soportado
    else if (!langMap.get(langCode)) {
      langCode = "en";
    }

    langMap.forEach((value: string, key: string) => {
      let lang = {
        code: key,
        name: value
      };
      this.langs.push(lang);

      if (!this.selectedLang && key == langCode) {
        this.selectedLang = lang;
      }
    });

    this.translateService.setDefaultLang("en");
    this.translateService.use(this.selectedLang.code);
    this.translateService.get(['']).subscribe(translations => {
    });
  }

  ngOnInit() {
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  setLang(lang: Lang) {
    localStorage.language = lang.code;
    window.location.reload();
  }

  changeRoute(route: string) {
    this.drawer.close();
    this.router.navigate([route]);
  }

  onFadeDone() {
    if(this.fadeState  == 'out') {
      setTimeout(() => {
        this.fadeState  = 'in';
      }, .1);
    }
  }

  /*addToken() {
  }*/

  isCurrentView(url: string) {
    return url == this.currentView;
  }

  scrollToTop() {
    if (this.toolbar) {
      this.toolbar._elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scroll(0, 0);
    }
  }
}
