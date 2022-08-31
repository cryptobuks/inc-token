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
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
