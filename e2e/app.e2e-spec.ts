import { StarshipsAppPage } from './app.po';

describe('starships-app App', () => {
  let page: StarshipsAppPage;

  beforeEach(() => {
    page = new StarshipsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
