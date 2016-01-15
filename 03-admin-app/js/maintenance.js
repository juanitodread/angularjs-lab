angular.module("maintenance", [])
  .controller("adminCtrl", AdminCtrl);

function AdminCtrl($scope) {
  $scope.activeMenu       = "";
  $scope.isActive         = isActive;
  $scope.showMain         = showMain;
  $scope.showLocations    = showLocations;
  $scope.showProductSites = showProductSites;

  $scope.showMain();

  function setView(view, menuId) {
    $scope.view = view;
    $scope.activeMenu = menuId;
  }

  function isActive(menuId) {
    return $scope.activeMenu == menuId;
  }

  function showMain() {
    setView("main", "");
  }

  function showLocations() {
    setView("locations", "Locations");
  }

  function showProductSites() {
    setView("productSites", "Sites");
  }
}
