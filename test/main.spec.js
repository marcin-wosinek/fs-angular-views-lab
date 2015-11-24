'use strict';

describe('Main page', function() {
  beforeEach(function() {
    browser.get('#/main');
  });

  it('show hide message when animal provided', function() {
    var animal = element(by.model('animal')),
      message = element(by.id('message'));

    expect(message.getText()).toEqual(jasmine.any(String));

    animal.sendKeys('test');
    expect(message.getText()).toEqual('');
  });
});
