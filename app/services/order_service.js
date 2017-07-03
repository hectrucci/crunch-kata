export default App => {
    App.factory('OrderService', function (VariablesService) {
        'ngInject';

        const orderService = {};

        orderService.findPositionByName = (name, tree) => {
            const variablesData = VariablesService.getVariables();
            const variablesKeys = Object.keys(variablesData);

            for (let i = 0; i < variablesKeys.length; i++) {
                var key = variablesKeys[i];

                if (variablesData[key].name === name || variablesData[key].scale === name) {
                    return tree.positions.indexOf(key) + 1;
                }
            }

            return null;
        };

        return orderService;
    });
}