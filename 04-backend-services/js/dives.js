angular.module("dive-log", [])
       .controller("dive-log-controller", DiveLogController)
       .factory("diveLogService", diveLogService)
       .constant("apiUrl", "http://unraveling-ng.azurewebsites.net/");

function DiveLogController($scope, diveLogService) {
  $scope.dives = [];
  $scope.errorMessage = "";
  $scope.isLoading = isLoading;
  $scope.refreshDives = refreshDives;

  var loading = false;

  function isLoading() {
    return loading;
  }

  function refreshDives() {
    loading = true;
    $scope.dives = [];
    diveLogService.getDives().then(function(data){
      $scope.dives = data.data;
      $scope.errorMessage = "";
      loading = false;
    }, function(error){
      $scope.errorMessage = error;
      loading = false;
    });
  }

}

function diveLogService($http, apiUrl) {
    return {
      getDives: function() {
        var url = apiUrl + "/api/backendtest/dives";
        return $http.get(url);
      }
    };
}
