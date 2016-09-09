module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Firefox'],
    files: [
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js',   //to run the specs, it is definitely needed
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.js', //to load angularjs before
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-mocks.js', //the angular mocks are also needed.

        'app/scripts/app.js',
        'app/scripts/controllers/SelectPizzaController.js',
        'spec/unit/*.js'

    ]
  })
};