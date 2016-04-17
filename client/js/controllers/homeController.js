

 myApp.controller("homeController", ["$scope", function($scope) {
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/CLFull_Horizontal.jpg"
    },
    {
        image: "img/Launchvic_logo_small.png"
    },
    {
        image: "img/techfugees_full_width.jpg"
    }];

 }]);

console.log("controller");

//    myApp.controller('homeController', function($scope) {
        // create a message to display in our view
//        $scope.message = 'Everyone come and see how good I look!';
//    });

