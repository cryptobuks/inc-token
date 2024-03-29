import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent extends BasePageComponent {

  readonly titleKey = "terms_of_service";

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.loadScript("termly-jssdk", "https://app.termly.io/embed-policy.min.js");
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
