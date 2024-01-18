app.controller("apicontroller", ["$scope", "apidataservice", function($scope, apidataservice) 
{
    $scope.projectList;
    // $scope.username = localStorage.getItem("username");
    $scope.getapiData = function()
    {
        $scope.projectList = apidataservice.getDtls(function(data) {
            $scope.projectList = data;
        });
    }
}])