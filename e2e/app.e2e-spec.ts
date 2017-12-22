import { UtilitytokensPage } from './app.po';

describe('utilitytokens App', () => {
  let page: UtilitytokensPage;

  beforeEach(() => {
    page = new UtilitytokensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
