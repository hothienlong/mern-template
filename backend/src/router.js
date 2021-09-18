import express from 'express';
import userRouter from './routes/users';

const router = express.Router();

router.use('/users', userRouter);

// Add more routes by doing like this:
// router.use("/products", productRouter);
//
// This will add a new route (http://localhost:3000/produccts/) all sub routes like http://localhost:3000/produccts/new
//  should be handled by productRouter

export default router;
