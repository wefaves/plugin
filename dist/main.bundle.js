webpackJsonp([1,5],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getHistory = function (key) {
        return this.http.get('https://api.wefaves.com/users/self/history', this.getToken(key))
            .map(function (response) { return response.json(); });
    };
    HistoryService.prototype.addHistory = function (history, key) {
        return this.http.post('https://api.wefaves.com/users/self/history', history, this.getToken(key))
            .map(function (response) { return response.json(); });
    };
    HistoryService.prototype.getToken = function (key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + key });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    HistoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], HistoryService);
    return HistoryService;
    var _a;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/history.service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarksService = (function () {
    function BookmarksService(http) {
        this.http = http;
    }
    BookmarksService.prototype.getBookmarks = function (key) {
        return this.http.get('https://api.wefaves.com/users/self/favorite', this.getToken(key))
            .map(function (response) { return response.json(); });
    };
    BookmarksService.prototype.addBookmarks = function (bookmarks, key) {
        return this.http.post('https://api.wefaves.com/users/self/favorite', bookmarks, this.getToken(key))
            .map(function (response) { return response.json(); });
    };
    BookmarksService.prototype.getToken = function (key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + key });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    BookmarksService.prototype.setCookie = function (key) {
        console.log('je suis dans le but');
        console.log('setCookie: ' + key);
    };
    BookmarksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], BookmarksService);
    return BookmarksService;
    var _a;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/bookmarks.service.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_handler_service__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalTokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalTokenService = (function () {
    //var bookmarksService;
    function GlobalTokenService(serviceHandler) {
        /*this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
          this.callBookmarks(key);
          console.log('constructor' + key);
        });*/
        this.serviceHandler = serviceHandler;
        this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", this.callHandler, serviceHandler);
    }
    GlobalTokenService.prototype.getCookies = function (domain, name, callback, service) {
        chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
            if (callback) {
                callback((cookie ? cookie.value : null), service);
            }
            /*if (!cookie) {
              window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
            }*/
        });
    };
    GlobalTokenService.prototype.callHandler = function (key, service) {
        service.setCookie(key);
    };
    GlobalTokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_handler_service__["a" /* ServiceHandlerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_handler_service__["a" /* ServiceHandlerService */]) === 'function' && _a) || Object])
    ], GlobalTokenService);
    return GlobalTokenService;
    var _a;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/global-token.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceHandlerService = (function () {
    function ServiceHandlerService() {
    }
    ServiceHandlerService.prototype.setCookie = function (key) {
        console.log('works' + key);
    };
    ServiceHandlerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ServiceHandlerService);
    return ServiceHandlerService;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/service-handler.service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 299;


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(415);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_token_service__ = __webpack_require__(277);
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
    function AppComponent(http, globalToken) {
        this.http = http;
        this.globalToken = globalToken;
        // chrome.bookmarks.getTree(function (tree) {
        //   const bookmarks = Bookmark.ParseFromObjectToArray(tree);
        //   console.log(bookmarks);
        // });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.open = function (event) {
        window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
    };
    AppComponent.prototype.settings = function (event) {
        window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account');
    };
    AppComponent.prototype.desconnect = function (event) {
        // chrome.cookies.remove({"url": "http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account", "name": "currentUser"}, function(cookie) {
        //
        // });
        //
        // window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
    };
    AppComponent.prototype.getCookies = function (domain, name, callback) {
        // chrome.cookies.get({"url": domain, "name": name}, function (cookie) {
        //   if (callback) {
        //     callback(cookie ? cookie.value : null);
        //   }
        //   if (!cookie) {
        //     window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
        //   }
        // });
    };
    AppComponent.prototype.save = function (event) {
        // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        //   const tab = tabs[0];
        //
        //   chrome.bookmarks.create({'parentId': "1",
        //     'title': tab.title,
        //     'url': tab.url});
        // });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(475),
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_token_service__["a" /* GlobalTokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_global_token_service__["a" /* GlobalTokenService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookmarks_bookmarks_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_bookmarks_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_history_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_global_token_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_service_handler_service__ = __webpack_require__(278);
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












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bookmarks_bookmarks_component__["a" /* BookmarksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_bookmarks_service__["a" /* BookmarksService */], __WEBPACK_IMPORTED_MODULE_9__services_history_service__["a" /* HistoryService */], __WEBPACK_IMPORTED_MODULE_10__services_global_token_service__["a" /* GlobalTokenService */], __WEBPACK_IMPORTED_MODULE_11__services_service_handler_service__["a" /* ServiceHandlerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookmarks_service__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarksComponent = (function () {
    function BookmarksComponent(bookmarksService) {
        this.bookmarksService = bookmarksService;
        this.bookmarks = [];
        this.difference = [];
    }
    BookmarksComponent.prototype.ngOnInit = function () {
        // this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
        //   this.key = key;
        //   this.loadBookmarks(key);
        // });
    };
    BookmarksComponent.prototype.loadBookmarks = function (key) {
        var _this = this;
        var x = 0;
        var query = {
            url: ''
        };
        this.bookmarksService.getBookmarks(key)
            .subscribe(function (bookmarks) {
            _this.bookmarks = bookmarks;
            // this.getCurrentBookmarks(query, (currentBookmarks) => {
            //   this.compareBookmarks(this.bookmarks, currentBookmarks);
            // });
        }, function (error) {
        });
    };
    BookmarksComponent.prototype.addDiffence = function () {
        for (var _i = 0, _a = this.difference; _i < _a.length; _i++) {
            var i = _a[_i];
            this.bookmarksService.addBookmarks(i, this.key)
                .subscribe(function (value) {
                //console.log(value);
            });
        }
    };
    BookmarksComponent.prototype.compareBookmarks = function (bookmarks, currentBookmarks) {
        this.difference = [];
        var value = 0;
        for (var _i = 0, currentBookmarks_1 = currentBookmarks; _i < currentBookmarks_1.length; _i++) {
            var i = currentBookmarks_1[_i];
            value = 0;
            for (var _a = 0, bookmarks_1 = bookmarks; _a < bookmarks_1.length; _a++) {
                var j = bookmarks_1[_a];
                if (i.url == j.url) {
                    value = 1;
                }
            }
            if (value == 0) {
                this.difference.push(i);
                value = 0;
            }
        }
        this.addDiffence();
    };
    BookmarksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-bookmarks',
            template: __webpack_require__(476)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bookmarks_service__["a" /* BookmarksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bookmarks_service__["a" /* BookmarksService */]) === 'function' && _a) || Object])
    ], BookmarksComponent);
    return BookmarksComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/bookmarks.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_history_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = (function () {
    function HistoryComponent(historyService) {
        this.historyService = historyService;
        this.history = [];
        this.currentHistory = [];
        this.difference = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        // this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
        //   this.key = key;
        //   this.loadHistory(key);
        // });
    };
    HistoryComponent.prototype.loadHistory = function (key) {
        var _this = this;
        var query = {
            text: '',
            maxResults: 100
        };
        this.historyService.getHistory(key)
            .subscribe(function (history) {
            _this.history = history;
            // this.getCurrentHistory(query, (currentHistory) => {
            //   this.compareHistory(this.history, currentHistory);
            // });
        });
    };
    HistoryComponent.prototype.addDiffence = function () {
        for (var _i = 0, _a = this.difference; _i < _a.length; _i++) {
            var i = _a[_i];
            this.historyService.addHistory(i, this.key)
                .subscribe(function (value) {
                console.log(value);
            });
        }
    };
    HistoryComponent.prototype.compareHistory = function (history, currentHistory) {
        this.difference = [];
        for (var _i = 0, currentHistory_1 = currentHistory; _i < currentHistory_1.length; _i++) {
            var i = currentHistory_1[_i];
            var value = 0;
            for (var _a = 0, history_1 = history; _a < history_1.length; _a++) {
                var j = history_1[_a];
                if (i.title == j.title) {
                    value = 1;
                }
            }
            if (value == 0) {
                this.difference.push(i);
                value = 0;
            }
        }
        this.addDiffence();
    };
    HistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__(477)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_history_service__["a" /* HistoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_history_service__["a" /* HistoryService */]) === 'function' && _a) || Object])
    ], HistoryComponent);
    return HistoryComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/history.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_history_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(http, historyService) {
        this.http = http;
        this.historyService = historyService;
        this.query = '';
        this.filteredList = [];
        this.list = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.filter = function () {
        var _this = this;
        if (this.query !== "") {
            this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", function (key) {
                _this.historyService.getHistory(key)
                    .subscribe(function (history) {
                    _this.filteredList = history.filter(function (el) {
                        return el.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    }.bind(_this));
                });
            });
        }
        else {
            this.filteredList = [];
        }
    };
    SearchComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    SearchComponent.prototype.displaySearch = function (value) {
        var _this = this;
        console.log(value);
        var query = '';
        var filteredList = [];
        var elementRef = value;
        var result;
        this.http.get('./search.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (val) { return result = val; }, function (err) { return console.error(err); }, function () {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var i = result_1[_i];
                if (i.title === value) {
                    _this.list.push(i);
                }
            }
        });
    };
    SearchComponent.prototype.getCookies = function (domain, name, callback) {
        chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
            if (callback) {
                callback(cookie ? cookie.value : null);
            }
            if (!cookie) {
                window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
            }
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(478)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_history_service__["a" /* HistoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_history_service__["a" /* HistoryService */]) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/search.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://api.wefaves.com/'
};
//# sourceMappingURL=/Users/yous/Local/Repositories/plugin-chrome/src/environment.js.map

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<link rel=\"manifest\" href=\"/manifest.json\">\n<div class=\"boxed boxed--border bg--secondary\">\n  <div class=\"container\">\n\n    <div class=\"row block1\">\n      <span class=\"col textData\"><img src=\"assets/img/icon_32x32.png\" alt=\"icone Wefaves\" class=\"imgPlugin\">Données synchronisées</span>\n      <span class=\"col dropdown\">\n          <i class=\"icon glyphicon glyphicon-option-horizontal\" data-toggle=\"dropdown\"></i>\n          <ul class=\"dropdown-menu dropdown-menu\" style=\"left:-80px;\">\n            <li><a href=\"#\" (click)=\"save($event)\" id=\"save\"><i class=\"iconMenu glyphicon glyphicon-plus-sign\"></i>Ajouter aux favoris</a></li>\n            <li><a href=\"#\" (click)=\"open($event)\" id=\"webApp\"><i class=\"iconMenu glyphicon glyphicon-new-window\"></i> Ouvrir Wefaves</a></li>\n            <!-- <li><a href=\"#\" (click)=\"settings($event)\" id=\"setting\"><i class=\"iconMenu glyphicon glyphicon glyphicon-cog\"></i> Paramètres</a></li> -->\n            <li><a href=\"#\" (click)=\"desconnect($event)\" id=\"logOut\"><i class=\"iconMenu glyphicon glyphicon glyphicon-off\"></i> Déconnection</a></li>\n          </ul>\n        </span>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"boxed boxed--border bg--secondary\">\n  <div class=\"container\">\n\n    <div>Rechercher un élément :</div>\n    <app-search></app-search>\n    <!-- <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n      <ul *ngFor=\"let item of filteredList\" >\n        <li >\n          <a target=\"_blank\" href=\"{{item.url}}\">{{item.title}}</a>\n        </li>\n      </ul>\n    </div> -->\n  </div>\n  <br>\n</div>\n\n<!-- <app-bookmarks> </app-bookmarks> -->\n<!--<app-history> </app-history>-->\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control\" type=\"text\" [(ngModel)]=query (keyup)=filter()>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(300);


/***/ })

},[494]);
//# sourceMappingURL=main.bundle.js.map