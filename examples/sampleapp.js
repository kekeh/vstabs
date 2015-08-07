/**
 * @ngdoc object
 * @name sampleapp
 * @description sampleapp is module of sampleapp. It injects the vstabs module.
 */
var sampleapp = angular.module('sampleapp', ['vstabs']);

/**
 * @ngdoc object
 * @name samplectrl
 * @description samplectrl is controller of sampleapp.
 */
sampleapp.controller('samplectrl', function ($scope) {

    $scope.values = {
        firstname: '',
        lastname: '',
        gender: '',
        streetaddress: '',
        zip: '',
        city: '',
        email: '',
        phone: ''
    };



    function onPageChangedFn(oldPageIdx, newPageIdx) {
        console.log('PARENT - onPageChangedFn(): oldPageIdx: ', oldPageIdx, ' - newPageIdx: ', newPageIdx);
    }

    // Configuration of the vstabs
    $scope.opt = {
        selectedIndex: 0,
        pageChangedCb: onPageChangedFn
    };

});
