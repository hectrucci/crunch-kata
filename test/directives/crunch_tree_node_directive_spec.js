/* globals beforeEach, describe, expect, it, angular, inject */

describe('crunchTreeNodeDirective', () => {
    var $compile;
    var $controller;
    var $scope;
    var $templateCache;
    var element;
    var template;
    var $rootScope;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_, _$templateCache_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $templateCache = _$templateCache_;
    }));


    it('should pass', () => {
        // given
        template = angular.element('<crunch-tree-node></crunch-tree-node>');

        // when
        element = $compile(template)($scope);
        $scope.$digest();

        // then
        expect(element.isolateScope()).to.have.property('id');
        expect(element.isolateScope().id).to.be.a('number');
    });
});