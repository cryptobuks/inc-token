import { AppModule } from "../app.module";
import { GenericDialogComponent } from "../comps/generic-dialog/generic-dialog.component";
import { GenericSnackBarComponent } from "../comps/generic-snack-bar/generic-snack-bar.component";

export const EARTH_RADIUS = /*6378137*/6371009;

export function getUserLocale(defaultValue: string): string {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return defaultValue;
  }
  const wn = window.navigator as any;
  let lang = wn.languages ? wn.languages[0] : defaultValue;
  lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
  return lang;
}

export function messageDialog(title: string, content: string, type: string = '') {
  AppModule.dialog.open(GenericDialogComponent, {
    data: {
      type: type,
      title: title,
      content: content
    }
  });
}

export function actionDialog(title: string, content: string, actions: string = '') {
  AppModule.dialog.open(GenericDialogComponent, {
    data: {
      title: title,
      content: content,
      actions: actions
    }
  });
}

export function infoDialog(title: string, content: string) {
  messageDialog(title, content, 'info');
}

export function warnDialog(title: string, content: string) {
  messageDialog(title, content, 'warn');
}

export function errorDialog(title: string, content: string) {
  messageDialog(title, content, 'error');
}

export function messageToast(icon: string, message: string, panelClass: string | undefined = undefined) {
  AppModule.snackBar.openFromComponent(GenericSnackBarComponent, {
    data: {
      icon: icon,
      message: message
    },
    duration: 3 * 1000,
    verticalPosition: 'top',
    panelClass: panelClass
  });
}

export function okayToast(message: string) {
  messageToast('check_circle', message, 'alert-info');
}

export function infoToast(message: string) {
  messageToast('info', message, 'alert-info');
}

export function warnToast(message: string) {
  messageToast('info', message, 'alert-warn');
}

export function errorToast(message: string) {
  messageToast('info', message, 'alert-error');
}

export function daysInMonth (month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export const isNum = (val: string) : boolean => {
  return !isNaN(Number(val));
}

export function format(str: string, ...vals:string[]) {

  for (let i = 0; i < vals.length; i++) {
    str = str.replace("{" + i + "}", vals[i]);
  }

  return str;
}

export function deepClone<Type>(obj: Type): Type {
  return JSON.parse(JSON.stringify(obj));
}

export function joinWords(words: string[], max: number, separator?: string): string {
  let str = words.slice(0, max).join(separator);

  if (words.length > max) {
    str += ", ...";
  }

  return str;
}

export const indexOfIgnoreCase = (array: any[], val: any) : number => {
  return array.findIndex(item => item.toLowerCase() === val.toLowerCase());
}

export const containsIgnoreCase = (array: any[], val: any) : boolean => {
  return indexOfIgnoreCase(array, val) >= 0;
}

export function getAge(birthDate: Date): number {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}

// min and max included 
export function randomFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function degreesToRadians(degrees: number): number {
  var pi = Math.PI;
  return degrees * (pi/180);
}

export function openBlank(url: string) {
  var anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.click();
}​
