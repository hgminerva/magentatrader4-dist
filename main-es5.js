function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/admin/admin.component */
    "./src/app/modules/admin/admin.component.ts");
    /* harmony import */


    var _modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/chart/chart.component */
    "./src/app/modules/chart/chart.component.ts");
    /* harmony import */


    var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/login/login.component */
    "./src/app/modules/login/login.component.ts");

    var routes = [{
      path: '',
      component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
      children: [{
        path: '',
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'dashboard',
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'chart',
        component: _modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]
      }, {
        path: 'admin',
        component: _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
      }, {
        path: 'login',
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'magentatrader4';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.guard.ts":
  /*!******************************!*\
    !*** ./src/app/app.guard.ts ***!
    \******************************/

  /*! exports provided: AppGuard */

  /***/
  function srcAppAppGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppGuard", function () {
      return AppGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppGuard = /*#__PURE__*/function () {
      function AppGuard(router) {
        _classCallCheck(this, AppGuard);

        this.router = router;
      }

      _createClass(AppGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          this.router.navigate(["/"]);
          return false;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          return true;
        }
      }]);

      return AppGuard;
    }();

    AppGuard.ɵfac = function AppGuard_Factory(t) {
      return new (t || AppGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppGuard,
      factory: AppGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/default/default.module */
    "./src/app/layouts/default/default.module.ts");
    /* harmony import */


    var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/login/login.component */
    "./src/app/modules/login/login.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.guard */
    "./src/app/app.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_guard__WEBPACK_IMPORTED_MODULE_15__["AppGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__["DefaultModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__["DefaultModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__["DefaultModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"]],
          providers: [_app_guard__WEBPACK_IMPORTED_MODULE_15__["AppGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/default/default.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/default/default.component.ts ***!
    \******************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modules/login/login.service */
    "./src/app/modules/login/login.service.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent(loginService) {
        var _this = this;

        _classCallCheck(this, DefaultComponent);

        this.loginService = loginService;
        this.sideBarOpen = false;
        this.currentUsername = "";
        loginService.getCurrentUsername.subscribe(function (username) {
          return _this.secureComponent(username);
        });
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "secureComponent",
        value: function secureComponent(username) {
          this.currentUsername = username;

          if (this.currentUsername) {
            this.sideBarOpen = true;
          } else {
            this.sideBarOpen = false;
          }
        }
      }, {
        key: "sideBarToggler",
        value: function sideBarToggler($event) {
          this.sideBarOpen = !this.sideBarOpen;
        }
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ɵfac = function DefaultComponent_Factory(t) {
      return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultComponent,
      selectors: [["app-default"]],
      decls: 7,
      vars: 1,
      consts: [[3, "toggleSidebarForMe"], ["mode", "side", 3, "opened"]],
      template: function DefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebarForMe", function DefaultComponent_Template_app_header_toggleSidebarForMe_0_listener($event) {
            return ctx.sideBarToggler($event);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #caabb5;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url(\"/assets/bg-darker.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUvYW5ndWxhci9tYWdlbnRhdHJhZGVyLmNvbS9tYWdlbnRhdHJhZGVyNC9zcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLDhDQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWRyYXdlciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE3MSwgMTgxKTtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JnLWRhcmtlci5qcGcnKTtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhYWJiNTtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmctZGFya2VyLmpwZ1wiKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-default',
          templateUrl: './default.component.html',
          styleUrls: ['./default.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/default/default.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/default/default.module.ts ***!
    \***************************************************/

  /*! exports provided: DefaultModule */

  /***/
  function srcAppLayoutsDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/admin/admin.component */
    "./src/app/modules/admin/admin.component.ts");
    /* harmony import */


    var src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/chart/chart.component */
    "./src/app/modules/chart/chart.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var DefaultModule = function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    };

    DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DefaultModule
    });
    DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DefaultModule_Factory(t) {
        return new (t || DefaultModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, {
        declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"], src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"], src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], src_app_modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], src_app_modules_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/stock-price-wrapper-model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/models/stock-price-wrapper-model.ts ***!
    \*****************************************************/

  /*! exports provided: StockPriceWrapperModel */

  /***/
  function srcAppModelsStockPriceWrapperModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockPriceWrapperModel", function () {
      return StockPriceWrapperModel;
    });

    var StockPriceWrapperModel = function StockPriceWrapperModel() {
      _classCallCheck(this, StockPriceWrapperModel);
    };
    /***/

  },

  /***/
  "./src/app/modules/admin/admin.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/admin/admin.component.ts ***!
    \**************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppModulesAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 4,
      vars: 0,
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/chart/chart.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/chart/chart.component.ts ***!
    \**************************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppModulesChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/widgets/stock-chart/stock-chart.component */
    "./src/app/shared/widgets/stock-chart/stock-chart.component.ts");
    /* harmony import */


    var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/login/login.service */
    "./src/app/modules/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = ["inputSymbol"];

    var ChartComponent = /*#__PURE__*/function () {
      function ChartComponent(loginService, router) {
        _classCallCheck(this, ChartComponent);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (localStorage.getItem("access_token") == "") {
            setTimeout(function () {
              _this2.router.navigate(['/']);
            }, 500);
          }
        }
      }, {
        key: "updateStockChart",
        value: function updateStockChart(event) {
          var symbol = event.target.value.toUpperCase();
          this.stockChart.createStockChart(symbol);
          this.inputSymbol.nativeElement.value = '';
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.ɵfac = function ChartComponent_Factory(t) {
      return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["app-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputSymbol = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stockChart = _t.first);
        }
      },
      decls: 8,
      vars: 0,
      consts: [["floatLabel", "never", 1, "my-form-field", 2, "margin-top", "-1.25em"], ["matInput", "", "autocomplete", "off", "autofocus", "", "oninput", "this.value = this.value.toUpperCase()", 3, "keydown.enter"], ["inputSymbol", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type symbol here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChartComponent_Template_input_keydown_enter_4_listener($event) {
            return ctx.updateStockChart($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-widget-stock-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart',
          templateUrl: './chart.component.html',
          styleUrls: ['./chart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        inputSymbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputSymbol']
        }],
        stockChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_shared_widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__["StockChartComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      consts: [[1, "logo"], ["src", "assets/magentatraderlogolarge.png"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo[_ngcontent-%COMP%] {\n  height: 70vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUvYW5ndWxhci9tYWdlbnRhdHJhZGVyLmNvbS9tYWdlbnRhdHJhZGVyNC9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi5sb2dvIHtcbiAgaGVpZ2h0OiA3MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/modules/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router, snackBar) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.snackBar = snackBar;
        this.loginModel = {
          UserName: "",
          Password: ""
        };
        this.snackBarHorizontalPosition = 'left';
        this.snackBarVerticalPosition = 'bottom';
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this3 = this;

          var buttonLogin = document.getElementById("buttonLogin");
          buttonLogin.setAttribute("disabled", "disabled");

          if (this.loginModel.UserName === "" || this.loginModel.Password === "") {
            this.snackBar.open("Username and Password empty.", '', {
              duration: 3000,
              horizontalPosition: this.snackBarHorizontalPosition,
              verticalPosition: this.snackBarVerticalPosition,
              panelClass: ["orange-snackbar"]
            });
          } else {
            this.loginService.login(this.loginModel.UserName, this.loginModel.Password);
            this.loginSubscribe = this.loginService.loginObservable.subscribe(function (data) {
              if (data[0]) {
                _this3.snackBar.open("Login Successful.", '', {
                  duration: 3000,
                  horizontalPosition: _this3.snackBarHorizontalPosition,
                  verticalPosition: _this3.snackBarVerticalPosition,
                  panelClass: ["green-snackbar"]
                });

                setTimeout(function () {
                  _this3.router.navigate(['/dashboard']);
                }, 500);
              } else {
                _this3.snackBar.open(data[1], '', {
                  duration: 3000,
                  horizontalPosition: _this3.snackBarHorizontalPosition,
                  verticalPosition: _this3.snackBarVerticalPosition,
                  panelClass: ["orange-snackbar"]
                });

                buttonLogin.removeAttribute("disabled");
              }

              if (_this3.loginSubscribe != null) _this3.loginSubscribe.unsubscribe();
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.loginSubscribe != null) this.loginSubscribe.unsubscribe();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 31,
      vars: 8,
      consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "30", 2, "margin", "5px"], ["fxFlex", "40", 2, "margin", "5px"], ["routerLink", "/dashboard"], ["src", "./../../../assets/magentatraderlogo.png", "height", "30"], [3, "ngSubmit"], [2, "padding", "20px"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "maxlength", "100", "placeholder", "Enter your username", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["text_username", ""], ["align", "end"], ["type", "password", "matInput", "", "maxlength", "100", "placeholder", "Enter your password", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["text_password", ""], ["type", "submit", "mat-flat-button", "", "id", "buttonLogin", "color", "primary", 2, "width", "100%", "padding-top", "10px", "padding-bottom", "10px"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.loginModel.UserName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.loginModel.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.UserName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.Password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r1.value.length, " / 100");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/login/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/login/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppModulesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(httpClient, router) {
        _classCallCheck(this, LoginService);

        this.httpClient = httpClient;
        this.router = router;
        this.getCurrentUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(username, password) {
          var _this4 = this;

          var url = "https://magentatrader4-api.azurewebsites.net/token";
          var body = "username=" + username + "&password=" + password + "&grant_type=password";
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
          this.httpClient.post(url, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response["access_token"]);
            localStorage.setItem('expires_in', response["expires_in"]);
            localStorage.setItem('token_type', response["token_type"]);
            localStorage.setItem('username', response["userName"]);

            _this4.loginSource.next([true, "Login successful."]);

            _this4.getCurrentUsername.emit(response["userName"]);
          }, function (error) {
            _this4.loginSource.next([false, error["error"].error_description]);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.setItem('access_token', "");
          localStorage.setItem('expires_in', "");
          localStorage.setItem('token_type', "");
          localStorage.setItem('username', "");
          this.getCurrentUsername.emit("");
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        getCurrentUsername: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/stock-chart.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/stock-chart.service.ts ***!
    \*************************************************/

  /*! exports provided: StockChartService */

  /***/
  function srcAppServicesStockChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockChartService", function () {
      return StockChartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_stock_price_wrapper_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/stock-price-wrapper-model */
    "./src/app/models/stock-price-wrapper-model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StockChartService = /*#__PURE__*/function () {
      function StockChartService(http) {
        _classCallCheck(this, StockChartService);

        this.http = http;
        this.apiURL = "https://www.magentatrader.com/api/version4";
      }

      _createClass(StockChartService, [{
        key: "getStockPriceWrapper",
        value: function getStockPriceWrapper(symbol) {
          var _this5 = this;

          var stockPriceWrapperObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var stockPriceWrapperModel = new _models_stock_price_wrapper_model__WEBPACK_IMPORTED_MODULE_2__["StockPriceWrapperModel"]();
            var stockPrices = new Array();

            _this5.http.get(_this5.apiURL + "/getStockPrice/" + symbol).subscribe(function (data) {
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
      }]);

      return StockChartService;
    }();

    StockChartService.ɵfac = function StockChartService_Factory(t) {
      return new (t || StockChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StockChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StockChartService,
      factory: StockChartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA9 All rights reserved 2020\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUvYW5ndWxhci9tYWdlbnRhdHJhZGVyLmNvbS9tYWdlbnRhdHJhZGVyNC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modules/login/login.service */
    "./src/app/modules/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function HeaderComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleSidebar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.currentUsername, " ");
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(loginService, router, snackBar) {
        var _this6 = this;

        _classCallCheck(this, HeaderComponent);

        this.loginService = loginService;
        this.router = router;
        this.snackBar = snackBar;
        this.toggleSidebarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoggedIn = false;
        this.currentUsername = "";
        this.snackBarHorizontalPosition = 'left';
        this.snackBarVerticalPosition = 'bottom';
        loginService.getCurrentUsername.subscribe(function (username) {
          return _this6.secureComponent(username);
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.secureComponent(localStorage.getItem("username"));
        }
      }, {
        key: "secureComponent",
        value: function secureComponent(username) {
          var _this7 = this;

          this.currentUsername = username;

          if (this.currentUsername) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
            setTimeout(function () {
              _this7.router.navigate(['/']);
            }, 500);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginService.logout();
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.toggleSidebarForMe.emit();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        toggleSidebarForMe: "toggleSidebarForMe"
      },
      decls: 23,
      vars: 3,
      consts: [["mat-icon-button", "", 3, "click", 4, "ngIf"], ["src", "./assets/magentatraderlogo.png", 2, "vertical-align", "middle"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/login", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "routerLink", "/login"], ["mat-button", "", 3, "matMenuTriggerFor"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_button_2_Template, 3, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_button_14_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_button_16_Template, 4, 2, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_19_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: lightpink;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUvYW5ndWxhci9tYWdlbnRhdHJhZGVyLmNvbS9tYWdlbnRhdHJhZGVyNC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xufVxuXG51bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn0iLCJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, {
        toggleSidebarForMe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 12,
      vars: 0,
      consts: [["matSubheader", ""], ["mat-list-item", "", "routerLink", "/"], ["mat-list-item", "", "routerLink", "/chart"], ["mat-list-item", "", "routerLink", "/admin"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Screeners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./widgets/stock-chart/stock-chart.component */
    "./src/app/shared/widgets/stock-chart/stock-chart.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
        exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
          exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _widgets_stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_16__["StockChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/widgets/stock-chart/stock-chart.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/widgets/stock-chart/stock-chart.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StockChartComponent */

  /***/
  function srcAppSharedWidgetsStockChartStockChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockChartComponent", function () {
      return StockChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/dark */
    "./node_modules/@amcharts/amcharts4/themes/dark.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/stock-chart.service */
    "./src/app/services/stock-chart.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["chartLabel"];
    var _c1 = ["chartCursorData"];

    function StockChartComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockChartComponent_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleSidebar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2630");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StockChartComponent_mat_option_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", d_r7.index);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r7.value, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "color": a0
      };
    };

    function StockChartComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_div_56_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var i_r10 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.toggleSeasonY($event, i_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var y_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4._showSeasonY[i_r10]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r9.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, y_r9.direction == "UP" ? "palegreen" : "lightcoral"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r9.value, "% ");
      }
    }

    var StockChartComponent = /*#__PURE__*/function () {
      function StockChartComponent(zone, sanitizer, stockChartService, cdr) {
        _classCallCheck(this, StockChartComponent);

        this.zone = zone;
        this.sanitizer = sanitizer;
        this.stockChartService = stockChartService;
        this.cdr = cdr; // chart side bar toggle

        this._sideBarOpen = false; // chart series toggle

        this._showSeason10 = true;
        this._showSeason5 = true;
        this._showVolume = true;
        this._showSeasonY = [false, false, false, false, false, false, false, false, false, false];
        this._showMagentaChannel = true; // seasonality yearly data

        this._seasonYear = [];
        this._seasonYearCount = 0; // seasonality scanner data and default value

        this._scannerData = [];
        this._scannerDataValue = "30";
        this._scannerDataCountUp = 0;
        this._scannerDataCountDown = 0;
        this._scannerDataTotalDisplay = ""; // msi conditions

        this._msiCondition = "";
        this._msiTradeAction = "";
      }

      _createClass(StockChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 1; i <= 252; i++) {
            this._scannerData[i - 1] = {
              "index": i,
              "value": i + " Day(s) Scanner",
              "direction": "UP"
            };
          }

          this._scannerDataValue = "30";
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyStockChart();
        } // ========================
        // Create and destroy chart
        // ========================

      }, {
        key: "createStockChart",
        value: function createStockChart(symbol) {
          var _this8 = this;

          if (symbol != null) {
            var stockPriceWrapperObservable = this.stockChartService.getStockPriceWrapper(symbol);
            stockPriceWrapperObservable.subscribe(function (stockPriceWrapper) {
              if (stockPriceWrapper.stockPrices.length > 0) {
                _this8.zone.runOutsideAngular(function () {
                  // ==================
                  // Setup the raw data
                  // ==================
                  var rawData;
                  var initialClosingPriceData;
                  var seasonIndex;
                  var yearCount;
                  _this8._seasonYear = [];
                  _this8._seasonYearCount = 0;
                  _this8._scannerDataCountUp = 0;
                  _this8._scannerDataCountDown = 0;
                  _this8._scannerDataTotalDisplay = "";
                  _this8._chartLabel.nativeElement.innerHTML = _this8.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, _this8.sanitizer.bypassSecurityTrustHtml(""));
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
                      "seasonIndex": seasonIndex,
                      "ema3": 0,
                      "ema8": 0,
                      "msik": 0,
                      "msikp": 0,
                      "msid": 0
                    });
                    seasonIndex--;

                    if (seasonIndex == 0) {
                      seasonIndex = 252;

                      if (yearCount > 0) {
                        initialClosingPriceData.push(stockPriceWrapper.stockPrices[i].closePrice);
                      }

                      yearCount++;
                    } else {
                      if (i == stockPriceWrapper.stockPrices.length - 1) {
                        if (yearCount > 0) {
                          initialClosingPriceData.push(stockPriceWrapper.stockPrices[i].closePrice);
                        }
                      }
                    }
                  } // ===========================
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
                  yearCount = 0; // Initialize seasonYearlyData[][] and closePriceYearlyData[][] by 12 years with 252 days

                  for (var i = 0; i < 12; i++) {
                    seasonYearlyData[i] = [];

                    for (var d = 0; d < 252; d++) {
                      seasonYearlyData[i].push(0);
                    }

                    closePriceYearlyData[i] = [];

                    for (var d = 0; d < 252; d++) {
                      closePriceYearlyData[i].push(0);
                    }
                  } // Compute yearly seasonality data


                  for (var i = 126; i < rawData.length; i++) {
                    if (initialClosingPriceData[yearCount] > 0) {
                      season10 = (rawData[i].closePrice - initialClosingPriceData[yearCount]) / initialClosingPriceData[yearCount] * 100;
                    } else {
                      season10 = 0;
                    }

                    if (yearCount < 5) {
                      season5 = season10;
                    } else {
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
                    } else if (seasonIndex == 250) {
                      _this8._seasonYear[yearCount] = {
                        "year": rawData[i].quoteDate.getFullYear(),
                        "value": 0
                      };
                    }
                  }

                  seasonYearCount = _this8._seasonYear.length;
                  _this8._seasonYearCount = seasonYearCount; // Sum seasonality data

                  for (var i = 0; i < 252; i++) {
                    season10 = 0;
                    season5 = 0;

                    for (var y = 0; y < _this8._seasonYearCount; y++) {
                      season10 += seasonYearlyData[y][i];
                      if (y < 5) season5 += seasonYearlyData[y][i];
                    }

                    season10Data[i] = season10;
                    season5Data[i] = season5;
                  } // ===================
                  // Compute for the MSI
                  // ===================
                  // Compute for ema3 and ema8


                  var macd_index = 0;
                  var ema3_closePrices = 0;
                  var ema3_previous = 0;
                  var ema3 = 0;
                  var ema8_closePrices = 0;
                  var ema8_previous = 0;
                  var ema8 = 0;

                  for (var i = stockPriceWrapper.stockPrices.length - 1; i >= 0; i--) {
                    // EMA 3
                    if (macd_index < 2) {
                      ema3_closePrices = ema3_closePrices + stockPriceWrapper.stockPrices[i].closePrice;
                    } else if (macd_index == 2) {
                      ema3 = ema3_closePrices / 3;
                      ema3_previous = ema3;
                      rawData[i].ema3 = ema3;
                    } else if (macd_index > 2) {
                      ema3 = stockPriceWrapper.stockPrices[i].closePrice * (2 / (3 + 1)) + ema3_previous * (1 - 2 / (3 + 1));
                      ema3_previous = ema3;
                      rawData[i].ema3 = ema3;
                    } // EMA 8


                    if (macd_index < 7) {
                      ema8_closePrices = ema8_closePrices + stockPriceWrapper.stockPrices[i].closePrice;
                    } else if (macd_index == 7) {
                      ema8 = ema8_closePrices / 8;
                      ema8_previous = ema8;
                      rawData[i].ema4 = ema8;
                    } else if (macd_index > 7) {
                      ema8 = stockPriceWrapper.stockPrices[i].closePrice * (2 / (8 + 1)) + ema8_previous * (1 - 2 / (8 + 1));
                      ema8_previous = ema8_closePrices;
                      rawData[i].ema8 = ema8;
                    }

                    macd_index++;
                  } // Compute for the msi


                  var msi_index = 1;
                  var msik_days = 12;
                  var msik_lcollection = [];
                  var msik_hcollection = [];
                  var msik_lowest;
                  var msik_highest;
                  var msik_total = 0;
                  var msikp_days = 3;
                  var msikp_collection = [];
                  var msikp_total = 0;
                  var msid_days = 3;
                  var msid_collection = [];

                  for (var i = stockPriceWrapper.stockPrices.length - 1; i >= 0; i--) {
                    // k collection
                    if (msi_index <= msik_days) {
                      msik_lcollection[msi_index - 1] = stockPriceWrapper.stockPrices[i].lowPrice;
                      msik_hcollection[msi_index - 1] = stockPriceWrapper.stockPrices[i].highPrice;
                    } else {
                      for (var l = 0; l < msik_days - 1; l++) {
                        msik_lcollection[l] = msik_lcollection[l + 1];
                      }

                      for (var h = 0; h < msik_days - 1; h++) {
                        msik_hcollection[h] = msik_hcollection[h + 1];
                      }

                      msik_lcollection[msik_days - 1] = stockPriceWrapper.stockPrices[i].lowPrice;
                      msik_hcollection[msik_days - 1] = stockPriceWrapper.stockPrices[i].highPrice;
                    } // k lowest and highest


                    if (msi_index >= msik_days) {
                      for (var l = 0; l < msik_days; l++) {
                        if (l == 0) msik_lowest = msik_lcollection[l];
                        if (l > 0) if (msik_lcollection[l] < msik_lowest) msik_lowest = msik_lcollection[l];
                      }

                      for (var h = 0; h < msik_days; h++) {
                        if (h == 0) msik_highest = msik_hcollection[h];
                        if (h > 0) if (msik_hcollection[h] > msik_highest) msik_highest = msik_hcollection[h];
                      }
                    } // k value


                    if (msi_index >= msik_days) {
                      if (msik_highest - msik_lowest > 0) {
                        rawData[i].msik = 100 * ((rawData[i].closePrice - msik_lowest) / (msik_highest - msik_lowest));
                      }
                    } // kp k collection


                    if (msi_index >= msik_days && msi_index < msik_days + msikp_days) {
                      msikp_collection[msi_index - msik_days] = rawData[i].msik;
                    } else if (msi_index >= msik_days + msikp_days) {
                      for (var p = 0; p < msikp_days - 1; p++) {
                        msikp_collection[p] = msikp_collection[p + 1];
                      }

                      msikp_collection[msikp_days - 1] = rawData[i].msik;
                    } // kp value


                    if (msi_index >= msik_days + msikp_days - 1) {
                      msik_total = 0;

                      for (p = 0; p < msikp_days; p++) {
                        msik_total = msik_total + msikp_collection[p];
                      }

                      rawData[i].msikp = msik_total / msikp_days;
                    } // d kp collection


                    if (msi_index >= msik_days + msikp_days && msi_index < msik_days + msikp_days + msid_days) {
                      msid_collection[msi_index - msik_days - msikp_days] = rawData[i].msikp;
                    } else if (msi_index >= msik_days + msikp_days + msid_days) {
                      for (d = 0; d < msid_days - 1; d++) {
                        msid_collection[d] = msid_collection[d + 1];
                      }

                      msid_collection[msid_days - 1] = rawData[i].msikp;
                    } // d value


                    if (msi_index >= msik_days + msikp_days + msid_days - 1) {
                      msikp_total = 0;

                      for (d = 0; d < msid_days; d++) {
                        msikp_total = msikp_total + msid_collection[d];
                      }

                      rawData[i].msid = msikp_total / msid_days;
                    }

                    msi_index++;
                  } // ====================
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
                        seasonIndex: i + 1,
                        ema3: 0,
                        ema8: 0,
                        msik: 0,
                        msikp: 0,
                        msid: 0
                      });
                      extendedDate = new Date(extendedDate.setDate(extendedDate.getDate() + 1));
                    } else {
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
                        seasonIndex: i + 1,
                        ema3: rawData[125 - i].ema3,
                        ema8: rawData[125 - i].ema8,
                        msik: rawData[125 - i].msik,
                        msikp: rawData[125 - i].msikp,
                        msid: rawData[125 - i].msid
                      });
                    }
                  } // ================
                  // Create the chart
                  // ================


                  _this8.destroyStockChart();

                  _this8.displayChartLabel(stockPriceWrapper.exchange, stockPriceWrapper.symbol, stockPriceWrapper.symbolDescription, stockPriceWrapper.stockPrices[0].closePrice, stockPriceWrapper.stockPrices[1].closePrice);

                  _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_4__["default"]);

                  _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]); // the chart


                  var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);

                  chart.paddingRight = 20;
                  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
                  chart.responsive.enabled = true; // x axis (date category axis)

                  var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
                  dateAxis.skipEmptyPeriods = true; // volume series - [0]

                  var volumeAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                  volumeAxis.tooltip.disabled = true;
                  volumeAxis.renderer.grid.template.disabled = true;
                  volumeAxis.renderer.labels.template.disabled = true;
                  var volumeSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
                  volumeSeries.yAxis = volumeAxis;
                  volumeSeries.dataFields.valueY = "volume";
                  volumeSeries.dataFields.dateX = "quoteDate";
                  volumeSeries.columns.template.fillOpacity = .1;
                  volumeSeries.clustered = false;
                  volumeSeries.strokeWidth = 0; // price series - [1]

                  var priceAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                  priceAxis.tooltip.disabled = true;
                  priceAxis.strictMinMax = true;
                  var priceSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CandlestickSeries"]());
                  priceSeries.name = "priceSeries";
                  priceSeries.yAxis = priceAxis;
                  priceSeries.dataFields.dateX = "quoteDate";
                  priceSeries.dataFields.valueY = "closePrice";
                  priceSeries.dataFields.openValueY = "openPrice";
                  priceSeries.dataFields.lowValueY = "lowPrice";
                  priceSeries.dataFields.highValueY = "highPrice";
                  priceSeries.tooltipText = "{valueY.value}";
                  priceSeries.strokeWidth = 2; // seasonality series - [2], [3], [4-13]

                  var season10Axis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                  season10Axis.tooltip.disabled = true;
                  season10Axis.strokeWidth = 0;
                  season10Axis.renderer.grid.template.disabled = true;
                  season10Axis.renderer.labels.template.disabled = true;
                  season10Axis.strictMinMax = true;
                  var season10series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
                  season10series.name = "season10series";
                  season10series.yAxis = season10Axis;
                  season10series.dataFields.dateX = "quoteDate";
                  season10series.dataFields.valueY = "season10";
                  season10series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FFD700");
                  season10series.strokeWidth = 1;
                  season10series.tooltip.disabled = true;
                  var season5Axis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
                  season5Axis.tooltip.disabled = true;
                  season5Axis.strokeWidth = 0;
                  season5Axis.renderer.grid.template.disabled = true;
                  season5Axis.renderer.labels.template.disabled = true;
                  season5Axis.strictMinMax = true;
                  var season5series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
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
                  } // cursor


                  var chartCursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
                  chart.cursor = chartCursor; // data

                  var data = [];

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
                      "seasonIndex": plotData[251 - i].seasonIndex,
                      "ema3": plotData[251 - i].ema3,
                      "ema8": plotData[251 - i].ema8,
                      "msik": plotData[251 - i].msik,
                      "msikp": plotData[251 - i].msikp,
                      "msid": plotData[251 - i].msid
                    });
                  }

                  chart.data = data; // watermark

                  var watermark = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]();
                  watermark.text = stockPriceWrapper.exchange + ':' + stockPriceWrapper.symbol + "\n" + "[font-size: 15px]" + stockPriceWrapper.symbolDescription + "[/]";
                  watermark.fontSize = 30;
                  watermark.opacity = 0.2;
                  watermark.align = "right";
                  watermark.valign = "top";
                  chart.plotContainer.children.push(watermark); // mid guide

                  var midGuide = dateAxis.axisRanges.create();
                  midGuide.date = data[125].quoteDate;
                  midGuide.endDate = data[125].quoteDate;
                  midGuide.axisFill.strokeDasharray = "3,3";
                  midGuide.axisFill.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#FFB6C1"); // msi guide

                  /*for (var i = 1; i <= 125; i++) {
                    
                  }
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

                  dateAxis.events.on("selectionextremeschanged", function (ev) {
                    return _this8.calibratePriceAxis(ev, data, priceAxis);
                  });
                  dateAxis.events.on("selectionextremeschanged", function (ev) {
                    return _this8.calibrateSeason10Axis(ev, data, season10Axis);
                  });
                  dateAxis.events.on("selectionextremeschanged", function (ev) {
                    return _this8.calibrateSeason5Axis(ev, data, season5Axis);
                  });
                  dateAxis.events.on("selectionextremeschanged", function (ev) {
                    return _this8.calibrateSeasonYAxis(ev, data, seasonYearCount, yearAxis);
                  }); // cursor position event

                  chart.cursor.events.on("cursorpositionchanged", function (ev) {
                    return _this8.cursorPositionChanged(ev, data, closePriceYearlyData);
                  });
                  _this8._chart = chart;
                });
              } else {
                _this8.destroyStockChart();

                _this8._chartLabel.nativeElement.innerHTML = _this8.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, _this8.sanitizer.bypassSecurityTrustHtml("Symbol not found."));
              }
            });
          }
        }
      }, {
        key: "destroyStockChart",
        value: function destroyStockChart() {
          var _this9 = this;

          this.zone.runOutsideAngular(function () {
            if (_this9._chart) {
              _this9._chart.dispose();
            }
          });
        } // ================================
        // Chart events and other functions
        // ================================

      }, {
        key: "displayChartLabel",
        value: function displayChartLabel(exchange, symbol, symbolDescription, closePrice, previousClosePrice) {
          var chartLabelHtml = exchange + ':<b>' + symbol + '</b>   ' + '(' + symbolDescription + ')     ';

          if (closePrice > previousClosePrice) {
            chartLabelHtml += '<font color="palegreen" size="3"> +';
          } else if (closePrice = previousClosePrice) {
            chartLabelHtml += '<font color="gold" size="3"> ';
          } else {
            chartLabelHtml += '<font color="lightcoral" size="3"> -';
          }

          chartLabelHtml += closePrice + '</font>';
          this._chartLabel.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(chartLabelHtml));
        }
      }, {
        key: "cursorPositionChanged",
        value: function cursorPositionChanged(ev, data, closePriceYearlyData) {
          if (ev) {
            // Display chart legend header data values
            var xAxis = ev.target.chart.xAxes.getIndex(0);
            var xPosition = Math.floor(xAxis.toAxisPosition(ev.target.xPosition) * 252);
            var quoteDate = xAxis.positionToDate(xAxis.toAxisPosition(ev.target.xPosition));
            var quoteDateString = quoteDate.toLocaleDateString();
            var chartCursorDataHtml = " ";

            if (xPosition < 126) {
              chartCursorDataHtml = "<font color='gray'>Date:</font><b>" + quoteDateString + "</b>    " + "<font color='gray'>Open:</font><b>" + this.numberWithCommas(data[xPosition].openPrice) + "</b>    " + "<font color='gray'>High:</font><b>" + this.numberWithCommas(data[xPosition].highPrice) + "</b>    " + "<font color='gray'>Low:</font><b>" + this.numberWithCommas(data[xPosition].lowPrice) + "</b>    " + "<font color='gray'>Close:</font><b>" + this.numberWithCommas(data[xPosition].closePrice) + "</b>    " + "<font color='gray'>Volume:</font><b>" + this.numberWithCommas(data[xPosition].volume) + "</b>";
            }

            this._chartCursorData.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(chartCursorDataHtml)); // Display season yearly data values

            var range = parseInt(this._scannerDataValue);
            var startX = Math.floor(xAxis.toAxisPosition(ev.target.xPosition) * 252);
            var endX = startX + range;
            var direction = "UP";
            var directionUp = 0;
            var directionUpTotal = 0;
            var directionDown = 0;
            var directionDownTotal = 0;

            for (var y = 0; y < this._seasonYearCount; y++) {
              if (startX >= 0 && startX < 251) {
                var startClosePrice = closePriceYearlyData[y][startX + 1];
                var endClosePrice = closePriceYearlyData[y][endX];
                var valuePercentage = 100;

                if (endClosePrice > startClosePrice) {
                  if (startClosePrice > 0) {
                    valuePercentage = (endClosePrice - startClosePrice) / startClosePrice * 100;
                    direction = "UP";
                    directionUp++;
                    directionUpTotal += valuePercentage;
                  }
                } else {
                  if (endClosePrice > 0) {
                    valuePercentage = (startClosePrice - endClosePrice) / endClosePrice * 100;
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
                } else {
                  this._scannerDataTotalDisplay = directionDown + "/" + directionUp + " - " + (directionDownTotal / directionDown).toFixed(2) + "%";
                }
              } //msi conditions


              this._msiCondition = "";

              if (xPosition >= 0 && xPosition <= 125) {
                if (data[xPosition].msikp >= data[xPosition].msid) {
                  if (data[xPosition].msikp >= 20 && data[xPosition].msikp <= 80) {
                    this._msiCondition = "Strong";
                  }

                  if (data[xPosition].msikp > 80) {
                    this._msiCondition = "Fair";
                  }

                  if (data[xPosition].msikp < 20) {
                    this._msiCondition = "Weak";
                  }
                } else {
                  if (data[xPosition].msikp >= 20 && data[xPosition].msikp <= 80) {
                    this._msiCondition = "Strong";
                  }

                  if (data[xPosition].msikp > 80) {
                    this._msiCondition = "Weak";
                  }

                  if (data[xPosition].msikp < 20) {
                    this._msiCondition = "Fair";
                  }
                }
              } //msi trade action


              this._msiTradeAction = "Place Stop";

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp > 20 && data[xPosition].msikp < 80 && data[xPosition].ema3 > data[xPosition].ema8 && data[xPosition].closePrice > data[xPosition].ema3) {
                this._msiTradeAction = "Buy/Cover";
              }

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp > 20 && data[xPosition].msikp < 80 && data[xPosition].ema3 < data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp < 20 && data[xPosition].ema3 > data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp < 20 && data[xPosition].ema3 < data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp > 80 && data[xPosition].ema3 > data[xPosition].ema8) {
                this._msiTradeAction = "Hold/Wait";
              }

              if (data[xPosition].msikp > data[xPosition].msid && data[xPosition].msikp > 80 && data[xPosition].ema3 < data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp > 20 && data[xPosition].msikp < 80 && data[xPosition].ema3 < data[xPosition].ema8 && data[xPosition].closePrice < data[xPosition].ema3) {
                this._msiTradeAction = "Sell/Short";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp > 20 && data[xPosition].msikp < 80 && data[xPosition].ema3 > data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp < 20 && data[xPosition].ema3 < data[xPosition].ema8) {
                this._msiTradeAction = "Hold/Wait";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp < 20 && data[xPosition].ema3 > data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp > 80 && data[xPosition].ema3 < data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }

              if (data[xPosition].msikp < data[xPosition].msid && data[xPosition].msikp > 80 && data[xPosition].ema3 > data[xPosition].ema8) {
                this._msiTradeAction = "Place Stop";
              }
            }

            this.cdr.detectChanges();
          }
        }
      }, {
        key: "calibratePriceAxis",
        value: function calibratePriceAxis(ev, data, priceAxis) {
          var axis = ev.target;
          var startX = Math.floor(axis.start * 252);
          var endX = Math.floor(axis.end * 252);
          var minClosePrice = 0;
          var maxClosePrice = 0;

          for (var i = startX; i < endX; i++) {
            if (i == startX) {
              minClosePrice = parseFloat(data[i].closePrice);
              maxClosePrice = parseFloat(data[i].closePrice);
            } else {
              if (parseFloat(data[i].closePrice) < minClosePrice) minClosePrice = parseFloat(data[i].closePrice);
              if (parseFloat(data[i].closePrice) > maxClosePrice) maxClosePrice = parseFloat(data[i].closePrice);
            }
          }

          var upClosePrice = 0;
          var downClosePrice = 0;

          if (endX > 124) {
            upClosePrice = maxClosePrice - parseFloat(data[125].closePrice);
            downClosePrice = parseFloat(data[125].closePrice) - minClosePrice;

            if (upClosePrice > downClosePrice) {
              priceAxis.max = maxClosePrice;
              priceAxis.min = minClosePrice - (upClosePrice - downClosePrice);
            } else if (upClosePrice < downClosePrice) {
              priceAxis.max = maxClosePrice + (downClosePrice - upClosePrice);
              priceAxis.min = minClosePrice;
            }
          } else {
            priceAxis.max = maxClosePrice;
            priceAxis.min = minClosePrice;
          }
        }
      }, {
        key: "calibrateSeason10Axis",
        value: function calibrateSeason10Axis(ev, data, season10Axis) {
          var axis = ev.target;
          var startX = Math.floor(axis.start * 252);
          var endX = Math.floor(axis.end * 252);
          var minSeason10 = 0;
          var maxSeason10 = 0;

          for (var i = startX; i < endX; i++) {
            if (i == startX) {
              minSeason10 = parseFloat(data[i].season10);
              maxSeason10 = parseFloat(data[i].season10);
            } else {
              if (parseFloat(data[i].season10) < minSeason10) minSeason10 = parseFloat(data[i].season10);
              if (parseFloat(data[i].season10) > maxSeason10) maxSeason10 = parseFloat(data[i].season10);
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
            } else if (upSeason10 < downSeason10) {
              season10Axis.max = maxSeason10 + (downSeason10 - upSeason10);
              season10Axis.min = minSeason10;
            }
          } else {
            season10Axis.max = maxSeason10;
            season10Axis.min = minSeason10;
          }
        }
      }, {
        key: "calibrateSeason5Axis",
        value: function calibrateSeason5Axis(ev, data, season5Axis) {
          var axis = ev.target;
          var startX = Math.floor(axis.start * 252);
          var endX = Math.floor(axis.end * 252);
          var minSeason5 = 0;
          var maxSeason5 = 0;

          for (var i = startX; i < endX; i++) {
            if (i == startX) {
              minSeason5 = parseFloat(data[i].season5);
              maxSeason5 = parseFloat(data[i].season5);
            } else {
              if (parseFloat(data[i].season5) < minSeason5) minSeason5 = parseFloat(data[i].season5);
              if (parseFloat(data[i].season5) > maxSeason5) maxSeason5 = parseFloat(data[i].season5);
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
            } else if (upSeason5 < downSeason5) {
              season5Axis.max = maxSeason5 + (downSeason5 - upSeason5);
              season5Axis.min = minSeason5;
            }
          } else {
            season5Axis.max = maxSeason5;
            season5Axis.min = minSeason5;
          }
        }
      }, {
        key: "calibrateSeasonYAxis",
        value: function calibrateSeasonYAxis(ev, data, seasonYearCount, yearAxis) {
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
              } else {
                if (parseFloat(data[i]["seasonY" + y]) < minSeasonY) minSeasonY = parseFloat(data[i]["seasonY" + y]);
                if (parseFloat(data[i]["seasonY" + y]) > maxSeasonY) maxSeasonY = parseFloat(data[i]["seasonY" + y]);
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
              } else if (upSeasonY < downSeasonY) {
                yearAxis[y].max = maxSeasonY + (downSeasonY - upSeasonY);
                yearAxis[y].min = minSeasonY;
              }
            } else {
              yearAxis[y].max = maxSeasonY;
              yearAxis[y].min = minSeasonY;
            }
          }
        }
      }, {
        key: "computeMagentaChannelData",
        value: function computeMagentaChannelData(data, channel) {
          var startX = 0;
          var endX = 251;
          var channelMaxLength = 30;
          var channelLength = 0;
          var coefficient;
          var channelStartX = startX > 125 ? 125 : startX;
          var channelEndX = endX > 125 ? 125 : endX;

          if (endX > 125) {
            channelLength = 126 - startX;
          } else {
            channelLength = endX - startX;
          }

          if (channelLength > 30) {
            var countX = 0;

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

          channelLength = channelEndX - channelStartX; // define the slope

          var m = 0;

          if (endX > 125) {
            m = (parseFloat(data[125].closePrice) - parseFloat(data[channelStartX].closePrice)) / channelLength;
          } else {
            m = (parseFloat(data[channelEndX].closePrice) - parseFloat(data[channelStartX].closePrice)) / channelLength;
          } // get the intercepts


          var b = [];

          for (var i = 0; i < channelLength; i++) {
            b[i] = parseFloat(data[i + channelStartX].closePrice) - m * (i + 1);
          }

          b.sort(function (a, b) {
            return a - b;
          });
          var bMax = b[Math.floor(channelLength * .9)];
          var bMid = b[Math.floor(channelLength * .5)];
          var bMin = b[Math.floor(channelLength * .1)];
          var channelMaxdData = [{
            "date": data[channelStartX].quoteDate,
            "value": m + bMax
          }, {
            "date": data[251].quoteDate,
            "value": m * (251 - channelStartX + 1) + bMax
          }];
          var channelMidData = [{
            "date": data[channelStartX].quoteDate,
            "value": m + bMid
          }, {
            "date": data[251].quoteDate,
            "value": m * (251 - channelStartX + 1) + bMid
          }];
          var channelMinData = [{
            "date": data[channelStartX].quoteDate,
            "value": m + bMin
          }, {
            "date": data[251].quoteDate,
            "value": m * (251 - channelStartX + 1) + bMin
          }];

          if (channel == "MAX") {
            return channelMaxdData;
          } else if (channel == "MID") {
            return channelMidData;
          } else {
            return channelMinData;
          }
        } // ==============
        // Toogle methods
        // ==============

      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this._sideBarOpen = !this._sideBarOpen;
        }
      }, {
        key: "toggleSeason10",
        value: function toggleSeason10(ev) {
          if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(2).show();
          } else {
            this._chart.series.getIndex(2).hide();
          }
        }
      }, {
        key: "toggleSeason5",
        value: function toggleSeason5(ev) {
          if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(3).show();
          } else {
            this._chart.series.getIndex(3).hide();
          }
        }
      }, {
        key: "toggleVolume",
        value: function toggleVolume(ev) {
          if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(0).show();
          } else {
            this._chart.series.getIndex(0).hide();
          }
        }
      }, {
        key: "toggleSeasonY",
        value: function toggleSeasonY(ev, index) {
          if (ev.currentTarget.checked == true) {
            this._chart.series.getIndex(4 + index).show();
          } else {
            this._chart.series.getIndex(4 + index).hide();
          }
        }
      }, {
        key: "toggleMagentaChannel",
        value: function toggleMagentaChannel(ev) {
          this._chart.series.each(function (series) {
            if (series.name == "channelMaxSeries" || series.name == "channelMidSeries" || series.name == "channelMinSeries") {
              if (ev.currentTarget.checked == true) {
                series.show();
              } else {
                series.hide();
              }
            }
          });
        } // =====
        // Tools
        // =====

      }, {
        key: "numberWithCommas",
        value: function numberWithCommas(x) {
          return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
      }, {
        key: "computeDataCorrelationCoefficient",
        value: function computeDataCorrelationCoefficient(data, startX, endX) {
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
            sumOfXY = sumOfXY + X * Y;
            sumOfX2 = sumOfX2 + X * X;
            sumOfY2 = sumOfY2 + Y * Y;
          } //r = Σ (xy) / sqrt [ ( Σ x2 ) * ( Σ y2 ) ]


          return (sumOfXY - sumOfX * sumOfY / X) / Math.sqrt((sumOfX2 - sumOfX * sumOfX / X) * (sumOfY2 - sumOfY * sumOfY / X)); // Pearson
        }
      }]);

      return StockChartComponent;
    }();

    StockChartComponent.ɵfac = function StockChartComponent_Factory(t) {
      return new (t || StockChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__["StockChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    StockChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StockChartComponent,
      selectors: [["app-widget-stock-chart"]],
      viewQuery: function StockChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chartLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chartCursorData = _t.first);
        }
      },
      decls: 99,
      vars: 15,
      consts: [["fxLayout", "column", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxLayout", "row"], ["fxFlex", "25%"], ["fxLayout", "row", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxFlex", "30px", 4, "ngIf"], ["fxFlex", "100%"], [1, "my-chart-font"], ["chartLabel", ""], ["fxFlex", "75%"], ["chartCursorData", ""], ["mode", "side", 3, "opened"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%"], ["fxFlex", "30px"], ["type", "checkbox"], ["fxFlex", "140px"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "5px"], ["fxFlex", "30px", 1, "my-chart-font", 2, "text-align", "center"], ["fxFlex", "70px", 1, "my-chart-font"], ["fxFlex", "70px", 1, "my-chart-font", 2, "text-align", "right"], ["color", "#FFFFFF"], ["type", "checkbox", 3, "checked", "change"], ["fxFlex", "150px"], ["color", "#FFD700"], ["fxLayout", "row", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "10px"], ["required", "", 1, "my-chart-font", 3, "value", "valueChange"], ["class", "my-chart-font", 3, "value", 4, "ngFor", "ngForOf"], ["style", "width: 100%; margin-top:-12px;margin-bottom:-12px;", "fxLayout", "row wrap", "fxLayoutGap", "1px", 4, "ngFor", "ngForOf"], ["fxFlex", "30px", 1, "my-chart-font"], ["fxFlex", "140px", 1, "my-chart-font", 2, "text-align", "right", 3, "ngStyle"], ["color", "#80DED0"], ["color", "#FF00FF"], ["color", "gray"], ["id", "chartdiv", "fxFlex", "100%", 2, "width", "100%", "height", "550px"], [2, "background-color", "lightpink", 3, "click"], [1, "my-chart-font", 3, "value"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 2, "width", "100%", "margin-top", "-12px", "margin-bottom", "-12px"], ["fxFlex", "30px", 2, "text-align", "center"], ["fxFlex", "40px"], ["fxFlex", "100px", 2, "text-align", "right"], [1, "my-chart-font", 3, "ngStyle"]],
      template: function StockChartComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "font", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u29BF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Trade Action: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "font", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_44_listener($event) {
            return ctx.toggleSeason10($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "10-Year Seasonality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "font", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u2587");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u29BF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function StockChartComponent_Template_mat_select_valueChange_54_listener($event) {
            return ctx._scannerDataValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, StockChartComponent_mat_option_55_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, StockChartComponent_div_56_Template, 9, 6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_65_listener($event) {
            return ctx.toggleSeason5($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5-Year Seasonality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "font", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u2587");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Seasonality Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_81_listener($event) {
            return ctx.toggleMagentaChannel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Magenta Channel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "font", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u2587");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockChartComponent_Template_input_change_90_listener($event) {
            return ctx.toggleVolume($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Volume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "font", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u2587");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._seasonYear.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx._sideBarOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._msiCondition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._msiTradeAction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showSeason10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._scannerDataValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._scannerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._seasonYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx._scannerDataCountUp > ctx._scannerDataCountDown ? "palegreen" : "lightcoral"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._scannerDataTotalDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showSeason5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showMagentaChannel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx._showVolume);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      styles: ["mat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: transparent;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: transparent;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NhbXN1bmdfVDUvYW5ndWxhci9tYWdlbnRhdHJhZGVyLmNvbS9tYWdlbnRhdHJhZGVyNC9zcmMvYXBwL3NoYXJlZC93aWRnZXRzL3N0b2NrLWNoYXJ0L3N0b2NrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9zdG9jay1jaGFydC9zdG9jay1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9zdG9jay1jaGFydC9zdG9jay1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbn0iLCJtYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-widget-stock-chart',
          templateUrl: './stock-chart.component.html',
          styleUrls: ['./stock-chart.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: src_app_services_stock_chart_service__WEBPACK_IMPORTED_MODULE_6__["StockChartService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        _chartLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chartLabel']
        }],
        _chartCursorData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chartCursorData']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/Samsung_T5/angular/magentatrader.com/magentatrader4/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map