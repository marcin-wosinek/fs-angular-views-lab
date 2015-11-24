## Build & development

Run `grunt` for building and `grunt serve` for preview.

# How to install tests environment
                           
First make sure you have installed:
java
node & npm                 
and all local dependencies.

Then run:
./node_modules/.bin/webdriver-manager update --standalone
to install current webdriver
  
# How to run the tests     

At top level of application, run

1. Start the Selenium server:
./node_modules/.bin/webdriver-manager start

2. Open a new terminal and run Protractor:
./node_modules/.bin/protractor test/protractor.conf.js

# Note!
Make sure `grunt serve` is running before testing.
