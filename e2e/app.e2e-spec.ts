import { AeCMSPage } from './app.po';

describe('ae-cms App', () => {
  let page: AeCMSPage;

  beforeEach(() => {
    page = new AeCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
