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


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-layout/main-layout.component */
    "./src/app/main-layout/main-layout.component.ts");
    /* harmony import */


    var _profile_first_config_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/first-config/step-one/step-one.component */
    "./src/app/profile/first-config/step-one/step-one.component.ts");
    /* harmony import */


    var _profile_first_config_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/first-config/step-two/step-two.component */
    "./src/app/profile/first-config/step-two/step-two.component.ts");
    /* harmony import */


    var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/sign-in/sign-in.component */
    "./src/app/auth/sign-in/sign-in.component.ts");
    /* harmony import */


    var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/sign-up/sign-up.component */
    "./src/app/auth/sign-up/sign-up.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
      children: [{
        path: 'sign-in',
        component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"]
      }, {
        path: 'sign-up',
        component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]
      }, {
        path: '**',
        redirectTo: 'sign-in'
      }]
    }, {
      path: '',
      component: _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      children: [{
        path: 'first-config/choose-themes',
        component: _profile_first_config_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_4__["FirstConfigStepOneComponent"]
      }, {
        path: 'first-config/settings',
        component: _profile_first_config_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_5__["FirstConfigStepTwoComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
      }]
    }, {
      path: '**',
      redirectTo: 'auth'
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

      this.title = 'ten-words';
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], null, null);
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/sign-in/sign-in.component */
    "./src/app/auth/sign-in/sign-in.component.ts");
    /* harmony import */


    var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth/sign-up/sign-up.component */
    "./src/app/auth/sign-up/sign-up.component.ts");
    /* harmony import */


    var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main-layout/main-layout.component */
    "./src/app/main-layout/main-layout.component.ts");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/notification/notification.component.ts");
    /* harmony import */


    var _profile_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./profile/components/settings/settings.component */
    "./src/app/profile/components/settings/settings.component.ts");
    /* harmony import */


    var _profile_components_themes_themes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./profile/components/themes/themes.component */
    "./src/app/profile/components/themes/themes.component.ts");
    /* harmony import */


    var _profile_first_config_first_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./profile/first-config/first-config.component */
    "./src/app/profile/first-config/first-config.component.ts");
    /* harmony import */


    var _profile_first_config_first_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./profile/first-config/first-config.service */
    "./src/app/profile/first-config/first-config.service.ts");
    /* harmony import */


    var _profile_first_config_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./profile/first-config/step-one/step-one.component */
    "./src/app/profile/first-config/step-one/step-one.component.ts");
    /* harmony import */


    var _profile_first_config_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./profile/first-config/step-two/step-two.component */
    "./src/app/profile/first-config/step-two/step-two.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _profile_profile_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./profile/profile.service */
    "./src/app/profile/profile.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _profile_first_config_first_config_service__WEBPACK_IMPORTED_MODULE_17__["FirstConfigService"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_21__["ProfileService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"], _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _profile_first_config_first_config_component__WEBPACK_IMPORTED_MODULE_16__["FirstConfigComponent"], _profile_first_config_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_18__["FirstConfigStepOneComponent"], _profile_first_config_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_19__["FirstConfigStepTwoComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _profile_components_themes_themes_component__WEBPACK_IMPORTED_MODULE_15__["ThemesComponent"], _profile_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"], _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _profile_first_config_first_config_component__WEBPACK_IMPORTED_MODULE_16__["FirstConfigComponent"], _profile_first_config_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_18__["FirstConfigStepOneComponent"], _profile_first_config_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_19__["FirstConfigStepTwoComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _profile_components_themes_themes_component__WEBPACK_IMPORTED_MODULE_15__["ThemesComponent"], _profile_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
          providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _profile_first_config_first_config_service__WEBPACK_IMPORTED_MODULE_17__["FirstConfigService"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_21__["ProfileService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthComponent = function AuthComponent() {
      _classCallCheck(this, AuthComponent);
    };

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)();
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 0,
      consts: [[1, "background"], [1, "container"], [1, "content"], [1, "form-container"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "10 Words");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".background[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 150px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 110px;\n  font-weight: bold;\n  font-size: 64px;\n  line-height: 75px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  margin: 32px 40px 0;\n}\n.auth-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-primary-a);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDSko7QURRQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURFQTtFQVFJLDZCQUFBO0VBQ0EsZUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuXG4uZmllbGQge1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYXV0aC1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMnB4IDQwcHggMDtcblxuICBzcGFue1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5hdXRoLWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHggNDBweCAwO1xufVxuLmF1dGgtbGluayBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.userService.tmpUser) {
            return true;
          }

          this.router.navigateByUrl('/auth');
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(userService, http, router) {
        _classCallCheck(this, AuthService);

        this.userService = userService;
        this.http = http;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(params) {
          var _this = this;

          return this.http.post('http://localhost:3000/sign-in', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
            return _this.userService.tmpUser = user;
          }));
        }
      }, {
        key: "signUp",
        value: function signUp(params) {
          var _this2 = this;

          return this.http.post('http://localhost:3000/sign-up', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
            return _this2.userService.tmpUser = user;
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.userService.tmpUser = null;
          this.router.navigateByUrl('/auth/sign-in');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/sign-in/sign-in.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
    \***************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppAuthSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(formBuilder, authService, router) {
        _classCallCheck(this, SignInComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          if (this.form.valid) {
            this.authService.signIn(this.form.value).subscribe({
              next: function next(user) {
                console.log(user);

                _this3.router.navigateByUrl('/profile');
              },
              error: function error(err) {
                console.log(err);
              }
            });
          }
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["ng-component"]],
      decls: 15,
      vars: 1,
      consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "field"], ["for", "email"], ["formControlName", "email", "id", "email", "name", "email", "placeholder", "Your email", "type", "email", "required", ""], ["for", "password"], ["formControlName", "password", "id", "password", "name", "password", "placeholder", "Your password", "type", "password", "required", ""], [1, "button", "button_primary", "button_auto_size"], [1, "auth-link"], ["routerLink", "../sign-up"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Are you not steal with us? Let\u2019s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5sZXNzIn0= */", ".background[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 150px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 110px;\n  font-weight: bold;\n  font-size: 64px;\n  line-height: 75px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  margin: 32px 40px 0;\n}\n.auth-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-primary-a);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDSko7QURRQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURFQTtFQVFJLDZCQUFBO0VBQ0EsZUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuXG4uZmllbGQge1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYXV0aC1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMnB4IDQwcHggMDtcblxuICBzcGFue1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5hdXRoLWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHggNDBweCAwO1xufVxuLmF1dGgtbGluayBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.less', '../auth.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/sign-up/sign-up.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
    \***************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(formBuilder, authService, router) {
        _classCallCheck(this, SignUpComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nickname: [''],
            birthday: ['1995-09-16']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          if (this.form.valid) {
            this.authService.signUp(this.form.value).subscribe({
              next: function next(user) {
                console.log(user);

                _this4.router.navigateByUrl('/first-config/choose-themes');
              },
              error: function error(err) {
                console.log(err);
              }
            });
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["ng-component"]],
      decls: 23,
      vars: 1,
      consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "field"], ["for", "email"], ["formControlName", "email", "id", "email", "name", "email", "placeholder", "Your email", "type", "email", "required", ""], ["for", "password"], ["formControlName", "password", "id", "password", "name", "password", "placeholder", "Your password", "type", "password", "required", ""], ["for", "nickname"], ["formControlName", "nickname", "id", "nickname", "name", "nickname", "placeholder", "Your nickname", "type", "text"], ["for", "birthday"], ["formControlName", "birthday", "id", "birthday", "name", "birthday", "type", "date"], [1, "button", "button_primary", "button_auto_size"], [1, "auth-link"], ["routerLink", "../sign-in"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nickname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Do you already have your account? Let\u2019s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5sZXNzIn0= */", ".background[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 150px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 110px;\n  font-weight: bold;\n  font-size: 64px;\n  line-height: 75px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  margin: 32px 40px 0;\n}\n.auth-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-primary-a);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDSko7QURRQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURFQTtFQVFJLDZCQUFBO0VBQ0EsZUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuXG4uZmllbGQge1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYXV0aC1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMnB4IDQwcHggMDtcblxuICBzcGFue1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5hdXRoLWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMycHggNDBweCAwO1xufVxuLmF1dGgtbGluayBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.less', '../auth.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-layout/main-layout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main-layout/main-layout.component.ts ***!
    \******************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainLayoutComponent = /*#__PURE__*/function () {
      function MainLayoutComponent(authService) {
        _classCallCheck(this, MainLayoutComponent);

        this.authService = authService;
      }

      _createClass(MainLayoutComponent, [{
        key: "onSignOut",
        value: function onSignOut() {
          this.authService.signOut();
        }
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["ng-component"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container"], [1, "header"], [1, "logo"], [1, "sign-out", 3, "click"], [1, "content"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "10 Words");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_div_click_4_listener() {
            return ctx.onSignOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 82px;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n  height: 100%;\n}\n.sign-out[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 16px;\n  line-height: 19px;\n}\n.sign-out[_ngcontent-%COMP%]:hover {\n  color: var(--color-dangerous);\n  cursor: pointer;\n  transition: color 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hGO0FES0U7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4MnB4O1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZ24tb3V0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG5cbiAgJjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2Vyb3VzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgfVxufVxuIiwiLmhlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogODJweDtcbn1cbi5sb2dvIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2lnbi1vdXQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5zaWduLW91dDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXJvdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.less']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notification/notification.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/notification/notification.component.ts ***!
    \********************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent(data) {
        _classCallCheck(this, NotificationComponent);

        this.data = data;
      }

      _createClass(NotificationComponent, [{
        key: "dismissNotification",
        value: function dismissNotification() {
          this.data.preClose();
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
      return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]));
    };

    NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationComponent,
      selectors: [["ng-component"]],
      decls: 8,
      vars: 0,
      consts: [[1, "notification-container"], ["src", "../../assets/icons/king.svg"], [1, "notification-container__text"], [1, "header"], [1, "notification-container__close", 3, "click"]],
      template: function NotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your new live has started right now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_7_listener() {
            return ctx.dismissNotification();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".notification-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 312px;\n  position: relative;\n}\n.notification-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  width: 52px;\n  height: 60px;\n}\n.notification-container__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 166px;\n}\n.notification-container__text[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.notification-container__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.notification-container__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 13px;\n  height: 13px;\n}\n.notification-container__close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.notification-container__close[_ngcontent-%COMP%]:hover::before, .notification-container__close[_ngcontent-%COMP%]:hover:after {\n  background-color: black;\n  transition: background-color 1s;\n}\n.notification-container__close[_ngcontent-%COMP%]:before, .notification-container__close[_ngcontent-%COMP%]:after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  right: 7px;\n  height: 13px;\n  width: 2px;\n  background-color: var(--color-aux-a);\n  transition: background-color 0.1s;\n}\n.notification-container__close[_ngcontent-%COMP%]:before {\n  transform: rotate(45deg);\n}\n.notification-container__close[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtBQ0ROO0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FES007O0VBRUUsdUJBQUE7RUFDQSwrQkFBQTtBQ0hSO0FET0k7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUNMTjtBRFFJO0VBQ0Usd0JBQUE7QUNOTjtBRFNJO0VBQ0UseUJBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxNjZweDtcblxuICAgICYgLmhlYWRlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAmIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAmX19jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDdweDtcbiAgICAgIGhlaWdodDogMTNweDtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdXgtYSk7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lcl9fdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxNjZweDtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyX190ZXh0IC5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm5vdGlmaWNhdGlvbi1jb250YWluZXJfX3RleHQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lcl9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lcl9fY2xvc2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lcl9fY2xvc2U6aG92ZXI6OmJlZm9yZSxcbi5ub3RpZmljYXRpb24tY29udGFpbmVyX19jbG9zZTpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xufVxuLm5vdGlmaWNhdGlvbi1jb250YWluZXJfX2Nsb3NlOmJlZm9yZSxcbi5ub3RpZmljYXRpb24tY29udGFpbmVyX19jbG9zZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA3cHg7XG4gIGhlaWdodDogMTNweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXV4LWEpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lcl9fY2xvc2U6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLm5vdGlmaWNhdGlvbi1jb250YWluZXJfX2Nsb3NlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './notification.component.html',
          styleUrls: ['./notification.component.less']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/components/settings/settings.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/profile/components/settings/settings.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppProfileComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        method_active: a0
      };
    };

    function SettingsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var method_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onMethod(method_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var method_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, method_r1.type === ctx_r0.settings.method));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](method_r1.name);
      }
    }

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(userService) {
        _classCallCheck(this, SettingsComponent);

        this.userService = userService;
        this.methods = [{
          type: 'email',
          name: 'Email notification'
        }, {
          type: 'telegram',
          name: 'Telegram Bot'
        }];
        this.user = this.userService.user;
        this.settings = {
          method: this.user.method || 'email',
          wordsAmount: this.user.wordsAmount || 5
        };
        this.settingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SettingsComponent, [{
        key: "onMethod",
        value: function onMethod(method) {
          this.settings.method = method.type;
          this.settingChange.emit(this.settings);
        }
      }, {
        key: "onChangeWordsAmount",
        value: function onChangeWordsAmount(value) {
          if (value > 0 && value <= 20) {
            this.settings.wordsAmount = value;
          } else {
            this.settings.wordsAmount = value <= 0 ? 1 : 20;
          }

          this.settingChange.emit(this.settings);
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings-form"]],
      outputs: {
        settingChange: "settingChange"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "content"], [1, "methods"], [1, "methods__inner"], ["class", "method", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "words-amount", "field"], ["for", "words-amount"], ["min", "1", "id", "words-amount", "name", "wordsAmount", "type", "number", "required", "", 3, "ngModel", "ngModelChange"], [1, "method", 3, "ngClass", "click"], [1, "method__name"], [1, "method__image"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SettingsComponent_div_3_Template, 4, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How many words?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.onChangeWordsAmount($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.methods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.settings.wordsAmount);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".content[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.methods[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-bottom: 1px solid #000000;\n  width: 100%;\n  display: block;\n  margin: 60px 0 14px;\n}\n.methods__inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.method[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.method_active[_ngcontent-%COMP%]   .method__name[_ngcontent-%COMP%] {\n  color: var(--color-primary-a);\n}\n.method_active[_ngcontent-%COMP%]   .method__image[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-primary-a);\n  background-color: white;\n  box-shadow: 0px 4px 16px var(--color-aux-a);\n}\n.method__name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 21px;\n  margin-bottom: 14px;\n}\n.method__image[_ngcontent-%COMP%] {\n  background: rgba(233, 233, 233, 0.28);\n  border: 1px solid #E5E5E5;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 224px;\n  height: 300px;\n}\n.words-amount[_ngcontent-%COMP%] {\n  width: 224px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9maWxlL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURJRTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDSEo7QURTRTtFQUNFLGVBQUE7QUNQSjtBRFVFO0VBRUksNkJBQUE7QUNUTjtBRE9FO0VBTUksd0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FDVk47QURjRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0FDYko7QURnQkU7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FDZko7QURtQkE7RUFDRSxZQUFBO0FDakJGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5tZXRob2RzIHtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNjBweCAwIDE0cHg7XG4gIH1cblxuICAmX19pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cblxuLm1ldGhvZCB7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJl9hY3RpdmUge1xuICAgIC5tZXRob2RfX25hbWUge1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gICAgfVxuXG4gICAgLm1ldGhvZF9faW1hZ2Uge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS1hKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNnB4IHZhcigtLWNvbG9yLWF1eC1hKTtcbiAgICB9XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICB9XG5cbiAgJl9faW1hZ2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC4yOCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIHdpZHRoOiAyMjRweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5cbi53b3Jkcy1hbW91bnQge1xuICB3aWR0aDogMjI0cHg7XG59XG4iLCIuY29udGVudCB7XG4gIHdpZHRoOiA2MDBweDtcbn1cbi5tZXRob2RzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2MHB4IDAgMTRweDtcbn1cbi5tZXRob2RzX19pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tZXRob2Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWV0aG9kX2FjdGl2ZSAubWV0aG9kX19uYW1lIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG59XG4ubWV0aG9kX2FjdGl2ZSAubWV0aG9kX19pbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggdmFyKC0tY29sb3ItYXV4LWEpO1xufVxuLm1ldGhvZF9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4ubWV0aG9kX19pbWFnZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC4yOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDIyNHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLndvcmRzLWFtb3VudCB7XG4gIHdpZHRoOiAyMjRweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings-form',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.less']
        }]
      }], function () {
        return [{
          type: src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, {
        settingChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/components/themes/themes.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/profile/components/themes/themes.component.ts ***!
    \***************************************************************/

  /*! exports provided: ThemesComponent */

  /***/
  function srcAppProfileComponentsThemesThemesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemesComponent", function () {
      return ThemesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_profile_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/profile/profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        theme_active: a0
      };
    };

    function ThemesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemesComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var theme_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onThemeClick(theme_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theme_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, theme_r1.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r1.name);
      }
    }

    var ThemesComponent = /*#__PURE__*/function () {
      function ThemesComponent(profileService) {
        var _this5 = this;

        _classCallCheck(this, ThemesComponent);

        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themes = [];
        profileService.getThemes().subscribe({
          next: function next(themes) {
            _this5.themes = themes;
          }
        });
      }

      _createClass(ThemesComponent, [{
        key: "onThemeClick",
        value: function onThemeClick(id) {
          var foundTheme = this.themes.find(function (theme) {
            return theme.id === id;
          });
          foundTheme.isActive = !foundTheme.isActive;
          this.themeChange.emit(this.themes.filter(function (theme) {
            return theme.isActive;
          }));
        }
      }]);

      return ThemesComponent;
    }();

    ThemesComponent.ɵfac = function ThemesComponent_Factory(t) {
      return new (t || ThemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_profile_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
    };

    ThemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThemesComponent,
      selectors: [["app-themes-form"]],
      outputs: {
        themeChange: "themeChange"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "themes"], ["class", "theme", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "theme", 3, "ngClass", "click"], [1, "theme__line"]],
      template: function ThemesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThemesComponent_div_1_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".themes[_ngcontent-%COMP%] {\n  width: 690px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 60px;\n}\n.theme[_ngcontent-%COMP%] {\n  background-color: rgba(76, 197, 155, 0.3);\n  transition: background-color 0.2s linear;\n  width: 140px;\n  height: 140px;\n  margin-bottom: 42px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.theme[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--color-primary-a);\n  transition: background-color 0.2s linear;\n}\n.theme_active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-a);\n}\n.theme__line[_ngcontent-%COMP%] {\n  background: #C4C4C4;\n  height: 50px;\n  width: 100%;\n  line-height: 50px;\n  vertical-align: middle;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL3RoZW1lcy90aGVtZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy90aGVtZXMvdGhlbWVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSx5Q0FBQTtFQUNBLHdDQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRElFO0VBQ0UsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNGSjtBREtFO0VBQ0Usd0NBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NvbXBvbmVudHMvdGhlbWVzL3RoZW1lcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZXMge1xuICB3aWR0aDogNjkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4udGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxOTcsIDE1NSwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO1xuXG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO1xuICB9XG5cbiAgJl9hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1hKTtcbiAgfVxuXG4gICZfX2xpbmUge1xuICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cbiIsIi50aGVtZXMge1xuICB3aWR0aDogNjkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTk3LCAxNTUsIDAuMyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRoZW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWEpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xufVxuLnRoZW1lX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYSk7XG59XG4udGhlbWVfX2xpbmUge1xuICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-themes-form',
          templateUrl: './themes.component.html',
          styleUrls: ['./themes.component.less']
        }]
      }], function () {
        return [{
          type: src_app_profile_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }];
      }, {
        themeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/first-config/first-config.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/profile/first-config/first-config.component.ts ***!
    \****************************************************************/

  /*! exports provided: FirstConfigComponent */

  /***/
  function srcAppProfileFirstConfigFirstConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstConfigComponent", function () {
      return FirstConfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FirstConfigComponent = function FirstConfigComponent() {
      _classCallCheck(this, FirstConfigComponent);
    };

    FirstConfigComponent.ɵfac = function FirstConfigComponent_Factory(t) {
      return new (t || FirstConfigComponent)();
    };

    FirstConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstConfigComponent,
      selectors: [["ng-component"]],
      decls: 0,
      vars: 0,
      template: function FirstConfigComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZmlyc3QtY29uZmlnL2ZpcnN0LWNvbmZpZy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './first-config.component.html',
          styleUrls: ['./first-config.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/first-config/first-config.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/profile/first-config/first-config.service.ts ***!
    \**************************************************************/

  /*! exports provided: FirstConfigService */

  /***/
  function srcAppProfileFirstConfigFirstConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstConfigService", function () {
      return FirstConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FirstConfigService = function FirstConfigService() {
      _classCallCheck(this, FirstConfigService);

      this.data = {
        themes: [],
        method: 'email'
      };
    };

    FirstConfigService.ɵfac = function FirstConfigService_Factory(t) {
      return new (t || FirstConfigService)();
    };

    FirstConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FirstConfigService,
      factory: FirstConfigService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/first-config/step-one/step-one.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/first-config/step-one/step-one.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FirstConfigStepOneComponent */

  /***/
  function srcAppProfileFirstConfigStepOneStepOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstConfigStepOneComponent", function () {
      return FirstConfigStepOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _first_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../first-config.service */
    "./src/app/profile/first-config/first-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_themes_themes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/themes/themes.component */
    "./src/app/profile/components/themes/themes.component.ts");

    var FirstConfigStepOneComponent = /*#__PURE__*/function () {
      function FirstConfigStepOneComponent(firstConfigService, router) {
        _classCallCheck(this, FirstConfigStepOneComponent);

        this.firstConfigService = firstConfigService;
        this.router = router;
        this.themes = [];
      }

      _createClass(FirstConfigStepOneComponent, [{
        key: "onThemeChange",
        value: function onThemeChange(themes) {
          this.themes = themes;
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this.firstConfigService.data.themes = this.themes.map(function (theme) {
            return theme.id;
          });
          console.log(this.firstConfigService.data);

          if (this.firstConfigService.data.themes.length !== 0) {
            this.router.navigateByUrl('first-config/settings');
          }
        }
      }]);

      return FirstConfigStepOneComponent;
    }();

    FirstConfigStepOneComponent.ɵfac = function FirstConfigStepOneComponent_Factory(t) {
      return new (t || FirstConfigStepOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_first_config_service__WEBPACK_IMPORTED_MODULE_1__["FirstConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    FirstConfigStepOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstConfigStepOneComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 0,
      consts: [[1, "step-one"], [1, "title"], [1, "title-subtext"], [1, "step-one__container"], [3, "themeChange"], ["type", "button", 1, "button", "button_primary", 3, "click"]],
      template: function FirstConfigStepOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "These themes will be used to create your own set of words for learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-themes-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("themeChange", function FirstConfigStepOneComponent_Template_app_themes_form_themeChange_6_listener($event) {
            return ctx.onThemeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstConfigStepOneComponent_Template_button_click_7_listener() {
            return ctx.onNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_themes_themes_component__WEBPACK_IMPORTED_MODULE_3__["ThemesComponent"]],
      styles: [".button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n}\n.step-one__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9maXJzdC1jb25maWcvc3RlcC1vbmUvc3RlcC1vbmUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZmlyc3QtY29uZmlnL3N0ZXAtb25lL3N0ZXAtb25lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9maXJzdC1jb25maWcvc3RlcC1vbmUvc3RlcC1vbmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RlcC1vbmUge1xuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uc3RlcC1vbmVfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstConfigStepOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './step-one.component.html',
          styleUrls: ['./step-one.component.less']
        }]
      }], function () {
        return [{
          type: _first_config_service__WEBPACK_IMPORTED_MODULE_1__["FirstConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/first-config/step-two/step-two.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/first-config/step-two/step-two.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FirstConfigStepTwoComponent */

  /***/
  function srcAppProfileFirstConfigStepTwoStepTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstConfigStepTwoComponent", function () {
      return FirstConfigStepTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/notification/notification.component */
    "./src/app/notification/notification.component.ts");
    /* harmony import */


    var src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _first_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../first-config.service */
    "./src/app/profile/first-config/first-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/settings/settings.component */
    "./src/app/profile/components/settings/settings.component.ts");

    var FirstConfigStepTwoComponent = /*#__PURE__*/function () {
      function FirstConfigStepTwoComponent(userService, firstConfigService, router, snackBar) {
        _classCallCheck(this, FirstConfigStepTwoComponent);

        this.userService = userService;
        this.firstConfigService = firstConfigService;
        this.router = router;
        this.snackBar = snackBar;
        this.data = {
          themes: this.firstConfigService.data.themes
        };

        if (this.data.themes.length === 0) {
          this.router.navigateByUrl('/first-config/choose-themes');
        }
      }

      _createClass(FirstConfigStepTwoComponent, [{
        key: "onSettingsChange",
        value: function onSettingsChange(settings) {
          this.data = Object.assign(Object.assign({}, this.data), settings);
        }
      }, {
        key: "onStart",
        value: function onStart() {
          var _this6 = this;

          this.userService.update({
            data: this.data
          }).subscribe({
            next: function next(result) {
              console.log(result);

              _this6.router.navigateByUrl('/profile').then(function () {
                _this6.snackBar.openFromComponent(src_app_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"], {
                  duration: 1000000,
                  verticalPosition: 'top',
                  horizontalPosition: 'end',
                  data: {
                    preClose: function preClose() {
                      _this6.snackBar.dismiss();
                    }
                  }
                });
              });
            }
          });
        }
      }]);

      return FirstConfigStepTwoComponent;
    }();

    FirstConfigStepTwoComponent.ɵfac = function FirstConfigStepTwoComponent_Factory(t) {
      return new (t || FirstConfigStepTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_first_config_service__WEBPACK_IMPORTED_MODULE_3__["FirstConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    FirstConfigStepTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstConfigStepTwoComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 0,
      consts: [[1, "step-two"], [1, "title"], [1, "title-subtext"], [1, "step-two__container"], [3, "settingChange"], ["type", "button", 1, "button", "button_primary", 3, "click"]],
      template: function FirstConfigStepTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Way to get words");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Set where and how often you want to get words for learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-settings-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("settingChange", function FirstConfigStepTwoComponent_Template_app_settings_form_settingChange_6_listener($event) {
            return ctx.onSettingsChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstConfigStepTwoComponent_Template_button_click_7_listener() {
            return ctx.onStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]],
      styles: [".button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n}\n.step-two__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9maXJzdC1jb25maWcvc3RlcC10d28vc3RlcC10d28uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZmlyc3QtY29uZmlnL3N0ZXAtdHdvL3N0ZXAtdHdvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9maXJzdC1jb25maWcvc3RlcC10d28vc3RlcC10d28uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGVwLXR3byB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5zdGVwLXR3b19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstConfigStepTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './step-two.component.html',
          styleUrls: ['./step-two.component.less']
        }]
      }], function () {
        return [{
          type: src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _first_config_service__WEBPACK_IMPORTED_MODULE_3__["FirstConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_themes_themes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/themes/themes.component */
    "./src/app/profile/components/themes/themes.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/profile/components/settings/settings.component.ts");

    function ProfileComponent_app_themes_form_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-themes-form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("themeChange", function ProfileComponent_app_themes_form_7_Template_app_themes_form_themeChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onChangeData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_app_settings_form_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings-form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("settingChange", function ProfileComponent_app_settings_form_8_Template_app_settings_form_settingChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onChangeData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "profile-menu__item_active": a0
      };
    };

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(userService) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this.activeTab = 'themes';
        this.isButtonVisible = false;
        this.data = {};
      }

      _createClass(ProfileComponent, [{
        key: "onChangeData",
        value: function onChangeData(data) {
          if (Array.isArray(data)) {
            data = {
              themes: data.map(function (theme) {
                return theme.id;
              })
            };
          }

          this.data = Object.assign(Object.assign({}, this.data), data);
          this.userService.tmpUser = Object.assign(Object.assign({}, this.userService.tmpUser), this.data);
          this.isButtonVisible = true;
        }
      }, {
        key: "setActiveTab",
        value: function setActiveTab(activeTab) {
          this.activeTab = activeTab;
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this7 = this;

          this.userService.update({
            data: this.data
          }).subscribe({
            next: function next(user) {
              console.log(user);
              _this7.isButtonVisible = false;
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["ng-component"]],
      decls: 10,
      vars: 10,
      consts: [[1, "profile"], [1, "profile-menu"], [1, "profile-menu__item", 3, "ngClass", "click"], [1, "profile__container", 3, "ngSwitch"], [3, "themeChange", 4, "ngSwitchCase"], [3, "settingChange", 4, "ngSwitchCase"], ["class", "button button_primary", 3, "click", 4, "ngIf"], [3, "themeChange"], [3, "settingChange"], [1, "button", "button_primary", 3, "click"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_2_listener() {
            return ctx.setActiveTab("themes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_4_listener() {
            return ctx.setActiveTab("settings");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_app_themes_form_7_Template, 1, 0, "app-themes-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_app_settings_form_8_Template, 1, 0, "app-settings-form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_button_9_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.activeTab === "themes"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.activeTab === "settings"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.activeTab);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_themes_themes_component__WEBPACK_IMPORTED_MODULE_3__["ThemesComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
      styles: [".profile[_ngcontent-%COMP%] {\n  width: 690px;\n  margin: 0 auto;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid black;\n  margin-bottom: 60px;\n}\n.profile-menu__item[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  font-size: 20px;\n  line-height: 23px;\n  cursor: pointer;\n  padding: 0 6px 8px;\n}\n.profile-menu__item_active[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #000000;\n  font-weight: bold;\n}\n.profile__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXl6aWsvd29yay9wcm9qZWN0cy90ZW4td29yZHMvdGVuLXdvcmRzLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ007RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FETUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcbiAgd2lkdGg6IDY5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAmLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMCA2cHggOHB4O1xuXG4gICAgICAmX2FjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiIsIi5wcm9maWxlIHtcbiAgd2lkdGg6IDY5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wcm9maWxlLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4ucHJvZmlsZS1tZW51X19pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgNnB4IDhweDtcbn1cbi5wcm9maWxlLW1lbnVfX2l0ZW1fYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2ZpbGVfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.less']
        }]
      }], function () {
        return [{
          type: _providers_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.service.ts":
  /*!********************************************!*\
    !*** ./src/app/profile/profile.service.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../providers/user.service */
    "./src/app/providers/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(userService, http) {
        _classCallCheck(this, ProfileService);

        this.userService = userService;
        this.http = http;
      }

      _createClass(ProfileService, [{
        key: "getThemes",
        value: function getThemes() {
          var user = this.userService.user;
          return this.http.get('http://localhost:3000/themes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (themes) {
            return themes.map(function (theme) {
              return Object.assign(Object.assign({}, theme), {
                isActive: user.themes.includes(theme.id)
              });
            });
          }));
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/providers/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppProvidersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      } // public tmpUser;


      _createClass(UserService, [{
        key: "update",
        value: function update(params) {
          var _this8 = this;

          return this.http.put('http://localhost:3000/user', params.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
            return _this8.tmpUser = user;
          }));
        }
      }, {
        key: "user",
        get: function get() {
          return this.tmpUser;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
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
    /*! /Users/rayzik/work/projects/ten-words/ten-words-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map