import { PcdWebPage } from './app.po';

describe('pcd-web App', () => {
  let page: PcdWebPage;

  beforeEach(() => {
    page = new PcdWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pcd works!');
  });
});
