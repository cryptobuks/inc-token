import { Component, ElementRef, ViewChild } from '@angular/core';
import { tokenAddress } from 'src/app/shared/constants';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent extends BasePageComponent {

  readonly titleKey = "faq";
  items: any[]/*MenuItem[]*/;
  selectedIndex: number = 0;

  @ViewChild('responseCnt') responseCnt: ElementRef;

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.items = [
      {
        label: this.translateService.instant('faq_question_1'),
        content: this.translateService.instant('faq_response_1'),
        command: (/*event*/) => { this.setSelectedIndex(0); }
      },
      {
        label: this.translateService.instant('faq_question_2'),
        content: this.translateService.instant('faq_response_2'),
        command: (/*event*/) => { this.setSelectedIndex(1); }
      },
      {
        label: this.translateService.instant('faq_question_3'),
        content: this.translateService.instant('faq_response_3'),
        command: (/*event*/) => { this.setSelectedIndex(2); }
      },
      {
        label: this.translateService.instant('faq_question_4'),
        content: this.translateService.instant('faq_response_4'),
        command: (/*event*/) => { this.setSelectedIndex(3); }
      },
      {
        label: this.translateService.instant('faq_question_5'),
        content: this.translateService.instant('faq_response_5'),
        command: (/*event*/) => { this.setSelectedIndex(4); }
      },
      {
        label: this.translateService.instant('faq_question_6'),
        content: this.translateService.instant('faq_response_6'),
        command: (/*event*/) => { this.setSelectedIndex(5); }
      },
      {
        label: this.translateService.instant('faq_question_7'),
        content: this.translateService.instant('faq_response_7'),
        command: (/*event*/) => { this.setSelectedIndex(6); }
      },
      {
        label: this.translateService.instant('faq_question_8'),
        content: this.translateService.instant('faq_response_8'),
        command: (/*event*/) => { this.setSelectedIndex(7); }
      },
      {
        label: this.translateService.instant('faq_question_9'),
        content: this.translateService.instant('faq_response_9'),
        command: (/*event*/) => { this.setSelectedIndex(8); }
      }
    ];

    this.items[3].content[1] = this.items[3].content[1].replace("{{val1}}", tokenAddress);
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
    this.scrollToRef(this.responseCnt);
  }

  getLabel(): string | null {
    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        if (i == this.selectedIndex) {
          return this.items[i].label;
        }
      }
    }

    return null;
  }

  getContent(): string[] | null {
    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        if (i == this.selectedIndex) {
          return this.items[i].content;
        }
      }
    }

    return null;
  }
}
