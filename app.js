(function() {

  var AppComponent = ng.core.Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>'
  })
  .Class({
    constructor: function() {
      // empty
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(AppComponent);
  });

})();
