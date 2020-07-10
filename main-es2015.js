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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/admin/admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var _modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/chart/chart.component */ "./src/app/modules/chart/chart.component.ts");








const routes = [
    {
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        children: [{
                path: '',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            }, {
                path: 'admin',
                component: _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
            }, {
                path: 'chart',
                component: _modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]
            }]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'magentatrader4';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");







class DefaultComponent {
    constructor() {
        this.sideBarOpen = false;
    }
    ngOnInit() {
    }
    sideBarToggler($event) {
        this.sideBarOpen = !this.sideBarOpen;
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 7, vars: 1, consts: [[3, "toggleSidebarForMe"], ["mode", "side", 3, "opened"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebarForMe", function DefaultComponent_Template_app_header_toggleSidebarForMe_0_listener($event) { return ctx.sideBarToggler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #caabb5;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url(\"/assets/bg-darker.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUgMS9hbmd1bGFyL21hZ2VudGF0cmFkZXIuY29tL21hZ2VudGF0cmFkZXI0L3NyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTcxLCAxODEpO1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmctZGFya2VyLmpwZycpO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FhYmI1O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iZy1kYXJrZXIuanBnXCIpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/admin/admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/chart/chart.component */ "./src/app/modules/chart/chart.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                    src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                    src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/stock-price-wrapper-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/stock-price-wrapper-model.ts ***!
  \*****************************************************/
/*! exports provided: StockPriceWrapperModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPriceWrapperModel", function() { return StockPriceWrapperModel; });
class StockPriceWrapperModel {
}


/***/ }),

/***/ "./src/app/modules/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");



class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 4, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/chart/chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/chart/chart.component.ts ***!
  \**************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/widgets/stock-chart/stock-chart.component */ "./src/app/shared/widgets/stock-chart/stock-chart.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






const _c0 = ["inputSymbol"];
class ChartComponent {
    constructor() { }
    ngOnInit() {
    }
    updateStockChart(event) {
        let symbol = event.target.value.toUpperCase();
        this.stockChart.createStockChart(symbol);
        this.inputSymbol.nativeElement.value = '';
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputSymbol = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stockChart = _t.first);
    } }, decls: 8, vars: 0, consts: [["floatLabel", "never", 1, "my-form-field", 2, "margin-top", "-1.25em"], ["matInput", "", "autocomplete", "off", "autofocus", "", "oninput", "this.value = this.value.toUpperCase()", 3, "keydown.enter"], ["inputSymbol", ""]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type symbol here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChartComponent_Template_input_keydown_enter_4_listener($event) { return ctx.updateStockChart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-widget-stock-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss']
            }]
    }], function () { return []; }, { inputSymbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputSymbol']
        }], stockChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "logo"], ["src", "assets/magentatraderlogolarge.png"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  height: 70vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUgMS9hbmd1bGFyL21hZ2VudGF0cmFkZXIuY29tL21hZ2VudGF0cmFkZXI0L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLmxvZ28ge1xuICBoZWlnaHQ6IDcwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stock-chart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/stock-chart.service.ts ***!
  \*************************************************/
/*! exports provided: StockChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockChartService", function() { return StockChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_stock_price_wrapper_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/stock-price-wrapper-model */ "./src/app/models/stock-price-wrapper-model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class StockChartService {
    constructor(http) {
        this.http = http;
        this.apiURL = "https://www.magentatrader.com/api/version4";
    }
    getStockPriceWrapper(symbol) {
        const stockPriceWrapperObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            let stockPriceWrapperModel = new _models_stock_price_wrapper_model__WEBPACK_IMPORTED_MODULE_2__["StockPriceWrapperModel"]();
            let stockPrices = new Array();
            this.http.get(this.apiURL + "/getStockPrice/" + symbol).subscribe(data => {
                stockPriceWrapperModel.exchange = data.Exchange;
                stockPriceWrapperModel.symbol = data.Symbol;
                stockPriceWrapperModel.symbolDescription = data.SymbolDescription;
                for (var i = 0; i < data.StockPrices.length; i++) {
                    stockPrices.push({
                        quoteDate: data.StockPrices[i].QuoteDate,
                        openPrice: data.StockPrices[i].OpenPrice,
                        highPrice: data.StockPrices[i].HighPrice,
                        lowPrice: data.StockPrices[i].LowPrice,
                        closePrice: data.StockPrices[i].ClosePrice,
                        volume: data.StockPrices[i].Volume
                    });
                }
                stockPriceWrapperModel.stockPrices = stockPrices;
                observer.next(stockPriceWrapperModel);
            });
        });
        return stockPriceWrapperObservable;
    }
}
StockChartService.ɵfac = function StockChartService_Factory(t) { return new (t || StockChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
StockChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StockChartService, factory: StockChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 All rights reserved 2020\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUgMS9hbmd1bGFyL21hZ2VudGF0cmFkZXIuY29tL21hZ2VudGF0cmFkZXI0L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59IiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");







class HeaderComponent {
    constructor() {
        this.toggleSidebarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleSidebar() {
        this.toggleSidebarForMe.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidebarForMe: "toggleSidebarForMe" }, decls: 25, vars: 1, consts: [["mat-icon-button", "", 3, "click"], ["src", "./assets/magentatraderlogo.png", 2, "vertical-align", "middle"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-button", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: lightpink;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUgMS9hbmd1bGFyL21hZ2VudGF0cmFkZXIuY29tL21hZ2VudGF0cmFkZXI0L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufSIsIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { toggleSidebarForMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");





class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 10, vars: 0, consts: [["matSubheader", ""], ["mat-list-item", "", "routerLink", "/"], ["mat-list-item", "", "routerLink", "/chart"], ["mat-list-item", "", "routerLink", "/admin"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/stock-chart/stock-chart.component */ "./src/app/shared/widgets/stock-chart/stock-chart.component.ts");


















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]
                ],
                exports: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/widgets/stock-chart/stock-chart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/widgets/stock-chart/stock-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: StockChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockChartComponent", function() { return StockChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/dark */ "./node_modules/@amcharts/amcharts4/themes/dark.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/stock-chart.service */ "./src/app/services/stock-chart.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");















const _c0 = ["chartLabel"];
const _c1 = ["chartCursorData"];
function StockChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockChartComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2630");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockChartComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", d_r7.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r7.value, " ");
} }
const _c2 = function (a0) { return { "color": a0 }; };
function StockChartComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_div_50_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleSeasonY($event, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4._showSeasonY[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r9.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, y_r9.direction == "UP" ? "palegreen" : "lightcoral"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r9.value, "% ");
} }
class StockChartComponent {
    constructor(zone, sanitizer, stockChartService, cdr) {
        this.zone = zone;
        this.sanitizer = sanitizer;
        this.stockChartService = stockChartService;
        this.cdr = cdr;
        // chart side bar toggle
        this._sideBarOpen = false;
        // chart series toggle
        this._showSeason10 = true;
        this._showSeason5 = true;
        this._showVolume = true;
        this._showSeasonY = [false, false, false, false, false, false, false, false, false, false];
        this._showMagentaChannel = true;
        // seasonality yearly data
        this._seasonYear = [];
        this._seasonYearCount = 0;
        // seasonality scanner data and default value
        this._scannerData = [];
        this._scannerDataValue = "30";
        this._scannerDataCountUp = 0;
        this._scannerDataCountDown = 0;
        this._scannerDataTotalDisplay = "";
    }
    ngOnInit() {
        for (var i = 1; i <= 252; i++) {
            this._scannerData[i - 1] = {
                "index": i,
                "value": i + " Day(s) Scanner",
                "direction": "UP"
            };
        }
        this._scannerDataValue = "30";
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.destroyStockChart();
    }
    // ========================
    // Create and destroy chart
    // ========================
    createStockChart(symbol) {
        if (symbol != null) {
            const stockPriceWrapperObservable = this.stockChartService.getStockPriceWrapper(symbol);
            stockPriceWrapperObservable.subscribe(stockPriceWrapper => {
                if (stockPriceWrapper.stockPrices.length > 0) {
                    this.zone.runOutsideAngular(() => {
                        // ==================
                        // Setup the raw data
                        // ==================
                        var rawData;
                        var initialClosingPriceData;
                        var seasonIndex;
                        var yearCount;
                        this._seasonYear = [];
                        this._seasonYearCount = 0;
                        this._scannerDataCountUp = 0;
                        this._scannerDataCountDown = 0;
                        this._scannerDataTotalDisplay = "";
                        this._chartLabel.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(""));
                        initialClosingPriceData = [];
                        rawData = [];
                        seasonIndex = 126;
                        yearCount = 0;
                        for (var i = 0; i < stockPriceWrapper.stockPrices.length; i++) {
                            rawData.push({
                                "quoteDate": new Date(stockPriceWrapper.stockPrices[i].quoteDate),
                                "openPrice": stockPriceWrapper.stockPrices[i].openPrice,
                                "highPrice": stockPriceWrapper.stockPrices[i].highPrice,
                                "lowPrice": stockPriceWrapper.stockPrices[i].lowPrice,
                                "closePrice": stockPriceWrapper.stockPrices[i].closePrice,
                                "volume": stockPriceWrapper.stockPrices[i].volume,
                                "season10": 0,
                                "season5": 0,
                                "seasonIndex": seasonIndex
                            });
                            seasonIndex--;
                            if (seasonIndex == 0) {
                                seasonIndex = 252;
                                if (yearCount > 0) {
                                    initialClosingPriceData.push(stockPriceWrapper.stockPrices[i].closePrice);
                                }
                                yearCount++;
                            }
                            else {
                                if (i == stockPriceWrapper.stockPrices.length - 1) {
                                    if (yearCount > 0) {
                                        initialClosingPriceData.push(stockPriceWrapper.stockPrices[i].closePrice);
                                    }
                                }
                            }
                        }
                        // ===========================
                        // Compute for the seasonality
                        // ===========================
                        var seasonYearlyData = [];
                        var closePriceYearlyData = [];
                        var season10Data = [];
                        var season5Data = [];
                        var season10 = 0;
                        var season5 = 0;
                        var seasonYearCount = 0;
                        seasonIndex = 251;
                        yearCount = 0;
                        // Initialize seasonYearlyData[][] and closePriceYearlyData[][] by 12 years with 252 days
                        for (var i = 0; i < 12; i++) {
                            seasonYearlyData[i] = [];
                            for (var d = 0; d < 252; d++)
                                seasonYearlyData[i].push(0);
                            closePriceYearlyData[i] = [];
                            for (var d = 0; d < 252; d++)
                                closePriceYearlyData[i].push(0);
                        }
                        // Compute yearly seasonality data
                        for (var i = 126; i < rawData.length; i++) {
                            if (initialClosingPriceData[yearCount] > 0) {
                                season10 = ((rawData[i].closePrice - initialClosingPriceData[yearCount]) / initialClosingPriceData[yearCount]) * 100;
                            }
                            else {
                                season10 = 0;
                            }
                            if (yearCount < 5) {
                                season5 = season10;
                            }
                            else {
                                season5 = 0;
                            }
                            rawData[i].season10 = season10;
                            rawData[i].season5 = season5;
                            seasonYearlyData[yearCount][seasonIndex] = season10;
                            closePriceYearlyData[yearCount][seasonIndex] = rawData[i].closePrice;
                            seasonIndex--;
                            if (seasonIndex == -1) {
                                seasonIndex = 251;
                                yearCount++;
                            }
                            else if (seasonIndex == 250) {
                                this._seasonYear[yearCount] = {
                                    "year": rawData[i].quoteDate.getFullYear(),
                                    "value": 0
                                };
                            }
                        }
                        seasonYearCount = this._seasonYear.length;
                        this._seasonYearCount = seasonYearCount;
                        // Sum seasonality data
                        for (var i = 0; i < 252; i++) {
                            season10 = 0;
                            season5 = 0;
                            for (var y = 0; y < this._seasonYearCount; y++) {
                                season10 += seasonYearlyData[y][i];
                                if (y < 5)
                                    season5 += seasonYearlyData[y][i];
                            }
                            season10Data[i] = season10;
                            season5Data[i] = season5;
                        }
                        // ====================
                        // Create the plot data
                        // ====================
                        var plotData;
                        var lastQuoteDate;
                        var extendedDate;
                        plotData = [];
                        lastQuoteDate = new Date(stockPriceWrapper.stockPrices[0].quoteDate);
                        extendedDate = new Date(lastQuoteDate.setDate(lastQuoteDate.getDate() + 1));
                        for (var i = 0; i < 252; i++) {
                            if (i > 125) {
                                plotData.push({
                                    quoteDate: extendedDate,
                                    season10: (season10Data[i] / 10).toFixed(2),
                                    season5: (season5Data[i] / 5).toFixed(2),
                                    seasonY0: seasonYearlyData[0][i].toFixed(2),
                                    seasonY1: seasonYearlyData[1][i].toFixed(2),
                                    seasonY2: seasonYearlyData[2][i].toFixed(2),
                                    seasonY3: seasonYearlyData[3][i].toFixed(2),
                                    seasonY4: seasonYearlyData[4][i].toFixed(2),
                                    seasonY5: seasonYearlyData[5][i].toFixed(2),
                                    seasonY6: seasonYearlyData[6][i].toFixed(2),
                                    seasonY7: seasonYearlyData[7][i].toFixed(2),
                                    seasonY8: seasonYearlyData[8][i].toFixed(2),
                                    seasonY9: seasonYearlyData[9][i].toFixed(2),
                                    seasonIndex: i + 1
                                });
                                extendedDate = new Date(extendedDate.setDate(extendedDate.getDate() + 1));
                            }
                            else {
                                plotData.push({
                                    quoteDate: rawData[125 - i].quoteDate,
                                    openPrice: rawData[125 - i].openPrice,
                                    highPrice: rawData[125 - i].highPrice,
                                    lowPrice: rawData[125 - i].lowPrice,
                                    closePrice: rawData[125 - i].closePrice,
                                    volume: rawData[125 - i].volume,
                                    season10: (season10Data[i] / 10).toFixed(2),
                                    season5: (season5Data[i] / 5).toFixed(2),
                                    seasonY0: seasonYearlyData[0][i].toFixed(2),
                                    seasonY1: seasonYearlyData[1][i].toFixed(2),
                                    seasonY2: seasonYearlyData[2][i].toFixed(2),
                                    seasonY3: seasonYearlyData[3][i].toFixed(2),
                                    seasonY4: seasonYearlyData[4][i].toFixed(2),
                                    seasonY5: seasonYearlyData[5][i].toFixed(2),
                                    seasonY6: seasonYearlyData[6][i].toFixed(2),
                                    seasonY7: seasonYearlyData[7][i].toFixed(2),
                                    seasonY8: seasonYearlyData[8][i].toFixed(2),
                                    seasonY9: seasonYearlyData[9][i].toFixed(2),
                                    seasonIndex: i + 1
                                });
                            }
                        }
                        // ================
                        // Create the chart
                        // ================
                        this.destroyStockChart();
                        this.displayChartLabel(stockPriceWrapper.exchange, stockPriceWrapper.symbol, stockPriceWrapper.symbolDescription, stockPriceWrapper.stockPrices[0].closePrice, stockPriceWrapper.stockPrices[1].closePrice);
                        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_4__["default"]);
                        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
                        // the chart
                        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
                        chart.paddingRight = 20;
                        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
                        chart.responsive.enabled = true;
                        // x axis (date category axis)
                        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
                        dateAxis.skipEmptyPeriods = true;
                        // volume series - [0]
                        let volumeAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                        volumeAxis.tooltip.disabled = true;
                        volumeAxis.renderer.grid.template.disabled = true;
                        volumeAxis.renderer.labels.template.disabled = true;
                        let volumeSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
                        volumeSeries.yAxis = volumeAxis;
                        volumeSeries.dataFields.valueY = "volume";
                        volumeSeries.dataFields.dateX = "quoteDate";
                        volumeSeries.columns.template.fillOpacity = .1;
                        volumeSeries.clustered = false;
                        volumeSeries.strokeWidth = 0;
                        // price series - [1]
                        let priceAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                        priceAxis.tooltip.disabled = true;
                        priceAxis.strictMinMax = true;
                        let priceSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CandlestickSeries"]());
                        priceSeries.name = "priceSeries";
                        priceSeries.yAxis = priceAxis;
                        priceSeries.dataFields.dateX = "quoteDate";
                        priceSeries.dataFields.valueY = "closePrice";
                        priceSeries.dataFields.openValueY = "openPrice";
                        priceSeries.dataFields.lowValueY = "lowPrice";
                        priceSeries.dataFields.highValueY = "highPrice";
                        priceSeries.tooltipText = "{valueY.value}";
                        priceSeries.strokeWidth = 2;
                        // seasonality series - [2], [3], [4-13]
                        let season10Axis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                        season10Axis.tooltip.disabled = true;
                        season10Axis.strokeWidth = 0;
                        season10Axis.renderer.grid.template.disabled = true;
                        season10Axis.renderer.labels.template.disabled = true;
                        season10Axis.strictMinMax = true;
                        let season10series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
                        season10series.name = "season10series";
                        season10series.yAxis = season10Axis;
                        season10series.dataFields.dateX = "quoteDate";
                        season10series.dataFields.valueY = "season10";
                        season10series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FFD700");
                        season10series.strokeWidth = 1;
                        season10series.tooltip.disabled = true;
                        let season5Axis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                        season5Axis.tooltip.disabled = true;
                        season5Axis.strokeWidth = 0;
                        season5Axis.renderer.grid.template.disabled = true;
                        season5Axis.renderer.labels.template.disabled = true;
                        season5Axis.strictMinMax = true;
                        let season5series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
                        season5series.name = "season5series";
                        season5series.yAxis = season5Axis;
                        season5series.dataFields.dateX = "quoteDate";
                        season5series.dataFields.valueY = "season5";
                        season5series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#80DED0");
                        season5series.strokeWidth = 1;
                        season5series.tooltip.disabled = true;
                        var yearAxis = [];
                        var yearSeries = [];
                        for (var i = 0; i < seasonYearCount; i++) {
                            yearAxis[i] = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                            yearAxis[i].tooltip.disabled = true;
                            yearAxis[i].renderer.grid.template.disabled = true;
                            yearAxis[i].renderer.labels.template.disabled = true;
                            yearAxis[i].strokeWidth = 0;
                            yearAxis[i].strictMinMax = true;
                            yearSeries[i] = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
                            yearSeries[i].name = "yearSeries" + i;
                            yearSeries[i].yAxis = yearAxis[i];
                            yearSeries[i].dataFields.dateX = "quoteDate";
                            yearSeries[i].dataFields.valueY = "seasonY" + i;
                            yearSeries[i].stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#A9A9A9");
                            yearSeries[i].strokeWidth = 1;
                            yearSeries[i].tooltip.disabled = true;
                            yearSeries[i].hidden = true;
                        }
                        // cursor
                        let chartCursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
                        chart.cursor = chartCursor;
                        // data
                        let data = [];
                        for (var i = 251; i >= 0; i--) {
                            data.push({
                                "quoteDate": plotData[251 - i].quoteDate,
                                "openPrice": plotData[251 - i].openPrice,
                                "highPrice": plotData[251 - i].highPrice,
                                "lowPrice": plotData[251 - i].lowPrice,
                                "closePrice": plotData[251 - i].closePrice,
                                "volume": plotData[251 - i].volume,
                                "season10": plotData[251 - i].season10,
                                "season5": plotData[251 - i].season5,
                                "seasonY0": plotData[251 - i].seasonY0,
                                "seasonY1": plotData[251 - i].seasonY1,
                                "seasonY2": plotData[251 - i].seasonY2,
                                "seasonY3": plotData[251 - i].seasonY3,
                                "seasonY4": plotData[251 - i].seasonY4,
                                "seasonY5": plotData[251 - i].seasonY5,
                                "seasonY6": plotData[251 - i].seasonY6,
                                "seasonY7": plotData[251 - i].seasonY7,
                                "seasonY8": plotData[251 - i].seasonY8,
                                "seasonY9": plotData[251 - i].seasonY9,
                                "seasonIndex": plotData[251 - i].seasonIndex
                            });
                        }
                        chart.data = data;
                        // watermark
                        let watermark = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]();
                        watermark.text = stockPriceWrapper.exchange + ':' + stockPriceWrapper.symbol + "\n" +
                            "[font-size: 15px]" + stockPriceWrapper.symbolDescription + "[/]";
                        watermark.fontSize = 30;
                        watermark.opacity = 0.2;
                        watermark.align = "right";
                        watermark.valign = "top";
                        chart.plotContainer.children.push(watermark);
                        // mid guide
                        let midGuide = dateAxis.axisRanges.create();
                        midGuide.date = data[125].quoteDate;
                        midGuide.endDate = data[125].quoteDate;
                        midGuide.axisFill.strokeDasharray = "3,3";
                        midGuide.axisFill.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FFB6C1");
                        /*
                        // magenta channel
                        let channelMaxSeries = chart.series.push(new am4charts.LineSeries());
                        channelMaxSeries.yAxis = priceAxis;
                        channelMaxSeries.name = "channelMaxSeries";
                        channelMaxSeries.dataFields.valueY = "value";
                        channelMaxSeries.dataFields.dateX = "date";
                        channelMaxSeries.strokeWidth = 1
                        channelMaxSeries.tooltip.disabled = true;
                        channelMaxSeries.stroke = am4core.color("#98FB98");
                        channelMaxSeries.data = this.computeMagentaChannelData(data, "MAX");
            
                        let channelMidSeries = chart.series.push(new am4charts.LineSeries());
                        channelMidSeries.yAxis = priceAxis;
                        channelMidSeries.name = "channelMidSeries";
                        channelMidSeries.dataFields.valueY = "value";
                        channelMidSeries.dataFields.dateX = "date";
                        channelMidSeries.strokeWidth = 2
                        channelMidSeries.tooltip.disabled = true;
                        channelMidSeries.stroke = am4core.color("#FF00FF");
                        channelMidSeries.data = this.computeMagentaChannelData(data, "MID");
            
                        let channelMinSeries = chart.series.push(new am4charts.LineSeries());
                        channelMinSeries.yAxis = priceAxis;
                        channelMinSeries.name = "channelMinSeries";
                        channelMinSeries.dataFields.valueY = "value";
                        channelMinSeries.dataFields.dateX = "date";
                        channelMinSeries.strokeWidth = 1
                        channelMinSeries.tooltip.disabled = true;
                        channelMinSeries.stroke = am4core.color("#F08080");
                        channelMinSeries.data = this.computeMagentaChannelData(data, "MIN");
                        */
                        // zoom events
                        dateAxis.events.on("selectionextremeschanged", (ev) => this.calibratePriceAxis(ev, data, priceAxis));
                        dateAxis.events.on("selectionextremeschanged", (ev) => this.calibrateSeason10Axis(ev, data, season10Axis));
                        dateAxis.events.on("selectionextremeschanged", (ev) => this.calibrateSeason5Axis(ev, data, season5Axis));
                        dateAxis.events.on("selectionextremeschanged", (ev) => this.calibrateSeasonYAxis(ev, data, seasonYearCount, yearAxis));
                        // cursor position event
                        chart.cursor.events.on("cursorpositionchanged", (ev) => this.cursorPositionChanged(ev, data, closePriceYearlyData));
                        this._chart = chart;
                    });
                }
                else {
                    this.destroyStockChart();
                    this._chartLabel.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml("Symbol not found."));
                }
            });
        }
    }
    destroyStockChart() {
        this.zone.runOutsideAngular(() => {
            if (this._chart) {
                this._chart.dispose();
            }
        });
    }
    // ================================
    // Chart events and other functions
    // ================================
    displayChartLabel(exchange, symbol, symbolDescription, closePrice, previousClosePrice) {
        let chartLabelHtml = exchange + ':<b>' + symbol + '</b>   ' + '(' + symbolDescription + ')     ';
        if (closePrice > previousClosePrice) {
            chartLabelHtml += '<font color="palegreen" size="3"> +';
        }
        else if (closePrice = previousClosePrice) {
            chartLabelHtml += '<font color="gold" size="3"> ';
        }
        else {
            chartLabelHtml += '<font color="lightcoral" size="3"> -';
        }
        chartLabelHtml += closePrice + '</font>';
        this._chartLabel.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(chartLabelHtml));
    }
    cursorPositionChanged(ev, data, closePriceYearlyData) {
        if (ev) {
            // Display chart legend header data values
            let xAxis = ev.target.chart.xAxes.getIndex(0);
            let xPosition = Math.floor(xAxis.toAxisPosition(ev.target.xPosition) * 252);
            let quoteDate = xAxis.positionToDate(xAxis.toAxisPosition(ev.target.xPosition));
            let quoteDateString = quoteDate.toLocaleDateString();
            let chartCursorDataHtml = " ";
            if (xPosition < 126) {
                chartCursorDataHtml = "<font color='gray'>Date:</font><b>" + quoteDateString + "</b>    " +
                    "<font color='gray'>Open:</font><b>" + this.numberWithCommas(data[xPosition].openPrice) + "</b>    " +
                    "<font color='gray'>High:</font><b>" + this.numberWithCommas(data[xPosition].highPrice) + "</b>    " +
                    "<font color='gray'>Low:</font><b>" + this.numberWithCommas(data[xPosition].lowPrice) + "</b>    " +
                    "<font color='gray'>Close:</font><b>" + this.numberWithCommas(data[xPosition].closePrice) + "</b>    " +
                    "<font color='gray'>Volume:</font><b>" + this.numberWithCommas(data[xPosition].volume) + "</b>";
            }
            this._chartCursorData.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(chartCursorDataHtml));
            // Display season yearly data values
            let range = parseInt(this._scannerDataValue);
            let startX = Math.floor(xAxis.toAxisPosition(ev.target.xPosition) * 252);
            let endX = startX + range;
            let direction = "UP";
            let directionUp = 0;
            let directionUpTotal = 0;
            let directionDown = 0;
            let directionDownTotal = 0;
            for (var y = 0; y < this._seasonYearCount; y++) {
                if (startX >= 0 && startX < 251) {
                    let startClosePrice = closePriceYearlyData[y][startX + 1];
                    let endClosePrice = closePriceYearlyData[y][endX];
                    let valuePercentage = 100;
                    if (endClosePrice > startClosePrice) {
                        if (startClosePrice > 0) {
                            valuePercentage = ((endClosePrice - startClosePrice) / startClosePrice) * 100;
                            direction = "UP";
                            directionUp++;
                            directionUpTotal += valuePercentage;
                        }
                    }
                    else {
                        if (endClosePrice > 0) {
                            valuePercentage = ((startClosePrice - endClosePrice) / endClosePrice) * 100;
                            direction = "DOWN";
                            directionDown++;
                            directionDownTotal += valuePercentage;
                        }
                    }
                    this._seasonYear[y].value = valuePercentage.toFixed(2);
                    this._seasonYear[y].direction = direction;
                    this._scannerDataCountUp = directionUp;
                    this._scannerDataCountDown = directionDown;
                    if (directionUp > directionDown) {
                        this._scannerDataTotalDisplay = directionUp + "/" + directionDown + " - " + (directionUpTotal / directionUp).toFixed(2) + "%";
                    }
                    else {
                        this._scannerDataTotalDisplay = directionDown + "/" + directionUp + " - " + (directionDownTotal / directionDown).toFixed(2) + "%";
                    }
                }
            }
            this.cdr.detectChanges();
        }
    }
    calibratePriceAxis(ev, data, priceAxis) {
        var axis = ev.target;
        var startX = Math.floor(axis.start * 252);
        var endX = Math.floor(axis.end * 252);
        var minClosePrice = 0;
        var maxClosePrice = 0;
        for (var i = startX; i < endX; i++) {
            if (i == startX) {
                minClosePrice = parseFloat(data[i].closePrice);
                maxClosePrice = parseFloat(data[i].closePrice);
            }
            else {
                if (parseFloat(data[i].closePrice) < minClosePrice)
                    minClosePrice = parseFloat(data[i].closePrice);
                if (parseFloat(data[i].closePrice) > maxClosePrice)
                    maxClosePrice = parseFloat(data[i].closePrice);
            }
        }
        console.log(startX + "----" + endX);
        var upClosePrice = 0;
        var downClosePrice = 0;
        if (endX > 124) {
            upClosePrice = maxClosePrice - parseFloat(data[125].closePrice);
            downClosePrice = parseFloat(data[125].closePrice) - minClosePrice;
            if (upClosePrice > downClosePrice) {
                priceAxis.max = maxClosePrice;
                priceAxis.min = minClosePrice - (upClosePrice - downClosePrice);
            }
            else if (upClosePrice < downClosePrice) {
                priceAxis.max = maxClosePrice + (downClosePrice - upClosePrice);
                priceAxis.min = minClosePrice;
            }
        }
        else {
            priceAxis.max = maxClosePrice;
            priceAxis.min = minClosePrice;
        }
    }
    calibrateSeason10Axis(ev, data, season10Axis) {
        var axis = ev.target;
        var startX = Math.floor(axis.start * 252);
        var endX = Math.floor(axis.end * 252);
        var minSeason10 = 0;
        var maxSeason10 = 0;
        for (var i = startX; i < endX; i++) {
            if (i == startX) {
                minSeason10 = parseFloat(data[i].season10);
                maxSeason10 = parseFloat(data[i].season10);
            }
            else {
                if (parseFloat(data[i].season10) < minSeason10)
                    minSeason10 = parseFloat(data[i].season10);
                if (parseFloat(data[i].season10) > maxSeason10)
                    maxSeason10 = parseFloat(data[i].season10);
            }
        }
        var upSeason10 = 0;
        var downSeason10 = 0;
        if (endX > 124) {
            upSeason10 = maxSeason10 - parseFloat(data[125].season10);
            downSeason10 = parseFloat(data[125].season10) - minSeason10;
            if (upSeason10 > downSeason10) {
                season10Axis.max = maxSeason10;
                season10Axis.min = minSeason10 - (upSeason10 - downSeason10);
            }
            else if (upSeason10 < downSeason10) {
                season10Axis.max = maxSeason10 + (downSeason10 - upSeason10);
                season10Axis.min = minSeason10;
            }
        }
        else {
            season10Axis.max = maxSeason10;
            season10Axis.min = minSeason10;
        }
    }
    calibrateSeason5Axis(ev, data, season5Axis) {
        var axis = ev.target;
        var startX = Math.floor(axis.start * 252);
        var endX = Math.floor(axis.end * 252);
        var minSeason5 = 0;
        var maxSeason5 = 0;
        for (var i = startX; i < endX; i++) {
            if (i == startX) {
                minSeason5 = parseFloat(data[i].season5);
                maxSeason5 = parseFloat(data[i].season5);
            }
            else {
                if (parseFloat(data[i].season5) < minSeason5)
                    minSeason5 = parseFloat(data[i].season5);
                if (parseFloat(data[i].season5) > maxSeason5)
                    maxSeason5 = parseFloat(data[i].season5);
            }
        }
        var upSeason5 = 0;
        var downSeason5 = 0;
        if (endX > 124) {
            upSeason5 = maxSeason5 - parseFloat(data[125].season5);
            downSeason5 = parseFloat(data[125].season5) - minSeason5;
            if (upSeason5 > downSeason5) {
                season5Axis.max = maxSeason5;
                season5Axis.min = minSeason5 - (upSeason5 - downSeason5);
            }
            else if (upSeason5 < downSeason5) {
                season5Axis.max = maxSeason5 + (downSeason5 - upSeason5);
                season5Axis.min = minSeason5;
            }
        }
        else {
            season5Axis.max = maxSeason5;
            season5Axis.min = minSeason5;
        }
    }
    calibrateSeasonYAxis(ev, data, seasonYearCount, yearAxis) {
        var axis = ev.target;
        var startX = Math.floor(axis.start * 252);
        var endX = Math.floor(axis.end * 252);
        var minSeasonY = 0;
        var maxSeasonY = 0;
        var upSeasonY = 0;
        var downSeasonY = 0;
        for (var y = 0; y < seasonYearCount; y++) {
            minSeasonY = 0;
            maxSeasonY = 0;
            for (var i = startX; i < endX; i++) {
                if (i == startX) {
                    minSeasonY = parseFloat(data[i]["seasonY" + y]);
                    maxSeasonY = parseFloat(data[i]["seasonY" + y]);
                }
                else {
                    if (parseFloat(data[i]["seasonY" + y]) < minSeasonY)
                        minSeasonY = parseFloat(data[i]["seasonY" + y]);
                    if (parseFloat(data[i]["seasonY" + y]) > maxSeasonY)
                        maxSeasonY = parseFloat(data[i]["seasonY" + y]);
                }
            }
            upSeasonY = 0;
            downSeasonY = 0;
            if (endX > 124) {
                upSeasonY = maxSeasonY - parseFloat(data[125]["seasonY" + y]);
                downSeasonY = parseFloat(data[125]["seasonY" + y]) - minSeasonY;
                if (upSeasonY > downSeasonY) {
                    yearAxis[y].max = maxSeasonY;
                    yearAxis[y].min = minSeasonY - (upSeasonY - downSeasonY);
                }
                else if (upSeasonY < downSeasonY) {
                    yearAxis[y].max = maxSeasonY + (downSeasonY - upSeasonY);
                    yearAxis[y].min = minSeasonY;
                }
            }
            else {
                yearAxis[y].max = maxSeasonY;
                yearAxis[y].min = minSeasonY;
            }
        }
    }
    computeMagentaChannelData(data, channel) {
        var startX = 0;
        var endX = 251;
        var channelMaxLength = 30;
        var channelLength = 0;
        var coefficient;
        var channelStartX = startX > 125 ? 125 : startX;
        var channelEndX = endX > 125 ? 125 : endX;
        if (endX > 125) {
            channelLength = 126 - startX;
        }
        else {
            channelLength = endX - startX;
        }
        if (channelLength > 30) {
            let countX = 0;
            for (var i = channelEndX; i > startX; i--) {
                if (countX > 30) {
                    coefficient = this.computeDataCorrelationCoefficient(data, i, channelEndX);
                    if (coefficient <= 0.9) {
                        channelStartX = i;
                        break;
                    }
                }
                countX++;
            }
        }
        channelLength = channelEndX - channelStartX;
        // define the slope
        var m = 0;
        if (endX > 125) {
            m = (parseFloat(data[125].closePrice) - parseFloat(data[channelStartX].closePrice)) / channelLength;
        }
        else {
            m = (parseFloat(data[channelEndX].closePrice) - parseFloat(data[channelStartX].closePrice)) / channelLength;
        }
        // get the intercepts
        var b = [];
        for (var i = 0; i < channelLength; i++) {
            b[i] = parseFloat(data[i + channelStartX].closePrice) - (m * (i + 1));
        }
        b.sort(function (a, b) { return a - b; });
        var bMax = b[Math.floor(channelLength * .9)];
        var bMid = b[Math.floor(channelLength * .5)];
        var bMin = b[Math.floor(channelLength * .1)];
        var channelMaxdData = [
            { "date": data[channelStartX].quoteDate, "value": (m + bMax) },
            { "date": data[251].quoteDate, "value": ((m * (251 - channelStartX + 1)) + bMax) }
        ];
        var channelMidData = [
            { "date": data[channelStartX].quoteDate, "value": (m + bMid) },
            { "date": data[251].quoteDate, "value": ((m * (251 - channelStartX + 1)) + bMid) }
        ];
        var channelMinData = [
            { "date": data[channelStartX].quoteDate, "value": (m + bMin) },
            { "date": data[251].quoteDate, "value": ((m * (251 - channelStartX + 1)) + bMin) }
        ];
        if (channel == "MAX") {
            return channelMaxdData;
        }
        else if (channel == "MID") {
            return channelMidData;
        }
        else {
            return channelMinData;
        }
    }
    // ==============
    // Toogle methods
    // ==============
    toggleSidebar() {
        this._sideBarOpen = !this._sideBarOpen;
    }
    toggleSeason10(ev) {
        if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(2).show();
        }
        else {
            this._chart.series.getIndex(2).hide();
        }
    }
    toggleSeason5(ev) {
        if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(3).show();
        }
        else {
            this._chart.series.getIndex(3).hide();
        }
    }
    toggleVolume(ev) {
        if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(0).show();
        }
        else {
            this._chart.series.getIndex(0).hide();
        }
    }
    toggleSeasonY(ev, index) {
        if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(4 + index).show();
        }
        else {
            this._chart.series.getIndex(4 + index).hide();
        }
    }
    toggleMagentaChannel(ev) {
        this._chart.series.each(function (series) {
            if (series.name == "channelMaxSeries" ||
                series.name == "channelMidSeries" ||
                series.name == "channelMinSeries") {
                if (ev.currentTarget.checked == true) {
                    series.show();
                }
                else {
                    series.hide();
                }
            }
        });
    }
    // =====
    // Tools
    // =====
    numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    computeDataCorrelationCoefficient(data, startX, endX) {
        var X = 0;
        var Y = 0;
        var sumOfX = 0;
        var sumOfY = 0;
        var sumOfX2 = 0;
        var sumOfY2 = 0;
        var sumOfXY = 0;
        for (var i = startX - 1; i < endX - 1; i++) {
            X = X + 1;
            Y = parseFloat(data[i].closePrice);
            sumOfX = sumOfX + X;
            sumOfY = sumOfY + Y;
            sumOfXY = sumOfXY + (X * Y);
            sumOfX2 = sumOfX2 + (X * X);
            sumOfY2 = sumOfY2 + (Y * Y);
        }
        //r = Σ (xy) / sqrt [ ( Σ x2 ) * ( Σ y2 ) ]
        return (sumOfXY - ((sumOfX * sumOfY) / X)) / Math.sqrt(((sumOfX2 - ((sumOfX * sumOfX) / X)) * (sumOfY2 - ((sumOfY * sumOfY) / X)))); // Pearson
    }
}
StockChartComponent.ɵfac = function StockChartComponent_Factory(t) { return new (t || StockChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__["StockChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
StockChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockChartComponent, selectors: [["app-widget-stock-chart"]], viewQuery: function StockChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chartLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chartCursorData = _t.first);
    } }, decls: 93, vars: 13, consts: [["fxLayout", "column", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxLayout", "row"], ["fxFlex", "25%"], ["fxLayout", "row", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxFlex", "30px", 4, "ngIf"], ["fxFlex", "100%"], [1, "my-chart-font"], ["chartLabel", ""], ["fxFlex", "75%"], ["chartCursorData", ""], ["mode", "side", 3, "opened"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxFlex", "30px"], ["type", "checkbox"], ["fxFlex", "140px"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "5px"], ["fxFlex", "30px", 1, "my-chart-font", 2, "text-align", "center"], ["fxFlex", "140px", 1, "my-chart-font"], ["type", "checkbox", 3, "checked", "change"], ["fxFlex", "150px"], ["color", "#FFD700"], ["fxLayout", "row", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "10px"], ["required", "", 1, "my-chart-font", 3, "value", "valueChange"], ["class", "my-chart-font", 3, "value", 4, "ngFor", "ngForOf"], ["style", "width: 100%; margin-top:-12px;margin-bottom:-12px;", "fxLayout", "row wrap", "fxLayoutGap", "1px", 4, "ngFor", "ngForOf"], ["fxFlex", "30px", 1, "my-chart-font"], ["fxFlex", "140px", 1, "my-chart-font", 2, "text-align", "right", 3, "ngStyle"], ["color", "#80DED0"], ["color", "#FF00FF"], ["color", "gray"], ["id", "chartdiv", "fxFlex", "100%", 2, "width", "100%", "height", "550px"], [2, "background-color", "lightpink", 3, "click"], [1, "my-chart-font", 3, "value"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "-12px"], ["fxFlex", "30px", 2, "text-align", "center"], ["fxFlex", "40px"], ["fxFlex", "100px", 2, "text-align", "right"], [1, "my-chart-font", 3, "ngStyle"]], template: function StockChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockChartComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 6, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-drawer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "OPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MSI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u29BF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Condition: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u29BF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Trade Action: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_38_listener($event) { return ctx.toggleSeason10($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "10-Year Seasonality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u2587");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u29BF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function StockChartComponent_Template_mat_select_valueChange_48_listener($event) { return ctx._scannerDataValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StockChartComponent_mat_option_49_Template, 2, 2, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, StockChartComponent_div_50_Template, 9, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_59_listener($event) { return ctx.toggleSeason5($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5-Year Seasonality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "font", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u2587");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Seasonality Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_75_listener($event) { return ctx.toggleMagentaChannel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Magenta Channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "font", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u2587");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_84_listener($event) { return ctx.toggleVolume($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Volume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "font", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u2587");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._seasonYear.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx._sideBarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showSeason10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._scannerDataValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._scannerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._seasonYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx._scannerDataCountUp > ctx._scannerDataCountDown ? "palegreen" : "lightcoral"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._scannerDataTotalDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showSeason5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showMagentaChannel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showVolume);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["mat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: transparent;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: transparent;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUgMS9hbmd1bGFyL21hZ2VudGF0cmFkZXIuY29tL21hZ2VudGF0cmFkZXI0L3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvc3RvY2stY2hhcnQvc3RvY2stY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3N0b2NrLWNoYXJ0L3N0b2NrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3N0b2NrLWNoYXJ0L3N0b2NrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogNXB4O1xufSIsIm1hdC1kcmF3ZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-stock-chart',
                templateUrl: './stock-chart.component.html',
                styleUrls: ['./stock-chart.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__["StockChartService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { _chartLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartLabel']
        }], _chartCursorData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartCursorData']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Samsung_T5 1/angular/magentatrader.com/magentatrader4/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map