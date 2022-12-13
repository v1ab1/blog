import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
    .connect('mongodb+srv://admin:8888@cluster0.5chjhac.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB is OK'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is fine!");
});

app.post('/auth/login', (req,res) => {
    const token = jwt.sign(
        {
        email: req.body.email
        },
        "secretkey",
    );
    res.json({
        success: true,
        token
    });
});

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK!");
});