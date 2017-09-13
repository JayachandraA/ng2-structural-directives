import { Ng2StructuralDirectivesPage } from './app.po';

describe('ng2-structural-directives App', () => {
  let page: Ng2StructuralDirectivesPage;

  beforeEach(() => {
    page = new Ng2StructuralDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
