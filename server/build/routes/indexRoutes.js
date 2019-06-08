"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexControll.index); //Enviar codigo al cotrolle
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
