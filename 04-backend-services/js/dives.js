angular.module("dive-log", [])
       .controller("dive-log-controller", DiveLogController)
       .factory("diveLogService", diveLogService);

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
      $scope.dives = data;
      $scope.errorMessage = "";
      loading = false;
    }, function(error){
      $scope.errorMessage = error;
      loading = false;
    });
  }

}

function diveLogService($q) {
  var dives = [
    {
      site: "Instituto Tecnológico de Tepic",
      location: "Tepic, Nayarit México",
      depth: 72,
      time: 54
    },
    {
      site: "Plaza San Rafael",
      location: "Tepic, Nayarit México",
      depth: 54,
      time: 38
    },
    {
      site: "Universidad Autónoma de Nayarit",
      location: "Tepic, Nayarit México",
      depth: 98,
      time: 62
    }];
    var counter = 0;

    return {
      getDives: function() {
        var deferred = $q.defer();
        counter++;
        setTimeout(function(){
          if(counter % 3 == 0) {
            deferred.reject("Error: Call counter is " + counter);
          } else {
            deferred.resolve(dives);
          }
        }, 1000);
        return deferred.promise;
      }
    };

}
