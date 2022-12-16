import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
import { registerValidation } from "./validations/auth.js";
import UserModel from "./models/User.js";
import checkAuth from "./utils/checkAuth.js";

mongoose
    .connect('mongodb+srv://admin:8888@cluster0.5chjhac.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB is OK!'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is fine!");
});

app.post('/auth/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const isValidPass = await bcrypt.compare(req.body.pass, user._doc.passHash);
        if (!isValidPass) {
            return res.status(404).json({
                message: "Wrong login or password"
            })
        }
        const token = jwt.sign(
            {
                _id: user._doc._id,
            },
            'secretKey',
            {
                expiresIn: '30d',
            },
        );
        const { passHash, ...userData } = user._doc;
        res.json({
            ...userData,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Login error"
        });
    }
});

app.post('/auth/reg', registerValidation, async (req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        const pass = req.body.pass;
        const salt = await bcrypt.genSalt(10); 
        const hash = await bcrypt.hash(pass, salt);
        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passHash: hash,
        });
        const user = await doc.save();
        const token = jwt.sign(
            {
                _id: user._doc._id,
            },
            'secretKey',
            {
                expiresIn: '30d',
            },
        );
        const { passHash, ...userData } = user._doc;
        res.json({
            ...userData,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Register error"
        });
    }
});

app.get('/auth/me', checkAuth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const { passHash, ...userData } = user._doc;
        res.json({userData});
    } catch (error) {
        console.log(error);
        res.status(403).json({
            message: "Access denied",
        });
    }
});

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK!");
});