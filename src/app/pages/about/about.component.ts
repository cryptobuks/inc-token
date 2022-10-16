import { Component, ElementRef } from '@angular/core';
import { openBlank } from 'src/app/shared/helper';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    '../../../assets/css/customized-timeline.css',
    './about.component.css'
  ]
})
export class AboutComponent extends BasePageComponent {

  readonly titleKey = "about";
  roadmapSteps: any[];

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.roadmapSteps = [];
    for(let i = 1; i <= 7; i++) {
      this.roadmapSteps.push({
        title: this.translateService.instant(`target_${i}_title`),
        subject: this.translateService.instant(`target_${i}_subject`),
        content: this.translateService.instant(`target_${i}_content`),
        completed: i == 1
      });
    }
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
