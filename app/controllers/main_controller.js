export default App => {
    App.controller('mainController', function (CrunchHttpLayerService, TreeService, OrderService) {
        'ngInject';

        const vm = this;

        vm.tree = {};
        vm.findPositionByName = OrderService.findPositionByName;

        CrunchHttpLayerService.getCrunchData('order.json', 'variables.json')
            .then(response => {
                return TreeService.createNewTree(response.order.data.graph, response.variables.data.index);
            })
            .then(tree => {
                vm.tree = tree;
            })
            .catch(error => console.log(error));

        vm.displayInfo = data => {
            vm.selectedVariable = data.node;
        }
    });
}