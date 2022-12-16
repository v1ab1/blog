import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
import { registerValidation } from "./validations/auth.js";
import UserModel from "./models/User.js";

mongoose
    .connect('mongodb+srv://admin:8888@cluster0.5chjhac.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB is OK!'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is fine!");
});

app.post('/auth/reg', registerValidation, async (req,res) => {
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
        pass: hash,
    });

    const user = await doc.save();

    res.json(user);
});

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK!");
});