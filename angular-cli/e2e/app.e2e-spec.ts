import { AgGridPage } from './app.po';

describe('ag-grid App', () => {
  let page: AgGridPage;

  beforeEach(() => {
    page = new AgGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
