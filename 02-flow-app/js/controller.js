angular.module("maintenance", [])
       .controller("productsEditCtrl", ProductsEditCtrl);

function ProductsEditCtrl($scope) {
  $scope.products    = products;
  $scope.startAdd    = startAdd;
  $scope.cancel      = cancel;
  $scope.add         = add;
  $scope.startEdit   = startEdit;
  $scope.save        = save;
  $scope.startRemove = startRemove;
  $scope.remove      = remove;
  $scope.getSelected = getSelected;

  var selected = -1;
  setView('list');

  function setView(view) {
    $scope.view = view;
  }

  function startAdd() {
    $scope.productBox = '';
    setView('add');
  }

  function cancel() {
    setView('list');
  }

  function add() {
    $scope.products.push($scope.productBox);
    setView('list');
  }

  function startEdit(index) {
    selected = index;
    $scope.productBox = $scope.products[index];
    setView('edit');
  }

  function save() {
    $scope.products[selected] = $scope.productBox;
    setView('list');
  }

  function startRemove(index) {
    selected = index;
    setView('delete');
  }

  function remove() {
    $scope.products.splice(selected, 1);
    setView('list');
  }

  function getSelected() {
    return products[selected];
  }
}
