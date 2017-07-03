/* globals beforeEach, describe, expect, it, angular, inject */

describe('CrunchHttpLayerService', () => {
    let CrunchHttpLayerService,
        $httpBackend;

    // module
    beforeEach(angular.mock.module('crunchKata'));

    // inject
    beforeEach(inject((_CrunchHttpLayerService_, _$httpBackend_) => {
        CrunchHttpLayerService = _CrunchHttpLayerService_;
        $httpBackend = _$httpBackend_;
    }));

    // setup
    beforeEach(() => {
        $httpBackend.expectGET('fixtures/').respond({ name: 'order' });
        $httpBackend.expectGET('fixtures/').respond({ name: 'variables' });
    });

    it('Should get the fixtures', () => {
        // when
        const promise = CrunchHttpLayerService.getCrunchData();
        $httpBackend.flush();

        // then
        expect(promise.$$state.value.order.data.name).to.equal('order');
        expect(promise.$$state.value.variables.data.name).to.equal('variables');
    });
});