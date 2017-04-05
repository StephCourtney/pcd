import { browser, element, by } from 'protractor';

export class PcdWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pcd-root h1')).getText();
  }
}
