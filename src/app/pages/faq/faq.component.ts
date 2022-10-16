import { Component, ElementRef } from '@angular/core';
import { TOKEN_ADDRESS } from 'src/app/shared/constants';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent extends BasePageComponent {

  readonly titleKey = "faq";
  items: any[];

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.items = [];
    for(let i = 1; i <= 13; i++) {
      this.items.push({
        label: this.translateService.instant('faq_question_' + i),
        content: this.translateService.instant('faq_response_' + i)
      });
    }

    this.items[3].content[1] = this.items[3].content[1].replace("{{val1}}", TOKEN_ADDRESS);
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
