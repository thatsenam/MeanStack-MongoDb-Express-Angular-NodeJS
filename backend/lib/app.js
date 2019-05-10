"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log.bind(console);
var model_1 = require("./model");
var model_2 = require("./model");
var model_3 = require("./model");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("./play");
var person = new model_1.Enam('Md Enamul Hassan');
var p = new model_2.Person('Enam');
var app = express_1.default();
app.set('json spaces', 2);
app.use(cors_1.default());
app.get('/api', function (req, res) {
    res.header("Content-Type", 'application/json');
    res.json(model_3.getTodos());
});
app.get('/', function (req, res) {
    res.redirect('/api');
});
app.listen(8080, function () {
    log('Serving on http://localhost:%d', 8080);
});
