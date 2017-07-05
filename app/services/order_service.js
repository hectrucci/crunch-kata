export default App => {
    App.factory('OrderService', function (VariablesService) {
        'ngInject';

        const orderService = {};

        const memo = {};

        orderService.findPositionByName = (name = '', tree) => {
            const variablesData = VariablesService.getVariables();
            const variablesKeys = Object.keys(variablesData);

            if (memo[name]) {
                return memo[name];
            }

            for (let i = 0; i < variablesKeys.length; i++) {
                var key = variablesKeys[i];

                if (variablesData[key].name === name || variablesData[key].scale === name) {
                    const position = tree.positions.indexOf(key) + 1;
                    memo[name] = position;

                    return position;
                }
            }

            return null;
        };

        return orderService;
    });
}