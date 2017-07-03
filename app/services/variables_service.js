export default App => {
    App.factory('VariablesService', function () {
        'ngInject';

        let variablesData = {};

        const variablesService = {};

        variablesService.getVariables = () => {
            return variablesData;
        };

        variablesService.setVariables = (variables = {}) => {
            variablesData = variables;
        };

        variablesService.findVariableByPosition = (position, tree) => {
            return variablesData[tree.positions[position - 1]];
        };

        return variablesService;
    });
}