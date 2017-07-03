/* globals beforeEach, describe, expect, it, angular, inject */

describe('mainController', () => {
    let $controller,
        mainController;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject(_$controller_ => {
        $controller = _$controller_;
    }));

    // setup
    beforeEach(() => {
        mainController = $controller('mainController');
    });

    it('Should set the selected variable', () => {
        // given
        let selectedVariable = {
            name: 'selectedVariableTest'
        };

        // when
        mainController.displayInfo({node: selectedVariable});

        // then
        expect(mainController.selectedVariable.name).to.equal('selectedVariableTest');
    });
});