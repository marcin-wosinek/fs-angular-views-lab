'use strict';

describe('Main page', function() {
  beforeEach(function() {
    browser.get('#/main');
  });

  it('should show hide message when animal provided', function() {
    var animal = element(by.model('animal')),
      message = element(by.id('message'));

    expect(message.getText()).toEqual(jasmine.any(String));

    animal.sendKeys('test');
    expect(message.getText()).toEqual('');
  });

  it('should show all provided animals', function() {
    var animalList = element(by.id('animal-list'));

    expect(animalList.getText()).toEqual('mouse\nduck');
  });
});
