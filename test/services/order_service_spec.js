/* globals beforeEach, describe, expect, it, angular, inject */

describe('OrderService', () => {
    let OrderService,
        VariablesService,
        variablesFixture;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject((_OrderService_, _VariablesService_) => {
        OrderService = _OrderService_;
        VariablesService = _VariablesService_;
    }));

    // setup
    beforeEach(() => {
        variablesFixture = {
            "786c0f": {
                "name": "Unaided Awareness (Coffee Roasters)",
                "type": "multiple_response",
                "description": "When you think of independent coffee roasters, which names come to mind?"
            },
            "d88613": {
                "name": "City",
                "type": "text",
                "description": "City where survey was performed"
            },
            "0894c5": {
                "name": "Weight",
                "type": "numeric",
                "description": "Are you the parent or guardian of any children under the age of 18?"
            },
            "0323cf": {
                "name": "Wave",
                "type": "datetime",
                "description": "Wave"
            }
        }
    });

    it('Should get the variable\'s position in the tree', () => {
        // given
        const tree = {
            positions: ['d88613', '786c0f', '0323cf', '0894c5']
        };

        VariablesService.setVariables(variablesFixture);

        // when
        const position1 = OrderService.findPositionByName('City', tree);
        const position2 = OrderService.findPositionByName('Unaided Awareness (Coffee Roasters)', tree);
        const position3 = OrderService.findPositionByName('Wave', tree);
        const position4 = OrderService.findPositionByName('Weight', tree);

        // then
        expect(position1).to.equal(1);
        expect(position2).to.equal(2);
        expect(position3).to.equal(3);
        expect(position4).to.equal(4);
    });
});