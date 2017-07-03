export default App => {
    App.factory('CrunchHttpLayerService', function ($http, $q) {
        'ngInject';

        const crunchHttpLayerService = {};

        crunchHttpLayerService.getCrunchData = function (orderUrl = '', variablesUrl = '') {
            const order = $http.get(`fixtures/${orderUrl}`);
            const variables = $http.get(`fixtures/${variablesUrl}`);

            return $q.all({
                order,
                variables
            });
        };

        return crunchHttpLayerService;
    });
}