# Pizza Store

An example of 'learning angularjs testing'.

## Installation

Run

    npm install

## Unit Test

Run

    grunt karma:unit

## End2end test

To run the end2end test the webdriver server needs to be up and running:

    node_modules/webdriver-manager/bin/webdriver-manager start

Also run the local development server:

    node node_modules/angular-dev-server/index.js

Then run protractor with the configuration file:

    node node_modules/protractor/bin/protractor protractor.conf.js 


