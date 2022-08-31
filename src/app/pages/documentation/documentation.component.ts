import { Component, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent extends BasePageComponent {

  readonly titleKey = "documentation";
  items: MenuItem[];
  contentType: number = 1;

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.items = [
      {
        label: this.translateService.instant('introduction'),
        command: (event) => { this.contentType = 1; }
      },
      {
        label: this.translateService.instant('api_reference'),
        command: (event) => { this.contentType = 2; }
      }
    ];
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
