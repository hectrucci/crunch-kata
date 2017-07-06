export default App => {
    App.factory('TreeService', function (VariablesService, $q) {
        'ngInject';

        let positionArray = [],
            tree;

        const treeService = {};

        const addChildren = (parentNode, childrenArray) => {
            const variablesData = VariablesService.getVariables();

            childrenArray.forEach(child => {
                if (angular.isString(child)) {
                    if (variablesData[child]) {
                        parentNode.children.push(variablesData[child]);
                    } else {
                        parentNode.children.push(child);
                    }

                    positionArray.push(child);
                } else {
                    const node = createNode();
                    const categories = Object.keys(child);

                    for (let i = 0; i < categories.length; i++) {
                        const category = categories[i];

                        if (angular.isArray(child[category])) {
                            node.name = category;
                            addChildren(node, child[category]);
                        }
                    }

                    parentNode.children.push(node);
                }
            });
        };

        const createNode = (name = '') => {
            return {
                name,
                children: []
            };
        };

        const populateTree = (orderArray) => {
            const head = createNode('graph');

            positionArray = [];

            addChildren(head, orderArray);

            head.isHead = true;
            head.positions = angular.copy(positionArray);

            return head;
        };

        treeService.createNewTree = (orderData, variablesData) => {
            const deferred = $q.defer();

            try {
                VariablesService.setVariables(variablesData);
                tree = populateTree(orderData);
            } catch (e) {
                deferred.reject(e);
                return deferred.promise;
            }

            deferred.resolve(tree);

            return deferred.promise;
        };

        treeService.getCurrentTree = () => {
            return tree;
        };

        return treeService;
    });
}