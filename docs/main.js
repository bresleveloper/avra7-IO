(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-j-page></app-j-page>\r\n\r\n<br><br><br><br>\r\n\r\n<app-ng-model-parent></app-ng-model-parent>\r\n<br><br><br><br>\r\n\r\n<app-parent></app-parent>\r\n\r\n\r\n\r\n\r\n\r\n<br><br><br><br>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/child-output/child-output.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/child-output/child-output.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>child-output works!</p>\n<input (input)=\"convertToNumber($event.target.value)\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/child/child.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/child/child.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>child works!</p>\n\n<label>showing param1: </label><span>{{param1}}</span><br>\n<label>showing param2: </label><span>{{param2}}</span><br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<label>{{title}}: </label>\n<input [value]=\"shuki\" (input)=\"shukiChange.emit($event.target.value)\" >\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/my-ng-model/my-ng-model.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/my-ng-model/my-ng-model.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<label>{{title}}: </label>\n<input [value]=\"valueIn\" (input)=\"valueOut.emit($event.target.value)\" >\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ng-model-parent works!</p>\n\n\n<input [(ngModel)]=\"ngm1\"><br>\n<input [(ngModel)]=\"ngm1\"><br>\n{{ngm1}}<br>\n\n\n<br><br>\n<h4>app-my-ng-model</h4>\n<app-my-ng-model title=\"my title\" [valueIn]=\"ngm1\" (valueOut)=\"ngm1 = $event\"></app-my-ng-model>\n\n<h4>trully</h4>\n<trully title=\"my title\" [(shuki)]=\"ngm1\"></trully>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/parent/parent.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/IO-FN/parent/parent.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>parent works!</p>\n\n\n\n<input #ipt1 (input)=\"ipt1Val = $event.target.value\" /><br>\n<input #ipt2 (input)=\"ipt2Val = ipt2.value\" /><br>\n<!--<button (click)=\"clickFN(ipt1.value, ipt2.value)\">click to send to child</button>-->\n<br>\n\n<app-child [param1]=\"ipt1Val\" [param2]=\"ipt2Val\"></app-child>\n\n<br>\n<br>\n<br>\n\n<h3>outputs</h3>\n<app-child-output (myEvent)=\"num.innerHTML = $event\" (secondsCounter)=\"secodns.innerHTML = $event\"></app-child-output>\n\n<div #num></div>\n<div #secodns></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-details/j-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/Jiraff-Administration/j-details/j-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>j-details works!</p>\n\n\n<div *ngIf=\"j\" [attr.jid]=\"j.id\" [class]=\"'j-item' + (j.isBossy ? ' bossy' : '')\" >\n    <h3>{{j.name}}</h3>\n    <!--{ id:1, name:'shuki', height:5.55, color:'blue', isBossy:false },-->\n    <label-span label=\"height\" [val]=\"j.height\"></label-span>\n    <label-span label=\"color\" [val]=\"j.blue\"></label-span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-item/j-item.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/Jiraff-Administration/j-item/j-item.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div \n        [attr.jid]=\"j.id\" \n        [class]=\"'j-item' + (j.isBossy ? ' bossy' : '')\" \n        (click)=\"clickNoteFn()\"\n        >\n\n    <h3>{{j.name}}</h3>\n    <!--{ id:1, name:'shuki', height:5.55, color:'blue', isBossy:false },-->\n    <label-span label=\"height\" [val]=\"j.height\"></label-span>\n    <label-span label=\"color\" [val]=\"j.color\"></label-span>\n    <button (click)=\"deleteNoteFn()\">delete</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<label>{{label}}: </label>\n<span>{{val}}</span>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-page/j-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/c/Jiraff-Administration/j-page/j-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1>Welcome to International Jiraff-Administration</h1>\n\n<div style=\"display: flex;\" [style.background]=\"bgRND\">\n    <ul class=\"force-jitem\">\n        <j-item \n                *ngFor=\"let jiraff of JiraffsArray\" \n                [j]=\"jiraff\" \n                class=\"j-item-as-list\"\n\n                (clickNote)=\"selectedJ = jiraff\"\n                (deleteNote)=\"deleteJ($event)\"\n                (randomColorNote)=\"bgRND = $event\"\n                \n                ></j-item>\n    </ul>\n\n    <!-- @Output() clickNote = new EventEmitter<null>()\n  @Output() dbclickNote = new EventEmitter<null>()\n  @Output() deleteNote = new EventEmitter<number>()\n  @Output() randomColorNote = new EventEmitter<string>()-->\n\n    <app-j-details [j]=\"selectedJ\"></app-j-details>\n\n</div>  "

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'input-output';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _c_IO_FN_parent_parent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./c/IO-FN/parent/parent.component */ "./src/app/c/IO-FN/parent/parent.component.ts");
/* harmony import */ var _c_IO_FN_child_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./c/IO-FN/child/child.component */ "./src/app/c/IO-FN/child/child.component.ts");
/* harmony import */ var _c_IO_FN_child_output_child_output_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./c/IO-FN/child-output/child-output.component */ "./src/app/c/IO-FN/child-output/child-output.component.ts");
/* harmony import */ var _c_IO_FN_my_ng_model_my_ng_model_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./c/IO-FN/my-ng-model/my-ng-model.component */ "./src/app/c/IO-FN/my-ng-model/my-ng-model.component.ts");
/* harmony import */ var _c_IO_FN_ng_model_parent_ng_model_parent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./c/IO-FN/ng-model-parent/ng-model-parent.component */ "./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.ts");
/* harmony import */ var _c_IO_FN_my_ng_model_really_my_ng_model_really_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./c/IO-FN/my-ng-model-really/my-ng-model-really.component */ "./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.ts");
/* harmony import */ var _c_Jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./c/Jiraff-Administration/j-page/j-page.component */ "./src/app/c/Jiraff-Administration/j-page/j-page.component.ts");
/* harmony import */ var _c_Jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./c/Jiraff-Administration/j-item/j-item.component */ "./src/app/c/Jiraff-Administration/j-item/j-item.component.ts");
/* harmony import */ var _c_Jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./c/Jiraff-Administration/j-details/j-details.component */ "./src/app/c/Jiraff-Administration/j-details/j-details.component.ts");
/* harmony import */ var _c_Jiraff_Administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./c/Jiraff-Administration/j-label-span/j-label-span.component */ "./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _c_IO_FN_parent_parent_component__WEBPACK_IMPORTED_MODULE_5__["ParentComponent"],
            _c_IO_FN_child_child_component__WEBPACK_IMPORTED_MODULE_6__["ChildComponent"],
            _c_IO_FN_child_output_child_output_component__WEBPACK_IMPORTED_MODULE_7__["ChildOutputComponent"],
            _c_IO_FN_my_ng_model_my_ng_model_component__WEBPACK_IMPORTED_MODULE_8__["MyNgModelComponent"],
            _c_IO_FN_ng_model_parent_ng_model_parent_component__WEBPACK_IMPORTED_MODULE_9__["NgModelParentComponent"],
            _c_IO_FN_my_ng_model_really_my_ng_model_really_component__WEBPACK_IMPORTED_MODULE_10__["MyNgModelReallyComponent"],
            _c_Jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_11__["JPageComponent"],
            _c_Jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_12__["JItemComponent"],
            _c_Jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_13__["JDetailsComponent"],
            _c_Jiraff_Administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_14__["JLabelSpanComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/c/IO-FN/child-output/child-output.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/c/IO-FN/child-output/child-output.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vY2hpbGQtb3V0cHV0L2NoaWxkLW91dHB1dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/c/IO-FN/child-output/child-output.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/c/IO-FN/child-output/child-output.component.ts ***!
  \****************************************************************/
/*! exports provided: ChildOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildOutputComponent", function() { return ChildOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChildOutputComponent = class ChildOutputComponent {
    constructor() {
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.secondsCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        setInterval(() => this.secondsCounter.emit(new Date().getSeconds()), 1000);
    }
    convertToNumber(str) {
        let n = parseInt(str);
        this.myEvent.emit(n);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChildOutputComponent.prototype, "myEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChildOutputComponent.prototype, "secondsCounter", void 0);
ChildOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child-output',
        template: __webpack_require__(/*! raw-loader!./child-output.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/child-output/child-output.component.html"),
        styles: [__webpack_require__(/*! ./child-output.component.css */ "./src/app/c/IO-FN/child-output/child-output.component.css")]
    })
], ChildOutputComponent);



/***/ }),

/***/ "./src/app/c/IO-FN/child/child.component.css":
/*!***************************************************!*\
  !*** ./src/app/c/IO-FN/child/child.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/c/IO-FN/child/child.component.ts":
/*!**************************************************!*\
  !*** ./src/app/c/IO-FN/child/child.component.ts ***!
  \**************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChildComponent = class ChildComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChildComponent.prototype, "param1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChildComponent.prototype, "param2", void 0);
ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child',
        template: __webpack_require__(/*! raw-loader!./child.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/child/child.component.html"),
        styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/c/IO-FN/child/child.component.css")]
    })
], ChildComponent);



/***/ }),

/***/ "./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vbXktbmctbW9kZWwtcmVhbGx5L215LW5nLW1vZGVsLXJlYWxseS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.ts ***!
  \****************************************************************************/
/*! exports provided: MyNgModelReallyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgModelReallyComponent", function() { return MyNgModelReallyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyNgModelReallyComponent = class MyNgModelReallyComponent {
    constructor() {
        this.shukiChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyNgModelReallyComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyNgModelReallyComponent.prototype, "shuki", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MyNgModelReallyComponent.prototype, "shukiChange", void 0);
MyNgModelReallyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trully',
        template: __webpack_require__(/*! raw-loader!./my-ng-model-really.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.html"),
        styles: [__webpack_require__(/*! ./my-ng-model-really.component.css */ "./src/app/c/IO-FN/my-ng-model-really/my-ng-model-really.component.css")]
    })
], MyNgModelReallyComponent);



/***/ }),

/***/ "./src/app/c/IO-FN/my-ng-model/my-ng-model.component.css":
/*!***************************************************************!*\
  !*** ./src/app/c/IO-FN/my-ng-model/my-ng-model.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vbXktbmctbW9kZWwvbXktbmctbW9kZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/c/IO-FN/my-ng-model/my-ng-model.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/c/IO-FN/my-ng-model/my-ng-model.component.ts ***!
  \**************************************************************/
/*! exports provided: MyNgModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgModelComponent", function() { return MyNgModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyNgModelComponent = class MyNgModelComponent {
    constructor() {
        this.valueOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyNgModelComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyNgModelComponent.prototype, "valueIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MyNgModelComponent.prototype, "valueOut", void 0);
MyNgModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-ng-model',
        template: __webpack_require__(/*! raw-loader!./my-ng-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/my-ng-model/my-ng-model.component.html"),
        styles: [__webpack_require__(/*! ./my-ng-model.component.css */ "./src/app/c/IO-FN/my-ng-model/my-ng-model.component.css")]
    })
], MyNgModelComponent);



/***/ }),

/***/ "./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vbmctbW9kZWwtcGFyZW50L25nLW1vZGVsLXBhcmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgModelParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelParentComponent", function() { return NgModelParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgModelParentComponent = class NgModelParentComponent {
    constructor() {
        this.ngm1 = '';
    }
    ngOnInit() {
    }
};
NgModelParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-model-parent',
        template: __webpack_require__(/*! raw-loader!./ng-model-parent.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.html"),
        styles: [__webpack_require__(/*! ./ng-model-parent.component.css */ "./src/app/c/IO-FN/ng-model-parent/ng-model-parent.component.css")]
    })
], NgModelParentComponent);



/***/ }),

/***/ "./src/app/c/IO-FN/parent/parent.component.css":
/*!*****************************************************!*\
  !*** ./src/app/c/IO-FN/parent/parent.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSU8tRk4vcGFyZW50L3BhcmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/c/IO-FN/parent/parent.component.ts":
/*!****************************************************!*\
  !*** ./src/app/c/IO-FN/parent/parent.component.ts ***!
  \****************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParentComponent = class ParentComponent {
    constructor() {
        this.ipt1Val = '';
        this.ipt2Val = '';
    }
    ngOnInit() {
    }
};
ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parent',
        template: __webpack_require__(/*! raw-loader!./parent.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/IO-FN/parent/parent.component.html"),
        styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/c/IO-FN/parent/parent.component.css")]
    })
], ParentComponent);



/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-details/j-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-details/j-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSmlyYWZmLUFkbWluaXN0cmF0aW9uL2otZGV0YWlscy9qLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-details/j-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-details/j-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: JDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JDetailsComponent", function() { return JDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JDetailsComponent = class JDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JDetailsComponent.prototype, "j", void 0);
JDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-j-details',
        template: __webpack_require__(/*! raw-loader!./j-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-details/j-details.component.html"),
        styles: [__webpack_require__(/*! ./j-details.component.css */ "./src/app/c/Jiraff-Administration/j-details/j-details.component.css")]
    })
], JDetailsComponent);



/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-item/j-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-item/j-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.j-item{\r\n    padding: 2px;\r\n    border: 1px solid green;\r\n    margin: 4px;\r\n}\r\n\r\n.j-item.bossy{\r\n    background-color: pink;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy9KaXJhZmYtQWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYy9KaXJhZmYtQWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5qLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uai1pdGVtLmJvc3N5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-item/j-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-item/j-item.component.ts ***!
  \********************************************************************/
/*! exports provided: JItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JItemComponent", function() { return JItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JItemComponent = class JItemComponent {
    constructor() {
        //notifications
        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.randomColorNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    clickNoteFn() {
        console.log('clickNoteFn for jiraff ' + this.j.name);
        this.clickNote.emit();
    }
    ngOnInit() {
        setTimeout(() => {
            this.randomColorNote.emit(this.j.color);
        }, 1000 * this.j.id);
    }
    deleteNoteFn() {
        this.deleteNote.emit(this.j.id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JItemComponent.prototype, "j", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], JItemComponent.prototype, "clickNote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], JItemComponent.prototype, "deleteNote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], JItemComponent.prototype, "randomColorNote", void 0);
JItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'j-item',
        template: __webpack_require__(/*! raw-loader!./j-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-item/j-item.component.html"),
        styles: [__webpack_require__(/*! ./j-item.component.css */ "./src/app/c/Jiraff-Administration/j-item/j-item.component.css")]
    })
], JItemComponent);



/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvSmlyYWZmLUFkbWluaXN0cmF0aW9uL2otbGFiZWwtc3Bhbi9qLWxhYmVsLXNwYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.ts ***!
  \********************************************************************************/
/*! exports provided: JLabelSpanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JLabelSpanComponent", function() { return JLabelSpanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JLabelSpanComponent = class JLabelSpanComponent {
    constructor() {
        this.label = '';
        this.val = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JLabelSpanComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JLabelSpanComponent.prototype, "val", void 0);
JLabelSpanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'label-span',
        template: __webpack_require__(/*! raw-loader!./j-label-span.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.html"),
        styles: [__webpack_require__(/*! ./j-label-span.component.css */ "./src/app/c/Jiraff-Administration/j-label-span/j-label-span.component.css")]
    })
], JLabelSpanComponent);



/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-page/j-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-page/j-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".j-item-as-list{\r\n    display: list-item;\r\n}\r\n\r\n.force-jitem{\r\n    width: 40vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy9KaXJhZmYtQWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYy9KaXJhZmYtQWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotaXRlbS1hcy1saXN0e1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG59XHJcblxyXG4uZm9yY2Utaml0ZW17XHJcbiAgICB3aWR0aDogNDB2dztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/c/Jiraff-Administration/j-page/j-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/c/Jiraff-Administration/j-page/j-page.component.ts ***!
  \********************************************************************/
/*! exports provided: JPageComponent, Jiraff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JPageComponent", function() { return JPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jiraff", function() { return Jiraff; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JPageComponent = class JPageComponent {
    constructor() {
        //data, should come from Service by Ajax
        this.JiraffsArray = [
            { id: 1, name: 'shuki', height: 5.55, color: 'blue', isBossy: false },
            { id: 2, name: 'edna', height: 15.55, color: 'red', isBossy: true },
            { id: 3, name: 'bony', height: 53.55, color: 'brown', isBossy: false },
            { id: 4, name: 'clyde', height: 5.55, color: 'violet', isBossy: false },
            { id: 5, name: 'moti', height: 9.6, color: 'white', isBossy: false },
            { id: 6, name: 'franko', height: 7.4, color: 'black', isBossy: true },
            { id: 7, name: 'muli', height: 3.2, color: 'orangered', isBossy: false },
            { id: 8, name: 'tortya', height: 12.2, color: 'gold', isBossy: true },
            { id: 9, name: 'molina', height: 6.9, color: 'tomato', isBossy: false },
            { id: 10, name: 'barvazon', height: 7.8, color: 'darkviolet', isBossy: false },
            { id: 11, name: 'moolyer', height: 8.9, color: 'indigo', isBossy: false },
        ];
    }
    ngOnInit() {
    }
    deleteJ(jid) {
        /*for (let i = 0; i < array.length; i++) {
          const _j = array[i];
          if (_j.id == jid){
            return i;
          }
        }*/
        let index = this.JiraffsArray.findIndex(_j => _j.id == jid);
        this.JiraffsArray.splice(index, 1);
    }
};
JPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-j-page',
        template: __webpack_require__(/*! raw-loader!./j-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/c/Jiraff-Administration/j-page/j-page.component.html"),
        styles: [__webpack_require__(/*! ./j-page.component.css */ "./src/app/c/Jiraff-Administration/j-page/j-page.component.css")]
    })
], JPageComponent);

class Jiraff {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\source\avratech7\input-output\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map