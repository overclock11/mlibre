"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const compression = require('compression');
const path = __importStar(require("path"));
const cors = require('cors');
const { ItemModule } = require('./modules/product/ItemModule');
class App {
    constructor() {
        this.app = express();
        this.itemModule = new ItemModule();
        this.listen();
    }
    listen() {
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(express.static(path.join(__dirname, './public')));
        this.app.use('/api', this.itemModule.setup());
        this.app.use('/', function (req, res, next) {
            res.sendFile(path.resolve(__dirname, '../build/public/index.html'));
        });
        const port = process.env.PORT || 3007;
        this.app.listen(port, () => {
            console.log(`listening on http://localhost:${port}`);
        });
    }
}
exports.App = App;
const app = new App();
