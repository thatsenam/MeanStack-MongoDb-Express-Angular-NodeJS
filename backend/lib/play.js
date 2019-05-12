"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obserber = rxjs_1.Observable.create(function (observer) {
    observer.next('1');
    observer.next('2');
    observer.next('3');
});
obserber.subscribe(function (data) {
    console.log('Recived data ' + data);
});
