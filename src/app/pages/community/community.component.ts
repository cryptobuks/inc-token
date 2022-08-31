import { Component, ElementRef } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent extends BasePageComponent {

  readonly titleKey = "community";
  
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
