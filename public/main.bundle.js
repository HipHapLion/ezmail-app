webpackJsonp([1,4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/validate.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(540),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component_dashboard_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mail_view_mail_view_mail_view_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mail_view_sidebar_sidebar_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__compose_compose_component_compose_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_account_user_account_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















// import 
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mail-view', component: __WEBPACK_IMPORTED_MODULE_12__mail_view_mail_view_mail_view_component__["a" /* MailViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'compose', component: __WEBPACK_IMPORTED_MODULE_14__compose_compose_component_compose_component__["a" /* ComposeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user-account', component: __WEBPACK_IMPORTED_MODULE_15__components_user_account_user_account_component__["a" /* UserAccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mail_view_mail_view_mail_view_component__["a" /* MailViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mail_view_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__compose_compose_component_compose_component__["a" /* ComposeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_account_user_account_component__["a" /* UserAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(541),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/home.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessages.show("You are now logged in.", { cssClass: "alert-success", timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: "alert-danger", timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(542),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/login.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show("You are logged out.", { cssClass: "alert-success", timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(543),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields.", { cssClass: "alert-danger", timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please enter a valid email.", { cssClass: "alert-danger", timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered.", { cssClass: "alert-success", timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Oops! something went wrong.", { cssClass: "alert-danger", timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(544),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/register.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAccountComponent = (function () {
    function UserAccountComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UserAccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(545),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], UserAccountComponent);
    return UserAccountComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/user-account.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComposeComponent = (function () {
    function ComposeComponent() {
    }
    ComposeComponent.prototype.ngOnInit = function () {
    };
    ComposeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compose',
            template: __webpack_require__(546),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [])
    ], ComposeComponent);
    return ComposeComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/compose.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(547),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailViewComponent = (function () {
    function MailViewComponent() {
    }
    MailViewComponent.prototype.ngOnInit = function () {
    };
    MailViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail-view',
            template: __webpack_require__(548),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], MailViewComponent);
    return MailViewComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/mail-view.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(549),
            styles: [__webpack_require__(534)]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/sidebar.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/environment.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "#profile {\n  padding-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".row {\n  margin-right: 0px; }\n\n.navbar {\n  margin-top: -22px; }\n\n.card .container {\n  width: inherit; }\n  .card .container hr {\n    width: 95%;\n    margin-left: 0px; }\n\n.card p {\n  padding: 0px 16px;\n  padding-bottom: 15px;\n  word-break: inherit; }\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "body, html {\n  height: 100%; }\n\n.navbar {\n  margin-top: -22px; }\n\nnav.sidebar, .main {\n  -webkit-transition: margin 200ms ease-out;\n  transition: margin 200ms ease-out; }\n\n.main {\n  padding: 10px 10px 0 10px; }\n\n@media (min-width: 765px) {\n  .main {\n    position: absolute;\n    width: calc(100% - 40px);\n    margin-left: 40px;\n    float: right; }\n  nav.sidebar:hover + .main {\n    margin-left: 200px; }\n  nav.sidebar.navbar.sidebar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n    margin-left: 0px; }\n  nav.sidebar .navbar-brand, nav.sidebar .navbar-header {\n    text-align: center;\n    width: 100%;\n    margin-left: 0px; }\n  nav.sidebar a {\n    padding-right: 13px; }\n  nav.sidebar .navbar-nav > li:first-child {\n    border-top: 1px #e5e5e5 solid; }\n  nav.sidebar .navbar-nav > li {\n    border-bottom: 1px #e5e5e5 solid; }\n  nav.sidebar .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none; }\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid {\n    padding: 0 0px 0 0px; }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #777; }\n  nav.sidebar {\n    width: 200px;\n    height: 580px;\n    margin-left: -160px;\n    float: left;\n    margin-bottom: 0px; }\n  nav.sidebar li {\n    width: 100%; }\n  nav.sidebar:hover {\n    margin-left: 0px; }\n  .forAnimate {\n    opacity: 0; } }\n\n@media (min-width: 1330px) {\n  .main {\n    width: calc(100% - 200px);\n    margin-left: 200px; }\n  nav.sidebar {\n    margin-left: 0px;\n    float: left; }\n  nav.sidebar .forAnimate {\n    opacity: 1; } }\n\nnav.sidebar .navbar-nav .open .dropdown-menu > li > a:hover, nav.sidebar .navbar-nav .open .dropdown-menu > li > a:focus {\n  color: #CCC;\n  background-color: transparent; }\n\nnav:hover .forAnimate {\n  opacity: 1; }\n\nsection {\n  padding-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h1>EZ Mail App</h1>\n    <p class=\"lead\">Emailing has never been easier..</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h1>Secure API</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Angular 2 front-end</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Secure API</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Login</h2>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  </form>\n</div>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Ez Mail</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/']\">Home</a>\n        </li>\n      </ul>\n      <!--navbar right-->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/dashboard']\" >Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/compose']\" >New Mail</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/user-account']\">User Account</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\" >Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\" >Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n</div>"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li role=\"presentation\" class=\"active\"><a href=\"#profile\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Profile</a></li>\n      <li role=\"presentation\"><a href=\"#settings\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Settings</a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"profile\">\n        <div *ngIf=\"user\" ngrole=\"tabpanel\" class=\"tab-pane active\" id=\"profile\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">User Name</label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ user.username }}\" id=\"exampleInputEmail1\" placeholder=\"username\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Full Name</label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ user.name }}\" id=\"exampleInputEmail1\" placeholder=\"Full Name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" value=\"{{ user.email }}\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Change Current Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"New Password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </form>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"settings\">\n        <label for=\"\">Settings</label>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-12 col-sm-11 main\" style=\"min-height: 1246px;\">\n        <div class=\"row inbox\">\n            <div class=\"col-md-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body inbox-menu\">\n                        <a href=\"page-inbox-compose.html\" class=\"btn btn-danger btn-block\">New Email</a>\n                        <ul>\n                            <li>\n                                <a href=\"page-inbox.html\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"label label-danger\">4</span></a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\"><i class=\"fa fa-star\"></i> Stared</a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"label label-info\">5</span></a>\n                            </li>\n                            <li class=\"title\">\n                                Labels\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\">Home <span class=\"label label-danger\"></span></a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\">Job <span class=\"label label-info\"></span></a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\">Clients <span class=\"label label-success\"></span></a>\n                            </li>\n                            <li>\n                                <a href=\"page-inbox-compose.html#\">News <span class=\"label label-warning\"></span></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body contacts\">\n                        <a href=\"page-inbox-compose.html#\" class=\"btn btn-success btn-block\"> + Contact</a>\n                        <ul>\n                            <li><span class=\"label label-danger\"></span> Adam Alister</li>\n                            <li><span class=\"label label-default\"></span> Alphonse Ivo</li>\n                            <li><span class=\"label label-success\"></span> Anton Phunihel</li>\n                            <li><span class=\"label label-success\"></span> Ajith Hristijan</li>\n                            <li><span class=\"label label-warning\"></span> Bao Gaspar</li>\n                            <li><span class=\"label label-default\"></span> Bernhard Shelah</li>\n                            <li><span class=\"label label-success\"></span> Bünyamin Kasper</li>\n                            <li><span class=\"label label-danger\"></span> Carlito Roffe</li>\n                            <li><span class=\"label label-danger\"></span> Chidubem Gottlob</li>\n                            <li><span class=\"label label-warning\"></span> Dederick Mihail</li>\n                            <li><span class=\"label label-success\"></span> Felice Arseniy</li>\n                            <li><span class=\"label label-default\"></span> Grahame Miodrag</li>\n                            <li><span class=\"label label-default\"></span> Hristofor Sergio</li>\n                            <li><span class=\"label label-danger\"></span> Scottie Maximilian</li>\n                            <li><span class=\"label label-danger\"></span> Sullivan Robert</li>\n                            <li><span class=\"label label-danger\"></span> Thancmar Theophanes</li>\n                            <li><span class=\"label label-warning\"></span> Tullio Luka</li>\n                            <li><span class=\"label label-success\"></span> Walerian Khwaja</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!--/.col-->\n            <div class=\"col-md-9\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body message\">\n                        <p class=\"text-center\">New Message</p>\n                        <form class=\"form-horizontal\" role=\"form\">\n                            <div class=\"form-group\">\n                                <label for=\"to\" class=\"col-sm-1 control-label\">To:</label>\n                                <div class=\"col-sm-11\">\n\n                                    <input type=\"email\" class=\"form-control select2-offscreen\" id=\"to\" placeholder=\"Type email\" tabindex=\"-1\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"cc\" class=\"col-sm-1 control-label\">CC:</label>\n                                <div class=\"col-sm-11\">\n\n                                    <input type=\"email\" class=\"form-control select2-offscreen\" id=\"cc\" placeholder=\"Type email\" tabindex=\"-1\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"bcc\" class=\"col-sm-1 control-label\">FROM:</label>\n                                <div class=\"col-sm-11\">\n\n                                    <input type=\"email\" class=\"form-control select2-offscreen\" id=\"bcc\" placeholder=\"NP130@hw.ac.uk\" tabindex=\"-1\">\n                                </div>\n                            </div>\n                        </form>\n                        <div class=\"col-xs-12 col-sm-offset-1\">\n                            <div class=\"btn-toolbar\" role=\"toolbar\">\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-bold\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-italic\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-underline\"></span></button>\n                                </div>\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-align-left\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-align-right\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-align-center\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-align-justify\"></span></button>\n                                </div>\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-list-ul\"></span></button>\n                                    <button class=\"btn btn-default\"><span class=\"fa fa-list-ol\"></span></button>\n                                </div>\n                                <button class=\"btn btn-default\"><span class=\"fa fa-trash-o\"></span></button>\n                                <button class=\"btn btn-default\"><span class=\"fa fa-paperclip\"></span></button>\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"fa fa-tags\"></span> <span class=\"caret\"></span></button>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a href=\"page-inbox-compose.html#\">add label <span class=\"label label-danger\"> Home</span></a></li>\n                                        <li><a href=\"page-inbox-compose.html#\">add label <span class=\"label label-info\">Job</span></a></li>\n                                        <li><a href=\"page-inbox-compose.html#\">add label <span class=\"label label-success\">Clients</span></a></li>\n                                        <li><a href=\"page-inbox-compose.html#\">add label <span class=\"label label-warning\">News</span></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <br>\n                            <div class=\"form-group\">\n                                <textarea class=\"col-md-11 form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\" style=\" width: 710px\"></textarea>\n                            </div>\n                            <br style=\"padding-top: 20px\">\n                            <div class=\"form-group\">\n\n                                <button type=\"submit\" class=\"btn btn-success\">Send</button>\n                                <button type=\"submit\" class=\"btn btn-default\">Draft</button>\n                                <button type=\"submit\" class=\"btn btn-danger\">Discard</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\"><strong>Dashboard</strong></h2>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-danger\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-google fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">26</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Gmail</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6\">\n\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-yahoo fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">263</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Yahoo</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-envelope fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">2</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"/mail-view\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Uni Mail</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"col-md-9\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-plus-square fa-5x \"></i>\n                                </div>\n\n                            </div>\n                        </div>\n                        <a href=\"#\">\n                            <div class=\"panel-footer\">\n                                <span class=\"pull-left \">Add Email Account</span>\n                                <!--<span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                       -->\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n        <h2 class=\"page-header\">\n            <strong>Group</strong></h2>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-users fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\">2</div>\n                                    <div>View Group Emails</div>\n                                </div>\n                            </div>\n                        </div>\n                        <a href=\"#\">\n                            <div class=\"panel-footer\">\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-briefcase fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\">2</div>\n                                    <div>View Work Emails!</div>\n                                </div>\n                            </div>\n                        </div>\n                        <a href=\"#\">\n                            <div class=\"panel-footer\">\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"col-md-9\">\n                        <div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"text-center\">\n                                        <i class=\"fa fa-plus-square fa-5x \"></i>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <a href=\"#\">\n                                <div class=\"panel-footer\">\n                                    <span class=\"pull-left \">Add new group</span>\n                                    <!--<span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                       -->\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"row\">\n  <div class=\"col-lg-10 mailList\">\n    <div class=\"card\">\n      <div class=\"container\">\n        <h4>\n          <b>Subject: Demo timings.</b>\n        </h4>\n        <h6>From: Talal Sheikh</h6>\n        <hr>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor explicabo quam deserunt beatae, quaerat. Atque expedita\n        totam voluptate alias repudiandae optio explicabo quia soluta distinctio laborum, velit odio quasi, laboriosam.</p>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"container\">\n        <h4>\n          Subject: Project Update\n        </h4>\n        <h6>From: Roshan Sureen</h6>\n        <hr>\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor explicabo quam deserunt beatae, quaerat. Atque expedita\n        totam voluptate alias repudiandae optio explicabo quia soluta distinctio laborum, velit odio quasi, laboriosam.</p>\n    </div>\n\n    <div class=\"card\" >\n        <div class=\"container\">\n          <h4>Subject: Demo timings.</h4>\n          <h6>From: Talal Sheikh</h6>\n          <hr>\n        </div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor explicabo quam deserunt beatae, quaerat.\n             Atque expedita totam voluptate alias repudiandae optio explicabo quia soluta distinctio laborum,\n              velit odio quasi, laboriosam.</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default sidebar\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a href=\"#mail-collapse\" data-toggle=\"collapse\">\n            <i class=\"pull-right fa fa-envelope-o\" aria-hidden=\"true\"></i>Uni Mail</a>\n\n          <ul class=\"collapse list-group\" id=\"mail-collapse\">\n            <li class=\"list-group-item\">\n              <span class=\"badge\">14</span>Inbox\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"badge\">2</span> Read\n            </li>\n            <li class=\"list-group-item\">\n              <span class=\"badge\">1</span> Important\n            </li>\n          </ul>\n\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            Address book\n            <span class=\"caret\"></span>\n          <span style=\"font-size:16px;\" class=\"pull-right fa fa-address-book-o\"></span>\n          </a>\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n            <li><a href=\"#\">Roshan Sureen</a></li>\n            <li><a href=\"#\">Maryam Abu</a></li>\n            <li><a href=\"#\">Grigor Davtyan</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Professor</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Others</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        // return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(res => res.json());
        return this.http.post('/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        // return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(res => res.json());
        return this.http.post('/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Tpye', 'application/json');
        // return this.http.get('http://localhost:3000/users/profile', { headers: headers }).map(res => res.json());
        return this.http.get('/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/nomad/Documents/Sem2/NA/ezmail-app/angular-src/src/auth.service.js.map

/***/ })

},[576]);
//# sourceMappingURL=main.bundle.js.map