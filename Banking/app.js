import express from "express";
import userRouter from "./routes/user.js";
import transactionRouter from "./routes/transaction.js";
export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route
app.use("/users", userRouter);
app.use("/transactions" , transactionRouter);

app.get("/", (req, res) => {
    res.send("Nice working");
  });