import { body } from "express-validator";

export const registerValidation = [
    body('email').isEmail(),
    body('pass').isLength({ min: 5 }),
    body('fullName').isLength({ min: 3 }),
    body('avatarUrl').optional().isURL(),
];