app.service("apidataservice", ["$http", function($http) {
    this.getDtls = function(cb) {
        $http(
            {
                method: "GET", 
                url : "https://apis.ccbp.in/ps/projects"
            } 
        ).then(function(response) {
            console.log(response.data.projects);
            // cb(response)
            cb(response.data.projects)
        }, function(e) {
            console.log(e);
        })
    }
}])
