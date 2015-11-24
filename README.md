# Angular - core directives labs

## Objectives
1. List all animals from the `list` array
2. Hide #animal-1 when while input is empty
3. Increase the counter by one for each click on the button

## Solution
Your work should be done completely in the `app/views/main.html` file. All
js files are set up in the way that allows your code to pass tests.

Please read `TODO` comments in the `main.html` file - sticking to the hints
will make it easier to satisfy the tests.

## Deliverables
Pass the e2e tests.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## How to install tests environment
                           
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
