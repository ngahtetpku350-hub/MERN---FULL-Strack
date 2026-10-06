import { categoryCreate, categoryList } from "../controllers/categoryController.js";
import express from 'express';

const router = express.Router();

router.get('/list',categoryList)
router.post('/create',categoryCreate)

const categoryRouter = router;
export default categoryRouter;