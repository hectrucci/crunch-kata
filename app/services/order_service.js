export default App => {
    App.factory('OrderService', function (VariablesService) {
        'ngInject';

        const orderService = {},
            memo = {};

        orderService.findPositionByName = (name = '', tree) => {
            const variablesData = VariablesService.getVariables(),
                variablesKeys = Object.keys(variablesData);

            if (memo[name]) {
                return memo[name];
            }

            for (let i = 0; i < variablesKeys.length; i++) {
                let key = variablesKeys[i];

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