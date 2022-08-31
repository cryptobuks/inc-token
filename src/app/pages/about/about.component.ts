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
  members: any[];
  roadmapSteps: any[];

  selectedMember: any;

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.members = [
      {
        photo: 'assets/img/younes.jpg',
        name: 'Younes',
        post: this.translateService.instant('member_1_post'),
        social: [
          { logo: 'pi pi-twitter', name: 'Twitter', url: 'https://twitter.com/YounesHass' },
          { logo: 'pi pi-telegram', name: 'Telegram', url: 'https://t.me/YounesHass' }
        ]
      },
      {
        photo: 'assets/img/tarik.jpg',
        name: 'Tarik',
        post: this.translateService.instant('member_2_post'),
        social: [
          { logo: 'pi pi-twitter', name: 'Twitter', url: 'https://twitter.com/XXXX' },// TODO add tarik profile
          //{ logo: 'pi pi-telegram', name: 'Telegram', url: 'https://t.me/XXXX' }
        ]
      },
      {
        photo: 'assets/img/isabel.jpg',
        name: 'Isabel',
        post: this.translateService.instant('member_3_post'),
        social: [
          { logo: 'pi pi-telegram', name: 'Telegram', url: 'https://t.me/IsaBeas' }
        ]
      }
    ];

    this.roadmapSteps = [
      {
        title: this.translateService.instant('target_1_title'),
        subject: this.translateService.instant('target_1_subject'),
        content: this.translateService.instant('target_1_content'),
        completed: true
      },
      {
        title: this.translateService.instant('target_2_title'),
        subject: this.translateService.instant('target_2_subject'),
        content: this.translateService.instant('target_2_content')
      },
      {
        title: this.translateService.instant('target_3_title'),
        subject: this.translateService.instant('target_3_subject'),
        content: this.translateService.instant('target_3_content')
      },
      {
        title: this.translateService.instant('target_4_title'),
        subject: this.translateService.instant('target_4_subject'),
        content: this.translateService.instant('target_4_content')
      },
      {
        title: this.translateService.instant('target_5_title'),
        subject: this.translateService.instant('target_5_subject'),
        content: this.translateService.instant('target_5_content')
      },
      {
        title: this.translateService.instant('target_6_title'),
        subject: this.translateService.instant('target_6_subject'),
        content: this.translateService.instant('target_6_content')
      },
      {
        title: this.translateService.instant('target_7_title'),
        subject: this.translateService.instant('target_7_subject'),
        content: this.translateService.instant('target_7_content')
      }
    ];
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  displayMember(index: number) {
    const member = this.members[index];

    if(member.social.length > 1) {
      this.selectedMember = member;
    } else {
      this.selectedMember = undefined;
      openBlank(member.social[0].url);
    }
  }

  displayUrl(url: string) {
    openBlank(url);
  }
}
