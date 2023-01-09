import express, { application } from "express";
import multer from "multer";
import mongoose from "mongoose";
import { registerValidation, loginValidation, postCreateValidation } from "./validations.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { register, login, getMe } from "./controllers/UserController.js";
import { getAll, getOne, create, remove, update } from "./controllers/PostController.js";


mongoose
    .connect('mongodb+srv://admin:8888@cluster0.5chjhac.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB is OK!'))
    .catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, "uploads");
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer ({ storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send("Server is fine!");
});

app.post('/auth/login', loginValidation, handleValidationErrors, login);
app.post('/auth/reg', registerValidation, handleValidationErrors, register);
app.get('/auth/me', checkAuth, getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.get('/posts', getAll);
app.get('/posts/:id', getOne);
app.post('/posts', checkAuth, postCreateValidation, create);
app.delete('/posts/:id', checkAuth, remove);
app.patch('/posts/:id', checkAuth, update);

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK!");
});