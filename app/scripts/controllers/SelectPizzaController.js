angular
    .module('pizzaStore')
    .controller('SelectPizzaController', function($scope) {
        $scope.choices = ['canadian', 'vegeterian', 'peperoni'];
        $scope.pizzaType = '';
        $scope.orderInProgress = false;
        $scope.placeOrder = function() {
            $scope.orderInProgress = false;

            if ($scope.pizzaType !== '')
            $scope.orderInProgress = true;
        }
    });