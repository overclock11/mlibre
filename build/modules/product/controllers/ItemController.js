"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const express = require("express");
const { ItemProvider } = require('../providers/ItemProvider');
class ItemController {
    constructor() {
        this.itemProvider = new ItemProvider();
        this.router = express();
    }
    createServices() {
        this.router.get('/items', async (req, res) => {
            try {
                if (req.query.q) {
                    const value = await this.itemProvider.searchItem(req.query.q);
                    res.status(200).send(value);
                }
                else {
                    throw "el parametro de busqueda 'q' no es válido";
                }
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
        this.router.get('/items/:id', async (req, res) => {
            try {
                const value = await this.itemProvider.getItem(req.params.id);
                res.status(200).send(value);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
        return this.router;
    }
}
exports.ItemController = ItemController;
