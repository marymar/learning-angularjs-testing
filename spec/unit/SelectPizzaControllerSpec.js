describe('select pizza controller', function () {

    var scope,
        ctrl;

    beforeEach(module('pizzaStore'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('SelectPizzaController', {
            $scope: scope
        });

    }));

    describe('$scope.placeOrder', function () {
        it('lets place the user an order when they select a pizza type', function () {
            scope.pizzaType = scope.choices[0];
            scope.placeOrder();
            expect(scope.orderInProgress).toBe(true);
        });

        it('stops a user if placing an order when they have not selected a pizza', function() {
            scope.pizzaType = '';
            scope.placeOrder();

            expect(scope.orderInProgress).toBe(false);
        })
    });

});