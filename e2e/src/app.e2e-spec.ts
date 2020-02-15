import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('test-ui app is running!');
  });

  afterEach(async () => {
    // issue on firefox with getLogs(); https://github.com/w3c/webdriver/issues/406
    browser.getCapabilities().then(async (cap) => {
      browser.browserName = cap.get('browserName');
      if (browser.browserName !== 'firefox'){
      // Assert that there are no errors emitted from the browser's console log
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
       } as logging.Entry));
      }
    }); 
  });  
    
});



  
