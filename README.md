# vstabs v. 0.0.1

**Tabs - AngularJS reusable UI component**

## Description
Simple AngularJS directive which implements the tabs. Depends on only the AngularJS.

## Usage

* include the **vstabs-0.0.1.min.js** and the **vstabs-0.0.1.min.css** files into your project. See the **Build project** and the **Installation** chapters below.
```html
<script src="vstabs-0.0.1.min.js"></script>
<link href="vstabs-0.0.1.min.css" rel="stylesheet" type="text/css">
```
* inject the **vstabs** module into your application module.
```js
angular.module('sampleapp', ['vstabs']);
```
* add **vstabs** HTML tag into your HTML file. See the **HTML example** chapter below.
* add needed Javascript code. See the **Javascript example** chapter below.

### HTML example
```html
<div ng-app="sampleapp" ng-controller="sampleappctrl">

    <vstabs options="opt">
        <vstabpage title="Page 1">
            <div>tab page 1 content here</div>
        </vstabpage>
        <vstabpage title="Page 2">
            <div>tab page 2 content here</div>
        </vstabpage>
    </vstabs>
    
</div>
```

### Tags
| Tag  | Description | Mandatory | 
| :------------ |:---------------|:---------------:|
| vstabs | vstabs tag | yes | 


### Attributes
| Attribute | Description | Mandatory | 
| :------------ |:---------------|:---------------:|
| options | vstabs configuration object. See below. | yes |


### Options data (an options attribute in the vstabs directive)

| Attribute | Description | Values | Mandatory |
| :------------ |:---------------|:---------------|:---------------|
| **selectedIndex** | The selected tab index after the vstabs has been rendered. | number | no |
| **pageChangedCb** | A callback function of the tab page change. See below. | function | no |


### Javascript example
```js
var sampleapp = angular.module('sampleapp', ['vstabs']);
sampleapp.controller('sampleappctrl', function ($scope) {

    // Callback - called when the user selects tab from the UI
    function onPageChangedFn(oldPageIdx, newPageIdx) {
        console.log('oldPageIdx: ', oldPageIdx, ' - newPageIdx: ', newPageIdx);
    }

    // Configuration of the vstabs
    $scope.opt = {
        selectedIndex: 0,
        pageChangedCb: onPageChangedFn
    };
```


#### pageChangedCb

Example of the function. See description of the parameters below the example.

```js
    function onPageChangedFn(oldPageIdx, newPageIdx) {
        console.log('oldPageIdx: ', oldPageIdx, ' - newPageIdx: ', newPageIdx);
    }
```

| Function | Parameters | Description | 
| :------------ |:---------------|:---------------|
| onPageChangedFn | oldPageIdx, newPageIdx | Called when the user selects the tab from the UI. |

##### Parameters
* oldPageIdx: index of the old page in vstabs (index is starting from zero)
* oldPageIdx: index of the new page in vstabs (index is starting from zero)


## Demo
In the **examples** folder of this project has the sample application and the online demo is [here](http://kekeh.github.io/vstabs)

## Dependencies
Depends on AngularJS. Implemented using the AngularJS version 1.4.3.

## Build project
* Build can be done by executing the **grunt** command. It creates the **dist/debug** and the **dist/min** folders and put files to these folders.
```js
grunt
```

## Installation
* Installation can be done using the **bower**. It installs files from the **dist/debug** and the **dist/min** folders. Needed CSS and javascript files are located in these folders.
```js
bower install vstabs
```

## Compatibility (tested with)
* IE 9+
* Firefox 36
* Google Chrome 41
* Opera 28.0
* Mobile Safari 8

## Licence
* License: MIT

## Author
* Author: kekeh