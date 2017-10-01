import { AngularSessionTwoPage } from './app.po';

describe('angular-session-two App', () => {
  let page: AngularSessionTwoPage;

  beforeEach(() => {
    page = new AngularSessionTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
