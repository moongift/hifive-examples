// Generated by CoffeeScript 1.7.1
$(function() {
  var helloWorldController;
  helloWorldController = {
    __name: 'HelloWorldController',
    '#btn click': function() {
      return alert('Hello, World!');
    }
  };
  return h5.core.controller('#container', helloWorldController);
});
