import { Transactions } from "../model/transaction.js";
import { User } from "../model/user.js";


export const  getalltransactions = async (req,res)=>{
    const transactions = await Transactions.find({});
    res.json({
        success:true,
        transactions,
    });
   
}

export const addNewTransaction = async (req,res)=>{
  const {fromName , toName , amount } = req.body;
  const fromCustomer = await User.findOne({ name: fromName });
    const toCustomer = await User.findOne({ name: toName });

    if(!fromCustomer || !toCustomer){
        res.send("no user");
    }

    const transaction = await Transactions.create({
        fromName: fromName,
        toName: toName,
        amount: amount,
      });
     
    const fromCustomerbal= fromCustomer.currentbal;
    const toCustomerbal=toCustomer.currentbal;

    const update = await User.findOneAndUpdate(
        { name: fromName },
       {$set: {currentbal : fromCustomerbal - Number(amount) }}
    );

    const update1 = await User.findOneAndUpdate(
        { name: toName },
       {$set: {currentbal : toCustomerbal + Number(amount) }}
    );

    res.send({
        fromCustomer,
        toCustomer,
        message:"successful"
    })
}