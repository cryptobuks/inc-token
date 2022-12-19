import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent extends BasePageComponent {

  readonly titleKey = "cookie_policy";

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
