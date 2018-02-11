import { Come2ourwedding.ComPage } from './app.po';

describe('come2ourwedding.com App', () => {
  let page: Come2ourwedding.ComPage;

  beforeEach(() => {
    page = new Come2ourwedding.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
