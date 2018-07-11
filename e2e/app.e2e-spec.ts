import { Project05EmpCrudClientPage } from './app.po';

describe('project05-emp-crud-client App', function() {
  let page: Project05EmpCrudClientPage;

  beforeEach(() => {
    page = new Project05EmpCrudClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
