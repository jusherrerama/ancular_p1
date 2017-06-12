import { PlantillaPage } from './app.po';

describe('plantilla App', () => {
  let page: PlantillaPage;

  beforeEach(() => {
    page = new PlantillaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
