import express from "express";
import { getalltransactions , addNewTransaction } from "../controllers/transaction.js";
const router = express.Router();

router.get("/alltransaction" , getalltransactions);
router.post("/transfer" , addNewTransaction);

export default router;