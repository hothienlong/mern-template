import express from 'express';
import getUserController from '../controllers/users/getUserController';

const router = express.Router();

router.get('/', getUserController);

// Add more routes by doing like this:
// router.post("/", createUserController);
//
// This will add a new route (http://localhost:3000/users/) with POST method handled with createUserController

export default router;
