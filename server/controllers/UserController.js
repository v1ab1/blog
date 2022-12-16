import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";

export const register = async (req,res) => {
    try {
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
}

export const login = async (req, res) => {
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
}

export const getMe = async (req, res) => {
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
}