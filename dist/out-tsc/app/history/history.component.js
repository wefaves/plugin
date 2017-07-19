var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';
var HistoryComponent = (function () {
    function HistoryComponent(historyService) {
        this.historyService = historyService;
        this.history = [];
        this.currentHistory = [];
        this.difference = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", function (key) {
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
                window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/');
            }
        });
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Component({
        selector: 'app-history',
        templateUrl: './history.component.html',
        styleUrls: ['./history.component.css']
    }),
    __metadata("design:paramtypes", [HistoryService])
], HistoryComponent);
export { HistoryComponent };
//# sourceMappingURL=../../../../src/app/history/history.component.js.map