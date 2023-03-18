# React Native App

_RN App, fetchin and sending data with redux and RTK Query, added navigation and NativeBase UI library,react-navigation

## Features

## Already working:
- Conexión al endpoint
- Navegación entre pantallas
- Pruebas unitarias



## Tech and references

uses a number of open source projects to work properly:


| Name                                                                     |                                                                               Latest Version                                                                                |
| ------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [@react-navigation/core](/packages/core)                                 |                 [![badge](https://img.shields.io/npm/v/@react-navigation/core.svg?style=flat-square)](https://www.npmjs.com/package/@react-navigation/core)
| [native-base](/packages/core)                                 |                 [^3.4.28](https://nativebase.io/)
| [@reduxjs/toolkit](/packages/core)                                 |                 [^1.9.35](https://es.redux.js.org/)
| [react-native](/packages/core)                                 |                 [0.71.4](https://reactnative.dev/docs/getting-started)


## Installation
## Development


## How to run it (At least for Android devices)
- yarn
- yarn start
- yarn test

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
cd <ProjectFolder>
yarn
yarn start | yarn test
yarn android | yarn ios
```


## Running Tests

This project can run Unit test using @testing-library/react-native

```bash
  yarn run test
```

## NOTE: check comments on jest.config.js and package.json how to switch beetwen unit test and e2e test
# E2E testing for React Native with Jest, Appium and WebDriverIO (iOS and Android)


In this repo you will find a sample project to showcase how to do E2E testing with [Jest](https://jestjs.io/) + [Appium](https://appium.io/) + [WebDriverIO](https://webdriver.io/) for Android and iOS on react-native.

_It's a bit janky but it serves the purpose of showcasing how to a basic setup needs to be correctly wired._

## How to use

First off, install the needed tooling:

```bash
npm install appium@2.0.0-beta.53 -g
appium driver install uiautomator2
appium driver install xcuitest
```

> More details about drivers in Appium [here](https://appium.github.io/appium/docs/en/2.0/guides/managing-exts/) and [here](https://appium.github.io/appium/docs/en/2.0/quickstart/uiauto2-driver/)


After this, run the app on the Android emulator/ iOS simulator via `yarn android`/`yarn ios` - **you need to do this at least once** (for simplicity sake, we want the app to be already installed on the simulator/emulator before testing).

Once the app is on the emulator/simulator and Metro is running, you can open a new terminal window and start the Appium server via `yarn appium`.

With the server is running, you can use the commands `test:e2e:android` and `test:e2e:ios` to try out the E2E loop, or use `test:e2e:all` to run both one after the other.

### A note on setup

Please make sure that your local emulator/simulator config matches the `e2e-config.js` setup or it will fail 'cause it won't be able to connect to the platform.

### Notes on E2E: how does it work?

The basic premise is that this is, from Appium's perspective, just a project like any other: the app it needs to test is a black box, and it gets to communicate with it via webdriverIO's client.

Via the command `test:e2e:android` we start the testing, that starts up the `basicE2E.test.js` script - this file gets via an helper script `e2e-config.js` which platform to test (passed as an ENV variable, `E2E_DEVICE` during the yarn command, check `test:e2e:android` in `package.json`) and goes into the `package.json`, section `e2e`, and uses those info the `beforeAll` to stand up the webdriverIO client.

Then the actual testing is done by using as "communication point" to invoke the native components this following pattern `client.$('~<string>')` (the ~ is intentional, and important!). The `<string>` here is what we setup in `App.js`, and it should be just the `accessibilityID` option (that RN passes back to the native component) but actually we need to use a bit of a workaround script called `testProps` (at the top of `App.js`) to tailor this use for iOS/Android and for the `Text` component. (_huge props to Slav Kurochkin for finding this out and explaining it [in this article](http://93days.me/testing-react-native-application/)_)

This way we can interact with all the elements on screen that have their string setup as props via `{...testProps(<string>)}`.

If this isn't clear enough or you'd like a blogpost on this subject, feel free to [open an issue](https://github.com/kelset/react-native-e2e-jest-appium-webdriverio/issues/new) or talk to me [over on Twitter](https://twitter.com/kelset).

### Inspiration and resources

Getting this together was quite a bit of work because there aren't many resources around that walk you through the entire setup for React Native Android/iOS - I pieced this sample app together by following and taking bit and pieces from multiple places. In no particular order:

- https://appium.io/docs/en/about-appium/intro/?lang=en
- https://github.com/kelset/react-native-e2e-jest-appium-webdriverio


#

## Running E2E Tests Appium and python
The human-readable features are in `tests/features/` in `*.feature` files. Each step in the feature maps to a Python function in a `*.py` file in `tests/`.

#### Installing:
```shell
npm install -g appium
npm install appium-doctor -g
# Run appium-doctor and see if everything is installed correctly
appium-doctor
pip3 install virtualenv
virtualenv workspace
source workspace/bin/activate
pip3 install pytest pytest-bdd appium-python-client pytest-parallel
```

#### Test Run
- Run `react-native start` in one tab and `appium` in another to start local servers.
- Build the app for ~~both iOS and~~ Android, producing simulator and emulator-ready files, and allowing the React Native server to complete bundling `index.ios.js` and `index.android.js`.
- Edit the `app` file locations for the webdrivers in `tests/test_android.py` and `tests/test_ios.py` to find the `.app` and `.apk` files on your local system.
- Run `py.test tests`



## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

 ![alt text](https://i.ibb.co/CKTWkGM/Z0-ELRZe-CYKC7-Wyipgdwna8h-Xa-RTJWT6b-ZSUJR7v-UVk-Zk-Qn-JQDSn-U6-FGTch-Kmt-IE3-h-1-R-i-FXYz-K7k-FUWT.jpg)

 ![alt text](https://i.ibb.co/zfc3Wd5/KMHYa82-Qa-Ybpnc-Yi-FWp-XJCpr-ZU0-TZu3-Pxcz3g-WZu-TDQKBS4-Ed5s7jl-Wwm-KSDofbybf-Dlon-Orof-lnea-JFFXt.jpg)

