angular.module("dive-log", [])
       .controller("dive-log-controller", DiveLogController)
       .factory("diveLogService", diveLogService);

function DiveLogController($scope, diveLogService) {
  $scope.dives = [];
  $scope.isLoading = isLoading;
  $scope.refreshDives = refreshDives;

  var loading = false;

  function isLoading() {
    return loading;
  }

  function refreshDives() {
    loading = true;
    $scope.dives = [];
    setTimeout(function() {
      $scope.dives = diveLogService.getDives();
      loading = false;
      $scope.$apply();
    }, 1000);
  }

}

function diveLogService() {
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

    return {
      getDives: function() {
        return dives;
      }
    };

}
