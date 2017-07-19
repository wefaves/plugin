webpackJsonp([1,5],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(290);
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
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/history.service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(290);
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
    BookmarksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], BookmarksService);
    return BookmarksService;
    var _a;
}());
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/bookmarks.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 296;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(411);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/main.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_history_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
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
    function AppComponent(http) {
        this.http = http;
        //public list=['batman vs superman','civil war','deadpool', 'toto'];
        this.list = [];
    }
    AppComponent.prototype.open = function (event) {
        window.open('http://prod.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/');
    };
    AppComponent.prototype.settings = function (event) {
        window.open('http://prod.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account');
    };
    AppComponent.prototype.desconnect = function (event) {
        chrome.cookies.remove({ "url": "http://prod.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account", "name": "currentUser" }, function (cookie) {
        });
    };
    AppComponent.prototype.displaySearch = function (value) {
        var _this = this;
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
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(473),
            styles: [__webpack_require__(466)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_history_service__["a" /* HistoryService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookmarks_bookmarks_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_bookmarks_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_history_service__ = __webpack_require__(175);
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
                __WEBPACK_IMPORTED_MODULE_6__history_history_component__["a" /* HistoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_bookmarks_service__["a" /* BookmarksService */], __WEBPACK_IMPORTED_MODULE_8__services_history_service__["a" /* HistoryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/app.module.js.map

/***/ }),

/***/ 409:
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
        var _this = this;
        this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", function (key) {
            _this.key = key;
            _this.loadBookmarks(key);
        });
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
            _this.getCurrentBookmarks(query, function (currentBookmarks) {
                _this.compareBookmarks(_this.bookmarks, currentBookmarks);
            });
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
    BookmarksComponent.prototype.getCurrentBookmarks = function (query, callback) {
        chrome.bookmarks.getChildren('1', function (results) {
            if (callback) {
                callback(results);
            }
        });
    };
    BookmarksComponent.prototype.getCookies = function (domain, name, callback) {
        chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
            if (callback) {
                callback(cookie ? cookie.value : null);
            }
            if (!cookie) {
                window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/');
            }
        });
    };
    BookmarksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-bookmarks',
            template: __webpack_require__(474),
            styles: [__webpack_require__(467)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bookmarks_service__["a" /* BookmarksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bookmarks_service__["a" /* BookmarksService */]) === 'function' && _a) || Object])
    ], BookmarksComponent);
    return BookmarksComponent;
    var _a;
}());
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/bookmarks.component.js.map

/***/ }),

/***/ 410:
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
        var _this = this;
        this.getCookies("http://prod.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", function (key) {
            _this.key = key;
            _this.loadHistory(key);
        });
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
            _this.getCurrentHistory(query, function (currentHistory) {
                _this.compareHistory(_this.history, currentHistory);
            });
        });
    };
    HistoryComponent.prototype.addDiffence = function () {
        for (var _i = 0, _a = this.difference; _i < _a.length; _i++) {
            var i = _a[_i];
            this.historyService.addHistory(i, this.key)
                .subscribe(function (value) {
                //console.log(value);
            });
        }
    };
    HistoryComponent.prototype.compareHistory = function (history, currentHistory) {
        this.difference = [];
        var value = 0;
        for (var _i = 0, currentHistory_1 = currentHistory; _i < currentHistory_1.length; _i++) {
            var i = currentHistory_1[_i];
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
    HistoryComponent.prototype.getCurrentHistory = function (query, callback) {
        chrome.history.search(query, function (results) {
            if (callback) {
                callback(results);
            }
        });
    };
    HistoryComponent.prototype.getCookies = function (domain, name, callback) {
        chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
            if (callback) {
                callback(cookie ? cookie.value : null);
            }
            if (!cookie) {
                window.open('http://prod.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/');
            }
        });
    };
    HistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__(475),
            styles: [__webpack_require__(468)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_history_service__["a" /* HistoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_history_service__["a" /* HistoryService */]) === 'function' && _a) || Object])
    ], HistoryComponent);
    return HistoryComponent;
    var _a;
}());
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/history.component.js.map

/***/ }),

/***/ 411:
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
//# sourceMappingURL=/Users/youcefmouhoub/Local/Repositories/plugin-wefaves/src/environment.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "li p {\n  color: red;\n  display: none\n}\n\nul  {\n  list-style-type: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<link rel=\"manifest\" href=\"/manifest.json\">\n<div class=\"boxed boxed--border bg--secondary\">\n  <div class=\"container\">\n\n    <div class=\"row block1\">\n      <span class=\"col textData\"><img src=\"assets/icon_32x32.png\" alt=\"icone Wefaves\" class=\"imgPlugin\">{{title}}</span>\n      <span class=\"col dropdown\">\n          <i class=\"icon glyphicon glyphicon-option-horizontal\" data-toggle=\"dropdown\"></i>\n          <ul class=\"dropdown-menu dropdown-menu\" style=\"left:-80px;\">\n            <li><a href=\"#\" (click)=\"open($event)\" id=\"webApp\"><i class=\"iconMenu glyphicon glyphicon-new-window\"></i> Ouvrir Wefaves</a></li>\n            <li><a href=\"#\" (click)=\"settings($event)\" id=\"setting\"><i class=\"iconMenu glyphicon glyphicon glyphicon-cog\"></i> Paramètres</a></li>\n            <li><a href=\"#\" (click)=\"desconnect($event)\" id=\"logOut\"><i class=\"iconMenu glyphicon glyphicon glyphicon-off\"></i> Déconnection</a></li>\n          </ul>\n        </span>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"boxed boxed--border bg--secondary\">\n  <div class=\"container\">\n\n    <div>Rechercher un élément :</div>\n    <input type=\"text\" #search (change)=\"displaySearch(search.value)\" name=\"\" value=\"\" class=\"form-control\">\n    <ul>\n      <li *ngFor=\"let l of list\">\n        <a target=\"_blank\" href={{l.url}}>{{l.title}}</a>\n      </li>\n    </ul>\n\n\n  </div>\n  <br>\n</div>\n\n<app-bookmarks> </app-bookmarks>\n<!-- <app-history> </app-history> -->\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor=\"let bookmark of bookmarks\">\n    <p>{{bookmark.title}}</p>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor=\"let elem of history\">\n    <p>{{elem.title}}</p>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(297);


/***/ })

},[491]);
//# sourceMappingURL=main.bundle.js.map