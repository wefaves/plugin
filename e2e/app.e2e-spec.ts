import { PluginWefavesPage } from './app.po';

describe('plugin-wefaves App', () => {
  let page: PluginWefavesPage;

  beforeEach(() => {
    page = new PluginWefavesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
