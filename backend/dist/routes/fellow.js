"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fellow_model_1 = __importDefault(require("../models/fellow.model"));
const router = (0, express_1.Router)();
router.route('/').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fellows = yield fellow_model_1.default.find({
            fellowname: { $ne: null },
            emailladdress: { $ne: null },
            fellowmessage: { $ne: null },
        });
        res.json(fellows);
    }
    catch (err) {
        res.status(400).json({ error: `Error fetching fellows: ${err.message}` });
    }
}));
router.route('/add').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fellowname, companyname, websitename, emailladdress, fellowmessage } = req.body;
    if (!fellowname || !emailladdress || !fellowmessage) {
        return res.status(400).json({
            error: 'Fellowname, Email Address, and Fellow Message are required',
        });
    }
    const newFellow = new fellow_model_1.default({
        fellowname,
        companyname,
        websitename,
        emailladdress,
        fellowmessage,
    });
    try {
        yield newFellow.save();
        // res.json('Fellow added!');
        console.log(`${fellowname}, fellow added successfully`);
        res.status(200).json({ message: 'fellow added successfully!' });
    }
    catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                error: 'Duplicate key error: Fellowname or Email Address must be unique',
            });
        }
        res.status(400).json({ error: `Error adding fellow: ${err.message}` });
    }
}));
exports.default = router;
