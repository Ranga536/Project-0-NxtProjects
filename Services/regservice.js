app.service("registerservice", ["$http", function($http) {
    this.sendUserDtls = function(obj) {
        $http(
            {
                method: "POST", 
                url : "http://localhost:3008/users",
                data:obj
            }  
        ).then(function(response) {
            console.log(response.data);
        }, function(e) {
            console.log(e);
        })
    }
}])