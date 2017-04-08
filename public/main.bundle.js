webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.currentAccount = 0;
    }
    EmailService.prototype.setAccount = function (val) {
        this.currentAccount = val;
    };
    EmailService.prototype.getAccount = function () {
        return this.currentAccount;
    };
    EmailService.prototype.sendEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/emails/send', email, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/emails/send', email, { headers: headers }).map(res => res.json());
    };
    EmailService.prototype.getEmails = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/emails/list', account, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/emails/list', account, { headers: headers }).map(res => res.json());
    };
    EmailService.prototype.getContent = function (info) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/emails/read', info, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/emails/read', info, { headers: headers }).map(res => res.json());
    };
    EmailService.prototype.deleteMail = function (info) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/emails/delete', info, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/emails/delete', info, { headers: headers }).map(res => res.json());
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/email.service.js.map

/***/ }),

/***/ 210:
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
    ValidateService.prototype.validateCompose = function (email) {
        if (email.sender == undefined || email.recpt == undefined || email.message == undefined || email.sub == undefined) {
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
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/validate.service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(252);
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
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/users/register', user, { headers: headers }).map(res => res.json());
    };
    AuthService.prototype.addAccount = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/users/addAccount', account, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/users/addAccount', user, { headers: headers }).map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Tpye', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('/users/authenticate', user, { headers: headers }).map(res => res.json());
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Tpye', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('/users/profile', { headers: headers }).map(res => res.json());
    };
    AuthService.prototype.storeUserData = function (token) {
        localStorage.setItem('id_token', token);
        this.authToken = token;
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
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/auth.service.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 544;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(674);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/main.js.map

/***/ }),

/***/ 661:
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
            template: __webpack_require__(770),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/app.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component_dashboard_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mail_view_mail_view_mail_view_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__compose_compose_component_compose_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_account_user_account_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_email_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_overview_overview_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__ = __webpack_require__(663);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_21__components_overview_overview_component__["a" /* OverviewComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mail-view', component: __WEBPACK_IMPORTED_MODULE_14__mail_view_mail_view_mail_view_component__["a" /* MailViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'compose', component: __WEBPACK_IMPORTED_MODULE_15__compose_compose_component_compose_component__["a" /* ComposeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user-account', component: __WEBPACK_IMPORTED_MODULE_16__components_user_account_user_account_component__["a" /* UserAccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mail_view_mail_view_mail_view_component__["a" /* MailViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__compose_compose_component_compose_component__["a" /* ComposeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_account_user_account_component__["a" /* UserAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_email_service__["a" /* EmailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/app.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(771),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/footer.component.js.map

/***/ }),

/***/ 664:
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
            template: __webpack_require__(772),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/home.component.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(59);
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
                _this.authService.storeUserData(data.token);
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
            template: __webpack_require__(773),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/login.component.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(59);
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
            template: __webpack_require__(774),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(775),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewComponent);
    return OverviewComponent;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/overview.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
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
            template: __webpack_require__(776),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/register.component.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__(756);
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
    // account: Object;
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staticTabs'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* TabsetComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* TabsetComponent */]) === 'function' && _a) || Object)
    ], UserAccountComponent.prototype, "staticTabs", void 0);
    UserAccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(777),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], UserAccountComponent);
    return UserAccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/user-account.component.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(34);
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
    function ComposeComponent(authService, router, flashMessage, validateService, emailService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.emailService = emailService;
    }
    ComposeComponent.prototype.ngOnInit = function () {
        this.message = undefined;
    };
    ComposeComponent.prototype.onSend = function () {
        var _this = this;
        if (this.account == "") {
            this.account = undefined;
        }
        if (this.reciever == "") {
            this.reciever = undefined;
        }
        if (this.subject == "") {
            this.subject = undefined;
        }
        if (this.message == "") {
            this.message = undefined;
        }
        this.authService.getProfile().subscribe(function (profile) {
            var account = profile.user;
            _this.userInfo = account.accountInfo[0];
            if (_this.userInfo == undefined) {
                _this.flashMessage.show("Add an account", { cssClass: "alert-danger", timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                var email = {
                    sender: _this.userInfo.username,
                    recpt: _this.reciever,
                    password: _this.userInfo.password,
                    sub: _this.subject,
                    message: _this.message
                };
                if (!_this.validateService.validateCompose(email)) {
                    _this.flashMessage.show("Please fill in all fields.", { cssClass: "alert-danger", timeout: 3000 });
                    return false;
                }
                if (!_this.validateService.validateEmail(email.sender) || !_this.validateService.validateEmail(email.recpt)) {
                    _this.flashMessage.show("Please enter a valid email.", { cssClass: "alert-danger", timeout: 3000 });
                    return false;
                }
                _this.emailService.sendEmail(email).subscribe(function (data) {
                    console.log(data);
                });
                window.location.reload();
            }
        });
    };
    ComposeComponent.prototype.onSave = function () {
        console.log("saved ;)");
    };
    ComposeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compose',
            template: __webpack_require__(778),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */]) === 'function' && _e) || Object])
    ], ComposeComponent);
    return ComposeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/compose.component.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_email_service__ = __webpack_require__(141);
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
    function DashboardComponent(router, flashMessages, authService, emailService) {
        this.router = router;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.emailService = emailService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.accounts = profile.user.accountInfo;
        });
    };
    DashboardComponent.prototype.onSave = function () {
        var _this = this;
        this.hideChildModal();
        this.authService.getProfile().subscribe(function (profile) {
            var list = profile.user.accountInfo;
            list.push({
                name: _this.name,
                username: _this.username,
                password: _this.password
            });
            var account = {
                username: profile.user.username,
                accounts: list
            };
            _this.authService.addAccount(account).subscribe(function (res) {
                // console.log(res);
                if (res.success) {
                    _this.flashMessages.show(res.msg, { cssClass: "alert-success", timeout: 3000 });
                }
                else {
                    _this.flashMessages.show(res.msg, { cssClass: "alert-danger", timeout: 3000 });
                }
            });
        });
    };
    DashboardComponent.prototype.gotoMail = function (val) {
        this.emailService.setAccount(val);
        this.router.navigate(['/mail-view']);
    };
    DashboardComponent.prototype.print = function (val) {
        console.log(val);
    };
    DashboardComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    DashboardComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "childModal", void 0);
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(779),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_email_service__["a" /* EmailService */]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(36);
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
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
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
    function MailViewComponent(router, flashMessages, authService, emailService) {
        this.router = router;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.emailService = emailService;
        this.emails = [];
    }
    MailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var accList = profile.user.accountInfo;
            if (accList == undefined) {
                _this.flashMessages.show("Add an account", { cssClass: "alert-danger", timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.account = accList[_this.emailService.getAccount()];
                _this.emailService.getEmails(_this.account).subscribe(function (data) {
                    var emails = data.toString().split('=%$^');
                    for (var i = 0; i < emails.length; i++) {
                        var part = emails[i].split('/');
                        var id = part[0].trim().split(' ');
                        _this.emails.push({ id: id[0], sub: part[1] });
                    }
                });
            }
        });
    };
    MailViewComponent.prototype.onView = function (id) {
        var _this = this;
        this.content = null;
        var info = {
            username: this.account.username,
            password: this.account.password,
            id: id
        };
        this.emailService.getContent(info).subscribe(function (content) {
            _this.content = content;
        });
    };
    MailViewComponent.prototype.onDelete = function (id) {
        var info = {
            username: this.account.username,
            password: this.account.password,
            id: id
        };
        this.emailService.deleteMail(info).subscribe(function (msg) {
            console.log(msg);
            window.location.reload();
        });
    };
    MailViewComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    MailViewComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* ModalDirective */]) === 'function' && _a) || Object)
    ], MailViewComponent.prototype, "childModal", void 0);
    MailViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail-view',
            template: __webpack_require__(780),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */]) === 'function' && _e) || Object])
    ], MailViewComponent);
    return MailViewComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/mail-view.component.js.map

/***/ }),

/***/ 674:
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
//# sourceMappingURL=/Users/hap_hip_lion/Documents/code/ezmail-app/angular-src/src/environment.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "footer {\n  position: fixed;\n  bottom: 0;\n  margin-left: 45%; }\n\n.footer-block ul {\n  margin-left: -30%;\n  padding-left: 0; }\n  .footer-block ul li {\n    display: inline; }\n\n.footer-block .spacer {\n  padding: 0 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".scrolling {\n  position: relative;\n  height: 550px;\n  overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "#profile {\n  padding-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".card {\n  padding: 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n/* On mouse-over, add a deeper shadow */\n/* Add some padding inside the card container */\n.container {\n  padding: 2px 16px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 355,
	"./af.js": 355,
	"./ar": 362,
	"./ar-dz": 356,
	"./ar-dz.js": 356,
	"./ar-kw": 357,
	"./ar-kw.js": 357,
	"./ar-ly": 358,
	"./ar-ly.js": 358,
	"./ar-ma": 359,
	"./ar-ma.js": 359,
	"./ar-sa": 360,
	"./ar-sa.js": 360,
	"./ar-tn": 361,
	"./ar-tn.js": 361,
	"./ar.js": 362,
	"./az": 363,
	"./az.js": 363,
	"./be": 364,
	"./be.js": 364,
	"./bg": 365,
	"./bg.js": 365,
	"./bn": 366,
	"./bn.js": 366,
	"./bo": 367,
	"./bo.js": 367,
	"./br": 368,
	"./br.js": 368,
	"./bs": 369,
	"./bs.js": 369,
	"./ca": 370,
	"./ca.js": 370,
	"./cs": 371,
	"./cs.js": 371,
	"./cv": 372,
	"./cv.js": 372,
	"./cy": 373,
	"./cy.js": 373,
	"./da": 374,
	"./da.js": 374,
	"./de": 377,
	"./de-at": 375,
	"./de-at.js": 375,
	"./de-ch": 376,
	"./de-ch.js": 376,
	"./de.js": 377,
	"./dv": 378,
	"./dv.js": 378,
	"./el": 379,
	"./el.js": 379,
	"./en-au": 380,
	"./en-au.js": 380,
	"./en-ca": 381,
	"./en-ca.js": 381,
	"./en-gb": 382,
	"./en-gb.js": 382,
	"./en-ie": 383,
	"./en-ie.js": 383,
	"./en-nz": 384,
	"./en-nz.js": 384,
	"./eo": 385,
	"./eo.js": 385,
	"./es": 387,
	"./es-do": 386,
	"./es-do.js": 386,
	"./es.js": 387,
	"./et": 388,
	"./et.js": 388,
	"./eu": 389,
	"./eu.js": 389,
	"./fa": 390,
	"./fa.js": 390,
	"./fi": 391,
	"./fi.js": 391,
	"./fo": 392,
	"./fo.js": 392,
	"./fr": 395,
	"./fr-ca": 393,
	"./fr-ca.js": 393,
	"./fr-ch": 394,
	"./fr-ch.js": 394,
	"./fr.js": 395,
	"./fy": 396,
	"./fy.js": 396,
	"./gd": 397,
	"./gd.js": 397,
	"./gl": 398,
	"./gl.js": 398,
	"./gom-latn": 399,
	"./gom-latn.js": 399,
	"./he": 400,
	"./he.js": 400,
	"./hi": 401,
	"./hi.js": 401,
	"./hr": 402,
	"./hr.js": 402,
	"./hu": 403,
	"./hu.js": 403,
	"./hy-am": 404,
	"./hy-am.js": 404,
	"./id": 405,
	"./id.js": 405,
	"./is": 406,
	"./is.js": 406,
	"./it": 407,
	"./it.js": 407,
	"./ja": 408,
	"./ja.js": 408,
	"./jv": 409,
	"./jv.js": 409,
	"./ka": 410,
	"./ka.js": 410,
	"./kk": 411,
	"./kk.js": 411,
	"./km": 412,
	"./km.js": 412,
	"./kn": 413,
	"./kn.js": 413,
	"./ko": 414,
	"./ko.js": 414,
	"./ky": 415,
	"./ky.js": 415,
	"./lb": 416,
	"./lb.js": 416,
	"./lo": 417,
	"./lo.js": 417,
	"./lt": 418,
	"./lt.js": 418,
	"./lv": 419,
	"./lv.js": 419,
	"./me": 420,
	"./me.js": 420,
	"./mi": 421,
	"./mi.js": 421,
	"./mk": 422,
	"./mk.js": 422,
	"./ml": 423,
	"./ml.js": 423,
	"./mr": 424,
	"./mr.js": 424,
	"./ms": 426,
	"./ms-my": 425,
	"./ms-my.js": 425,
	"./ms.js": 426,
	"./my": 427,
	"./my.js": 427,
	"./nb": 428,
	"./nb.js": 428,
	"./ne": 429,
	"./ne.js": 429,
	"./nl": 431,
	"./nl-be": 430,
	"./nl-be.js": 430,
	"./nl.js": 431,
	"./nn": 432,
	"./nn.js": 432,
	"./pa-in": 433,
	"./pa-in.js": 433,
	"./pl": 434,
	"./pl.js": 434,
	"./pt": 436,
	"./pt-br": 435,
	"./pt-br.js": 435,
	"./pt.js": 436,
	"./ro": 437,
	"./ro.js": 437,
	"./ru": 438,
	"./ru.js": 438,
	"./sd": 439,
	"./sd.js": 439,
	"./se": 440,
	"./se.js": 440,
	"./si": 441,
	"./si.js": 441,
	"./sk": 442,
	"./sk.js": 442,
	"./sl": 443,
	"./sl.js": 443,
	"./sq": 444,
	"./sq.js": 444,
	"./sr": 446,
	"./sr-cyrl": 445,
	"./sr-cyrl.js": 445,
	"./sr.js": 446,
	"./ss": 447,
	"./ss.js": 447,
	"./sv": 448,
	"./sv.js": 448,
	"./sw": 449,
	"./sw.js": 449,
	"./ta": 450,
	"./ta.js": 450,
	"./te": 451,
	"./te.js": 451,
	"./tet": 452,
	"./tet.js": 452,
	"./th": 453,
	"./th.js": 453,
	"./tl-ph": 454,
	"./tl-ph.js": 454,
	"./tlh": 455,
	"./tlh.js": 455,
	"./tr": 456,
	"./tr.js": 456,
	"./tzl": 457,
	"./tzl.js": 457,
	"./tzm": 459,
	"./tzm-latn": 458,
	"./tzm-latn.js": 458,
	"./tzm.js": 459,
	"./uk": 460,
	"./uk.js": 460,
	"./ur": 461,
	"./ur.js": 461,
	"./uz": 463,
	"./uz-latn": 462,
	"./uz-latn.js": 462,
	"./uz.js": 463,
	"./vi": 464,
	"./vi.js": 464,
	"./x-pseudo": 465,
	"./x-pseudo.js": 465,
	"./yo": 466,
	"./yo.js": 466,
	"./zh-cn": 467,
	"./zh-cn.js": 467,
	"./zh-hk": 468,
	"./zh-hk.js": 468,
	"./zh-tw": 469,
	"./zh-tw.js": 469
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 748;


/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-block\">\n    <div class=\"row\">\n      <ul>\n        <li><a href=\"\">Home</a></li>\n        <li class=\"spacer\">|</li>\n        <li><a href=\"/overview\">About Us</a></li>\n        <li class=\"spacer\">|</li>\n        <li><a href=\"#\">Site Map</a></li>\n        <li class=\"spacer\">|</li>\n        <li><a href=\"#\">Site Map</a></li>\n        <li class=\"spacer\">|</li>\n        <li><a href=\"#\">Site Map</a></li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <p id=\"cp-right\">Copyright <span class=\"glyphicon glyphicon-copyright-mark\" aria-hidden=\"true\"></span> 2017</p>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h1>EZ Mail App</h1>\n    <p class=\"lead\">Emailing has never been easier..</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h1>Secure API</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Angular 2 front-end</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Secure API</h1>\n      <p>Secure access to your info using jwt tokens.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Login</h2>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  </form>\n</div>"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Ez Mail</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/']\">Home</a>\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/overview']\">About Us</a>\n        </li>\n      </ul>\n      <!--navbar right-->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/dashboard']\" >Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/compose']\" >New Mail</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/user-account']\">User Account</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\" >Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\" >Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-lg-10 col-md-8 scrolling\" data-spy=\"scroll\" data-target=\"#navbar\" data-offset=\"50\">\n    <div id=\"team\" class=\"box\">\n      <h1 class=\"page-header\">Meet the team</h1>\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n          <div class=\"thumbnail\">\n            <img src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAOLAAAAJDljMTNiNGRlLWU2MDYtNGE5NS05NjI0LTFmNmMzZTFhNDhiYw.jpg\" width=\"350\" height=\"350\" alt=\"Roshan\">\n            <div class=\"caption\">\n              <h3>Roshan Sureen</h3>\n              <p>\n                <b>ID: </b>Who cares?<br>\n                <b>Title: </b>Lead Angular 2 developer <br>\n                <b>Best works: </b> Settings page.<br>\n              </p>\n              <p><a href=\"https://www.linkedin.com/in/roshan-sureen-40a60484/\" target=\"_blank\" class=\"btn btn-success\" role=\"button\">View Profile</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4\">\n          <div class=\"thumbnail\">\n            <img src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3AAAAAJGM0ZDY3MzA5LWI0NzctNDBiZC04NmE4LTMwZjY2MTUyNGIzMg.jpg\" width=\"350\" height=\"350\" alt=\"Maryam Abu\">\n            <div class=\"caption\">\n              <h3>Maryam Abu</h3>\n              <p>\n                <b>ID: </b>I cant remember <br>\n                <b>Title: </b>Lead designer <br>\n                <b>Best works: </b> Dashboard and Compose page.<br>\n              </p>\n              <p><a href=\"https://www.linkedin.com/in/maryam-abubakar-099546105/\" target=\"_blank\" class=\"btn btn-success\" role=\"button\">View Profile</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4\">\n          <div class=\"thumbnail\">\n            <img src=\"http://www.name-list.net/img/portrait/Grigor_8.jpg\" width=\"350\" height=\"350\" style=\"height: 330px;\" alt=\"Grigor Davtyan\">\n            <div class=\"caption\">\n              <h3>Grigor Davtyan</h3>\n              <p>\n                <b>ID: </b>It doesnt matter. <br>\n                <b>Title: </b>Backend developer. <br>\n                <b>Best works: </b>Yet to see.<br>\n              </p>\n              <p><a href=\"https://www.linkedin.com/in/grigor-davtyan-73769482/\" target=\"_blank\" class=\"btn btn-success\" role=\"button\">View Profile</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n          <div class=\"thumbnail\">\n            <img src=\"https://lh3.googleusercontent.com/-kdF8TzBipv8/WFK-6roxlSI/AAAAAAAAAbs/f_6443IvyJkQHQpc8x6XIFpiCSn9mB0kwCEw/w139-h140-p/profile-pic.jpg\" width=\"350\" height=\"350\" alt=\"Noha Philip\">\n            <div class=\"caption\">\n              <h3>Noha Philip</h3>\n              <p>\n                <b>ID: </b>H00172276 <br>\n                <b>Title: </b>Team Leader<br>\n                <b>Best works: </b>Mail View page, MEAN stack integration and jwt authentication.<br>\n              </p>\n              <p><a href=\"https://www.linkedin.com/in/noha-philip-57854a74/\" target=\"_blank\" class=\"btn btn-success\" role=\"button\">View Profile</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"sitemap\" class=\"box\">\n      <h1 class=\"page-header\">Site Map</h1>\n      \n      <h4> <a href=\"/\">Home Page</a></h4>\n      <p>The first thing you see.</p>\n      \n      <h4> <a href=\"/overview\">About Us</a></h4>\n      <p>The page your are in right now.</p>\n\n      <h4> <a href=\"/login\">Login</a></h4>\n      <p>The most important part of the website.</p>\n\n      <h4> <a href=\"/register\">Register</a></h4>\n      <p>The easiest way we steal your data.</p>\n\n      <h4> <a href=\"/dashboard\">Dashboard</a></h4>\n      <p>The page where the user adds multiple email accounts.</p>\n\n      <h4> <a href=\"/compose\">New Mail</a></h4>\n      <p>The page where the user composes a mail.</p>\n\n      <h4> <a href=\"/mail-view\">Mail View</a></h4>\n      <p>The page where the user views his/her emails.</p>\n\n      <h4> <a href=\"/user-account\">User Account</a></h4>\n      <p>To really show how much time we got to waste.</p>\n    </div>\n    <div id=\"libs\" class=\"box\">\n      <h1 class=\"page-header\">Frameworks & Libraries used in this project</h1>\n\n      <h4>Angular 2</h4>\n      <p>The most popular front-end framework and the one thing everyone agreed to use.(exception == grigor).</p>\n\n      <h4>Express</h4>\n      <p>Ez node server. That's how we roll.</p>\n\n      <h4>MongoDB</h4>\n      <p>Didn't feel like installing mysql.</p>\n\n      <h4>Node js</h4>\n      <p>The house of cards.</p>\n\n      <h4>Bootstrap Sass</h4>\n      <p>Got tired with just Bootstrap.</p>\n\n      <h4>JWT Tokens</h4>\n      <p>Just to complicate things.</p>\n\n      <h4>JQuery</h4>\n      <p>We didn't have another choice.</p>\n\n      <h4>Font Awesome</h4>\n      <p>I only do awesome.</p>\n\n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n    <div id=\"navbar\">\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li role=\"presentation\" class=\"active\"><a href=\"overview#team\" data-target=\"#team\">Team GRMP</a></li>\n        <li role=\"presentation\"><a href=\"overview#sitemap\" data-target=\"#sitemap\">Site Map</a></li>\n        <li role=\"presentation\"><a href=\"overview#libs\" data-target=\"#libs\">Frameworks & Libraries</a></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <tabset #staticTabs>\n    <tab heading=\"Profile\">\n      <div *ngIf=\"user\" ngrole=\"tabpanel\" class=\"\" id=\"profile\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">User Name</label>\n            <input type=\"text\" class=\"form-control\" value=\"{{ user.username }}\" id=\"exampleInputEmail1\" placeholder=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Full Name</label>\n            <input type=\"text\" class=\"form-control\" value=\"{{ user.name }}\" id=\"exampleInputEmail1\" placeholder=\"Full Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" value=\"{{ user.email }}\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"newPass\">Change Current Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"newPass\" placeholder=\"New Password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </form>\n      </div>\n    </tab>\n    <tab heading=\"Account Info\">\n      <div style=\"padding-top: 30px\">\n        <form *ngIf=\"user\">\n          <div class=\"form-group\">\n            <label for=\"emailID\">Change email ID</label>\n            <input type=\"text\" class=\"form-control\" value=\"{{ user.accountInfo.username }}\" id=\"emailID\" placeholder=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"accountPass\">Change Password</label>\n            <input type=\"password\" class=\"form-control\" value=\"{{ user.accountInfo.password }}\" id=\"accountPass\" placeholder=\"Full Name\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </form>\n      </div>\n    </tab>\n    <tab heading=\"Setting\">\n\n    </tab>\n  </tabset>\n</div>"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"well\">\n        <form class=\"form-horizontal\">\n            <fieldset>\n                <legend>New Email</legend>\n                <div class=\"form-group\">\n                    <label for=\"account\" class=\"col-lg-2 control-label\">From</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"account\" [(ngModel)]=\"account\" name=\"account\" class=\"form-control\" id=\"account\" placeholder=\"Sender\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"reciever\" class=\"col-lg-2 control-label\">To</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"email\" [(ngModel)]=\"reciever\" name=\"reciever\" class=\"form-control\" id=\"reciever\" placeholder=\"Recepient\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"subject\" class=\"col-lg-2 control-label\">Subject</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"message\" class=\"col-lg-2 control-label\">Message</label>\n                    <div class=\"col-lg-10\">\n                        <textarea [(ngModel)]=\"message\" name=\"message\" class=\"form-control\" rows=\"3\" id=\"message\"></textarea>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-lg-10 col-lg-offset-2\">\n                        <button (click)=\"onSend()\" class=\"btn btn-success\">Send</button>\n                        <button (click)=\"onSave()\" class=\"btn btn-primary\">Save</button>\n                        <button type=\"reset\" class=\"btn btn-default\">Discard</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\"><strong>Dashboard</strong></h2>\n    <!--<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-danger\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-google fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">26</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Gmail</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6\">\n\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-yahoo fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">263</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Yahoo</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-envelope fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">2</div>\n                                <div>New Mails!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a (click)=\"gotoMail(0)\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">Uni Mail</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"col-md-9\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-plus-square fa-5x \"></i>\n                                </div>\n\n                            </div>\n                        </div>\n                        <a (click)=\"showChildModal()\">\n                            <div class=\"panel-footer\">\n                                <span class=\"pull-left \">Add Email Account</span>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>-->\n\n    <div *ngFor=\"let account of accounts; let i = index;\">\n        <!--<div class=\"row\">-->\n            <div class=\"col-md-3\">\n                <div class=\"card\">\n                    <div class=\"container\">\n                        <h6>{{account.name}}</h6>\n                        <button class=\"btn btn-primary\" (click)=\"gotoMail(i)\">View Mailbox</button>\n                    </div>\n                </div>\n            </div>\n        <!--</div>-->\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card\">\n            <div class=\"container\">\n                <button class=\"btn btn-success\" (click)=\"showChildModal()\">Add Account</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Add account modal -->\n    <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Add Account</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form class=\"form-horizontal\">\n                        <fieldset>\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"col-lg-2 control-label\">Account Name</label>\n                                <div class=\"col-lg-10\">\n                                    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Gmail\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"username\" class=\"col-lg-2 control-label\">Emial ID</label>\n                                <div class=\"col-lg-10\">\n                                    <input type=\"email\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"example@email.com\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\n                                <div class=\"col-lg-10\">\n                                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-lg-10 col-lg-offset-2\">\n                                    <button (click)=\"onSave()\" class=\"btn btn-success\">Save</button>\n                                    <button type=\"reset\" (click)=\"hideChildModal()\" class=\"btn btn-default\">Cancel</button>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--<ul>\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul>-->\n  <!--<div *ngIf=\"user\">-->\n    <div class=\"card email\" *ngFor=\"let item of emails\">\n      <div class=\"container\">\n        <p>\n          <b>{{item.sub}}</b>\n        </p>\n        <div class=\"pull-right\">\n          <button class=\"btn btn-primary\" (click)=\"onView(item.id); showChildModal()\">View</button>\n          <button class=\"btn btn-danger\" (click)=\"onDelete(item.id)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  <!--</div>-->\n\n  <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Content</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          {{content}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ })

},[815]);
//# sourceMappingURL=main.bundle.js.map