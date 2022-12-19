import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent extends BasePageComponent {

  readonly titleKey = "privacy_policy";

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
