"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModule = void 0;
const { ItemController } = require('./controllers/ItemController');
class ItemModule {
    constructor() {
        this.itemController = new ItemController();
        this.setup();
    }
    setup() {
        return this.itemController.createServices();
    }
}
exports.ItemModule = ItemModule;
