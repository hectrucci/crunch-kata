import template from './crunch_tree_directive.html';

export default ngModule => {

    ngModule.directive('crunchTree', function () {
        'ngInject';

        return {
            restrict: 'E',
            scope: {
                tree: '=',
                title: '@',
                displayInfo: '&'
            },
            replace: true,
            template: template
        };
    });
};