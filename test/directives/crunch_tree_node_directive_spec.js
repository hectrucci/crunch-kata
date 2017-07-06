/* globals beforeEach, describe, expect, it, angular, inject */

describe('crunchTreeNodeDirective', () => {
    let $compile,
        $controller,
        $scope,
        $templateCache,
        element,
        template,
        $rootScope;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject((_$compile_, _$controller_, _$rootScope_, _$templateCache_) => {
        $compile = _$compile_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $templateCache = _$templateCache_;
    }));


    it('Should set an ID', () => {
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