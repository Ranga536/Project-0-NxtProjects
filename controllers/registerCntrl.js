app.controller("registerCntrl", ["$scope","registerservice", function($scope,registerservice) {
        
        $scope.username;
        $scope.useremail;
        $scope.userpass;
        $scope.sendData = function() {
            let obj={
              name:  $scope.username,
              email:  $scope.useremail,
              pass:  $scope.userpass
            }

            if ($scope.username !== "" && $scope.pass !== "") {
              registerservice.sendUserDtls(obj);
              window.location.href = "signin.html";
            }
            
            
        }
    }])