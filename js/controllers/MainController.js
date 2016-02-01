app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
  	series: "Game of Thrones",
  	series_img: "img/got_s6.jpg",
  	genre: "Fantasy",
  	season: 6,
  	episode: "You Know Nothing",
  	description: "Spoilers throughout the interwebs claim that you know nothing about Jon Snow. Is he a bastard? Is he dragon-born?",
  	datetime: new Date(2016, 04, 24, 21, 00, 00, 00)
  }
}]);

// on the app, add the controller
// name the controller "MainController"
// $scope.property or $scope.method/function