"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getHistory = function () {
        return this.http.get('https://api.wefaves.com/users/self/history', this.getToken())
            .map(function (response) { return response.json(); });
    };
    HistoryService.prototype.getToken = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6MTAsImVtYWlsIjoidGl0aXRAdG90by5jb2tmIiwibGFzdExvZ2luIjp7ImRhdGUiOiIyMDE3LTA2LTExIDAwOjMxOjA1LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiRXVyb3BlL1BhcmlzIn0sInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwiZXhwIjoxNDk3MTM3NDY1LCJpYXQiOjE0OTcxMzM4NjV9.ka0KjI0rzmNpiEI5ku-QScHGW8GbkdEgqZmbJPKdlLkZEkCQWbslTFC2avgpFmg1pPdp1egSqje7POsi-setahRIvh88LZ5c2aMQCpNN3YgcS_1k25C5IyaejF3xK649qU36WPM0ykMV2VZSiTR0uuiojWSWlAQttfel7oU8iqalm5mB3AHLZMlLmcjx-EWv10OXatauyOQiN0p7TTHeEtCr6i2VsKo74x6hNMAoxaJZTRRqzwkJwWxDHyb_ousHshyKq2R-WTRXQu2nF1WSPuPu7VU62aJ1UJrboqmV7CKfNj_hh2pcAGZ1azGlQ8CZofYd6KcXxqMpuE5n3rVmSclTz3JiZ8s1ZuesfD-92Bsvdf87upb_1vcxWCAaysj-1NRYPO-IuksK-PjmCTl-fOTcAfGff2Kp9WEHUzJ7cHNZFqswX4LLtkjN4lpogJ_RkSmhDPOyN8ML6BPjler6gy6_j9P0blbLTV7LH2KFawZQVXdz-JzVWuTBltHnE4qMseU8M6Sj6hL6aBnT4odPwzs2RlgOaDmuZZjzRmHRPZkzydZd_B6DvSqxcqD1xmwIIVtTmJfwhfpxzIqTYYlxcFRVuMh_CAibyhWNorf6jT0SFiCFVkN0lpxGlavWsKhJGo3KXb_Arl6XDmnv1P-2K0XQR0rw02tCpku1vu8G1-M' });
        return new http_1.RequestOptions({ headers: headers });
    };
    return HistoryService;
}());
HistoryService = __decorate([
    core_1.Injectable()
], HistoryService);
exports.HistoryService = HistoryService;
