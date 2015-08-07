describe('vstabs', function () {
    var elm, scope;

    beforeEach(module('vstabs'));

    beforeEach(inject(function ($rootScope, $compile) {

        scope = $rootScope;

        function onPageChangedFn(oldPageIdx, newPageIdx) {
            console.log('oldPageIdx: ', oldPageIdx, ' - newPageIdx: ', newPageIdx);
        }

        // Configuration of the vstabs
        scope.opt = {
            selectedIndex: 0,
            pageChangedCb: onPageChangedFn
        };

        elm = angular.element('<vstabs options="opt"><vstabpage title="page 1"><div id="p1">page 1 content</div></vstabpage><vstabpage title="page 2"><div id="p2">page 2 content</div></vstabpage></vstabs>');

        $compile(elm)(scope);
        scope.$digest();

    }));

    it('is vstabs', function () {
        expect(elm[0].querySelectorAll('.vstabs').length).toBe(1);
    });

    it('is vstabpages', function () {
        expect(elm[0].querySelectorAll('.vstabpages').length).toBe(1);
    });

    it('is vstabpage', function () {
        expect(elm[0].querySelectorAll('.vstabpage').length).toBe(2);
    });

    it('is vstabcontent', function () {
        expect(elm[0].querySelectorAll('.vstabcontent').length).toBe(1);
    });

    it('is p1', function () {
        expect(elm[0].querySelectorAll('#p1').length).toBe(1);
    });

    it('p1 content', function () {
        var tElem = elm[0].querySelectorAll('#p1');
        expect(angular.element(tElem).text()).toEqual('page 1 content');
    });

    it('is p2', function () {
        expect(elm[0].querySelectorAll('#p2').length).toBe(1);
    });

    it('p2 content', function () {
        var tElem = elm[0].querySelectorAll('#p2');
        expect(angular.element(tElem).text()).toEqual('page 2 content');
    });

});