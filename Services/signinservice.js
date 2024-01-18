app.service("signinservice", ["$http", function($http) {
    this.getDtls = function(cb) {
        $http(
            {
                method: "GET", 
                url : "http://localhost:3008/users"
            }  
        ).then(function(response) {
            console.log(response.data);
            cb(response.data)
        }, function(e) {
            console.log(e);
        })
    }
}])