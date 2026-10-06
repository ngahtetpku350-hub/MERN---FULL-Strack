import express from "express";
import { postCreate, postDelete, postDetail, postList, postUpdate } from "../controllers/postController.js";

// path in python djnago
const router = express.Router();

router.get('/list',postList)
router.post('/create',postCreate)
router.put('/update/:id',postUpdate)
router.get('/detail/:id',postDetail)
router.delete('/delete/:id',postDelete)

const postRouter = router;
export default postRouter;