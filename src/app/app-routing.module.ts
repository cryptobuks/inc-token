import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CommunityComponent } from './pages/community/community.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalComponent } from './pages/legal/legal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },
  { path: "community", component: CommunityComponent },
  { path: "terms-of-service", component: TermsComponent },
  { path: "privacy-policy", component: PrivacyComponent },
  { path: "cookie-policy", component: CookiePolicyComponent },
  { path: "disclaimer", component: DisclaimerComponent },
  { path: "legal", component: LegalComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
