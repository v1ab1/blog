import express from "express";
import mongoose from "mongoose";
import { registerValidation, postCreateValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import { register, login, getMe } from "./controllers/UserController";
import { getAll, getOne, create, remove, update } from "./controllers/PostController";


mongoose
    .connect('mongodb+srv://admin:8888@cluster0.5chjhac.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB is OK!'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is fine!");
});

app.post('/auth/login', login);
app.post('/auth/reg', registerValidation, register);
app.get('/auth/me', checkAuth, getMe);

app.get('/posts', getAll);
app.get('/posts/:id', getOne);
app.post('/posts', checkAuth, postCreateValidation, create);
app.delete('/posts/:id', checkAuth, remove);
app.patch('/posts', update);

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK!");
});