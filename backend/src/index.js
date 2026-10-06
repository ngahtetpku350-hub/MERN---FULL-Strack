import express from 'express';
import "dotenv/config";
import connectDB from './lib/db.js';
import dns from "dns";
import cors from "cors"; // for fullstack / api
import router from './routes/category.js';
import userRouter from './routes/userRoute.js';
import postRouter from './routes/postRoute.js';
import { categoryCreate } from './controllers/categoryController.js';
import categoryRouter from './routes/category.js';
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Routes
app.use('/api/user',userRouter)
app.use('/api/post', postRouter);
app.use('/api/category',categoryRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});