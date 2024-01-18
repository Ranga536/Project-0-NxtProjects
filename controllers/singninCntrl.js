app.controller("signinCntrl", ["$scope","$location", "signinservice", function($scope, $location, signinservice) {
    $scope.usersLIst = [];
    $scope.name;
    $scope.pass;
    $scope.flag = false;
    $scope.getData = function() {
        signinservice.getDtls(function(data){
            
            // data.forEach(element => {
            //     if(element.name==$scope.name && element.pass == $scope.pass){
            //         alert("Welcome User")
            //         $location.path('../dashboard/home.html');
            //         return 
            //     }
            //     else{
            //         alert("Enter Valid Details")
            //     }
            // });
            for (let i of data) {
                if (i.name == $scope.name && i.pass == $scope.pass) {
                    // localStorage.setItem("username", $scope.name)
                    alert("Welcome");
                    window.location.href = "dashboard/home.html";
                    break;
                } else{
                    alert("Enter Valid Username or Password");
                    break;
                }
            }
        }) 
    }
    
}])