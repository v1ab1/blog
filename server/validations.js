import { body } from "express-validator";

export const registerValidation = [
    body('email', 'invalid mail format').isEmail(),
    body('pass', 'password must be at least 5 characters').isLength({ min: 5 }),
    body('fullName', "name must be at least 3 characters").isLength({ min: 3 }),
    body('avatarUrl', "Invalid avatar link").optional().isURL()
]; 

export const loginValidation = [
    body('email', 'invalid mail format').isEmail(),
    body('pass', 'password must be at least 5 characters').isLength({ min: 5 })
]; 

export const postCreateValidation = [
    body('title', 'Enter the title of the article').isLength({ min: 3 }).isString(),
    body('text', 'Enter article text').isLength({ min: 3 }).isString(),
    body('tags', 'Wrong tag format').optional().isString(),
    body('imageUrl', 'Invalid image link').optional().isString(),
]; 