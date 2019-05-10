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
rxjs_1.of([80, 8, 9, 25, 63, 4, 2, 5, 7, 8, 52, 5, 4, 5, 25, 65, 5, 5]);
