/**
 * @ngdoc object
 * @name vstabs
 * @description vstabs is a module of the vstabs.
 */
angular.module('vstabs', [])

/**
 * @ngdoc object
 * @name vstabs
 * @description vstabs is main directive of the component and it implements the tabs.
 */
    .directive('vstabs', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/vstabs.html',
            transclude: true,
            scope: {
                opt: '=options'
            },
            controller: ['$scope', function ($scope) {
                $scope.pages = [];
                $scope.selectedIdx = 0;

                // Add tab to the pages array and set the visible tab
                this.addTabPage = function (page) {
                    if ($scope.opt.selectedIndex !== undefined) {
                        page.visible = $scope.pages.length === $scope.opt.selectedIndex;
                    }
                    else {
                        page.visible = $scope.pages.length === 0;
                    }
                    $scope.pages.push(page);
                };
            }],
            link: function (scope, element, attrs) {
                scope.tabClicked = function (page, idx) {
                    angular.forEach(scope.pages, function (p) {
                        p.visible = false;
                    });
                    page.visible = true;
                    if (idx !== scope.selectedIdx) {
                        pageChanged(scope.selectedIdx, idx);
                        scope.selectedIdx = idx;
                    }
                };

                scope.keyDown = function (event, page, idx) {
                    if (event.which === 13) {
                        scope.tabClicked(page, idx);
                    }
                };

                function pageChanged(oldPageIdx, newPageIdx) {
                    if (scope.opt.pageChangedCb) {
                        scope.opt.pageChangedCb(oldPageIdx, newPageIdx);
                    }
                }
            }
        };
    })

/**
 * @ngdoc object
 * @name vstabpage
 * @description vstabpage directive implements one page of tabs.
 */
    .directive('vstabpage', function () {
        return {
            require: '^vstabs',
            restrict: 'E',
            transclude: true,
            scope: {},
            link: function (scope, element, attrs, ctrl) {
                scope.title = attrs.title !== undefined ? attrs.title : '';
                ctrl.addTabPage(scope);
            },
            templateUrl: 'templates/vstabpage.html'
        };
    });
