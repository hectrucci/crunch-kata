/* globals beforeEach, describe, expect, it, angular, inject */

describe('VariablesService', () => {
    let VariablesService,
        variablesFixture;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject((_VariablesService_) => {
        VariablesService = _VariablesService_;
    }));

    // setup

    beforeEach(() => {
        variablesFixture = {
            '786c0f': {
                'name': 'Unaided Awareness (Coffee Roasters)',
                'type': 'multiple_response',
                'description': 'When you think of independent coffee roasters, which names come to mind?'
            },
            'd88613': {
                'name': 'City',
                'type': 'text',
                'description': 'City where survey was performed'
            },
            '0894c5': {
                'name': 'Weight',
                'type': 'numeric',
                'description': 'Are you the parent or guardian of any children under the age of 18?'
            },
            '0323cf': {
                'name': 'Wave',
                'type': 'datetime',
                'description': 'Wave'
            }
        }
    });


    it('Should get and set the variables data', () => {
        // given
        VariablesService.setVariables(variablesFixture);

        // when
        const variablesData = VariablesService.getVariables();

        // then
        expect(variablesData).to.have.property('786c0f');
        expect(variablesData).to.have.property('d88613');
        expect(variablesData).to.have.property('0894c5');
        expect(variablesData).to.have.property('0323cf');
    });

    it('Should find the variable in the tree', () => {
        // given
        const tree = {
            positions: ['d88613', '786c0f', '0323cf', '0894c5']
        };

        VariablesService.setVariables(variablesFixture);

        // when
        const variable = VariablesService.findVariableByPosition(2, tree);

        // then
        expect(variable.name).to.equal('Unaided Awareness (Coffee Roasters)');
    });
});