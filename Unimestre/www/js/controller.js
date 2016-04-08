var app = angular.module('app', []).directive('menuSite', function() {
  return {
    templateUrl: 'menu.html'
  };
});

app.controller('login', function($scope,$http) {

    $scope.logar = function()
    {

        location.href="home.html";

     /*   $http.post('http://www.tecnologias.local:8080/',$scope.formLogin).success(function(data){
            location.href="home.html";
        })*/
    }
});


app.controller('home', function($scope,$http) {

    $scope.notas = function()
    {

        location.href="notas.html";

     /*   $http.post('http://www.tecnologias.local:8080/',$scope.formLogin).success(function(data){
            location.href="home.html";
        })*/
    }
});