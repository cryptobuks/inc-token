import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { GenericDialogComponent } from './comps/generic-dialog/generic-dialog.component';
import { GenericSnackBarComponent } from './comps/generic-snack-bar/generic-snack-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './pages/about/about.component';
import { CommunityComponent } from './pages/community/community.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { PrimeNGModule } from './primeng.module';
import { FaqComponent } from './pages/faq/faq.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FormsModule } from '@angular/forms';
import { LegalComponent } from './pages/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenericDialogComponent,
    GenericSnackBarComponent,
    AboutComponent,
    CommunityComponent,
    DocumentationComponent,
    FaqComponent,
    NotFoundComponent,
    PrivacyComponent,
    TermsComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      },
      // For Missing Translation
      //https://github.com/ngx-translate/core#how-to-handle-missing-translations
      useDefaultLang: true
    }),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PrimeNGModule,
    FormsModule
  ],
  entryComponents: [
    GenericDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
   * This is good to prevent injecting the service as constructor parameter.
   */
  static injector: Injector;
  static dialog: MatDialog;
  static snackBar: MatSnackBar;

  constructor(private injector: Injector, private dialog: MatDialog, private snackBar: MatSnackBar) {
    AppModule.injector = injector;
    AppModule.dialog = dialog;
    AppModule.snackBar = snackBar;
  }
}
