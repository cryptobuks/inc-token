import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css']
})
export class CookiePolicyComponent extends BasePageComponent {

  readonly titleKey = "cookie_policy";

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
