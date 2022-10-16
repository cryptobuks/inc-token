import { Component, ElementRef } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TOKEN_SUPPLY } from 'src/app/shared/constants';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../assets/css/customized-timeline.css', 
    './home.component.css'
  ]
})
export class HomeComponent extends BasePageComponent {

  readonly titleKey = "app_name";
  useCaseSteps: any[];
  tokenomics: any[];

  constructor(element: ElementRef) {
    super(element);
  }

  onInit(): void {
    this.useCaseSteps = [
      {
        title: this.translateService.instant('create_survey_title'),
        subject: this.translateService.instant('create_survey_subject'),
        content: this.translateService.instant('create_survey_content'),
        icon: "org-icon",
        color: "#9C27B0"
      },
      {
        title: this.translateService.instant('post_survey_title'),
        subject: this.translateService.instant('post_survey_subject'),
        content: this.translateService.instant('post_survey_content'),
        icon: PrimeIcons.SEND,
        color: "#673AB7"
      },
      {
        title: this.translateService.instant('user_participation_title'),
        subject: this.translateService.instant('user_participation_subject'),
        content: this.translateService.instant('user_participation_content'),
        icon: PrimeIcons.USER,
        color: "#FF9800"
      },
      {
        title: this.translateService.instant('receive_reward_title'),
        subject: this.translateService.instant('receive_reward_subject'),
        content: this.translateService.instant('receive_reward_content'),
        icon: PrimeIcons.WALLET,
        color: "#4caf50"
      },
      {
        title: this.translateService.instant('survey_results_title'),
        subject: this.translateService.instant('survey_results_subject'),
        content: this.translateService.instant('survey_results_content'),
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];

    this.tokenomics = [];
    const tokenomicValues = [
      this.translateService.instant('tokenomic_1'),
      this.translateService.instant('tokenomic_2'),
      this.translateService.instant('tokenomic_3'),
      this.translateService.instant('tokenomic_4')
    ];

    for(let values of tokenomicValues) {
      const percent = parseInt(values[0]);
      const title = values[1];
      const description = values[2];
      const amount = (percent * TOKEN_SUPPLY / 100).toLocaleString('en-US');

      this.tokenomics.push({
        title,
        percent: percent + "%",
        amount,
        description
      });
    }
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
  }
}
