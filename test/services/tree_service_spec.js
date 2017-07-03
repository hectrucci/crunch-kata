/* globals beforeEach, describe, expect, it, angular, inject */

describe('TreeService', () => {
    let TreeService,
        VariablesService,
        order,
        variables;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject((_TreeService_, _VariablesService_) => {
        TreeService = _TreeService_;
        VariablesService = _VariablesService_;
    }));

    // setup
    beforeEach(() => {
        variables = {
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
        };

        order = [{
            'Awareness Metrics': [{
                'Taxis': ['0894c5', '0323cf']
            }, {
                'Coffee': ['d88613', '786c0f']
            }]
        }];
    });

    it('Should create a new tree', () => {
        // when
        let treePromise = TreeService.createNewTree(order, variables);

        // then
        expect(treePromise.$$state.value).to.have.property('name');
        expect(treePromise.$$state.value).to.have.property('children');
        expect(treePromise.$$state.value).to.have.property('positions');
        expect(treePromise.$$state.value).to.have.property('isHead');
        expect(treePromise.$$state.value.positions).to.deep.equal(['0894c5', '0323cf', 'd88613', '786c0f']);
    });
});