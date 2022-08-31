import { trigger, animate, style, query, transition, state } from '@angular/animations';

export const fadeAnim = trigger('fadeAnim', [
  state('*', style({
    opacity: 0,
  })),
  state('in', style({
    opacity: 1,
  })),
  state('out', style({
    opacity: 0,
  })),
  transition('* => in', animate('1000ms ease-in')),
  transition('in => out', animate('0ms ease-in'))
]);
