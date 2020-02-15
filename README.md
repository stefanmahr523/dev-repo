# TestUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
 


netstat -ano | findstr /r 0.0:80
tasklist /FI "PID eq 1040" /FO TABLE
taskkill /pid 4244 /f

------------------------
E2E TESTING (ng e2e)

1) Setup protractor with webdriver-manager
==========================================
Selenium WebDriver Framework: Selenium Client Lib (Java, JS, ..) > JSON Protocol > Browser Driver (= WebDriver, API by W3C) like chromeDriver, meedgedriver,.. > Real Browser. Selnium provieds own drivers (chromium, firefox) and provides use of third party drivers (chromeDriver, geckoDriver, edgeDriver). Driver and Browser resides on same System (local or remote)
- direct communication: Selenium WebDriver talks directly to browser via driver
- remote communication through Selenium Server (or RemoteWebDriver): Selnium Server (or Grid) on Test-machine talks to remote hosts (with installed driver+browser)
- WebDriver is for browser-communication only. our testframe-work Protractor executes WebDriver.

Webdriver-Manager: command-line tool to get selenium server running; a selenium server and browser driver manager (w3c webdriver) for your end to end tests. 

> npm install (-g) webdriver-manager
> webdriver-manager clean // cleans /selenium dir
> webdriver-manager update
> (webdriver-manager update --versions.gecko=v0.25.0 --versions.chrome=74.0.3729.6  --standalone false) install specific version
> webdriver-manager clean, status

> ng e2e --webdriver-update=false




- Prior to starting the selenium server, 'update' downloads the selenium server jar and driver binaries. By default it will download the selenium server jar and chromedriver binary (/selenium/ folder).
- beware of differnt locations of webdriver-manager (e.g. protractor installs version in its node_modules)

>> Edge Testing (local)
- direct connect not possible, so we need to use Selenium (Standalone-) Server
1) Download (vendor specific) Edge-Webdriver from MS (e.g. msedgedriver.exe / 64bit matching to installed edge version, e.g. v80+ with chrome-engine) and (optionally) copy driver to directory of other drivers or system-folder
2) Start Selenium-Server on Port 4444 with edge webdriver

> java -Dwebdriver.edge.driver=D:\\projects\\test-ui\\node_modules\\webdriver-manager\\selenium\\msedgedriver.exe -jar D:\\projects\\test-ui\\node_modules\\webdriver-manager\\selenium\\selenium-server-standalone-3.141.59.jar -port 4444
alternativ:
> webdriver-manager start --edge "D:\projects\test-ui\node_modules\webdriver-manager\selenium\msedgedriver.exe"
> (webdriver-manager start --edge "D:\projects\test-ui\node_modules\webdriver-manager\selenium\msedgedriver.exe" --versions.chrome latest) // two driver

- this will start a Selenium server. Protractor will send request to server to control a local browser.

3) Change protractor.config.js
  ..
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ..
  {
       'browserName': 'MicrosoftEdge',
       'platform': 'WINDOWS'
  }


 

https://selenium.dev/documentation/en/webdriver/understanding_the_components/

https://dev.to/davert/5-reasons-you-should-not-use-protractor-in-2019-3l4b



--------

 (BDD) test frameworks out of the box: Jasmine and Mocha. (not Cucumber)

 >> Test multiple versions of a browser (and on differnt OS), and in parallel, is impossible in protractor and selenium webDriver on one machine..
 >> use selenium grid (e.g. device lab or VMs / clients as docker machines); problem with windows! and mobile (ios, andriod)..  
 >> In house: Zalenium - docker based inhouse grid / jenkins
 >>  Grid in Cloud:   kobiton, sauce, BrowserStack , aws device farm, LambdaTest
 >> Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.
