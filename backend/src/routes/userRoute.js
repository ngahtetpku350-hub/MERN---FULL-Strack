import express from "express";
import { userLists } from "../controllers/userController.js";

const router = express.Router()

router.get('/list',userLists)
const userRouter = router;
export default userRouter;