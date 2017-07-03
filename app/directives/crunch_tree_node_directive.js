import template from './crunch_tree_node_directive.html';

export default ngModule => {

    ngModule.directive('crunchTreeNode', function () {
        'ngInject';

        return {
            restrict: 'E',
            scope: {
                treeNode: '=',
                displayInfo: '&'
            },
            replace: true,
            template: template,
            link: scope => {
                scope.id = Date.now() + Math.floor((Math.random() * 1000000) + 1);
            }
        };
    });
};