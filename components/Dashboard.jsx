// import React, { useState } from "react";
import TransactionContext from "../src/context/TransactionContext";
import React, { useContext } from "react";

const Dashboard = () => {

 const {transactions} = useContext (TransactionContext)



  const income = transactions.filter((transaction)=> transaction.amount > 0)
  .reduce((p , c)=>{
   return p + c.amount
  }, 0)


  const expense = transactions.filter((transaction)=> transaction.amount < 0)
  .reduce((p , c)=>{
   return (p + c.amount)
  }, 0)


  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  return (
    <div className="row my-2 g-3">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card p-3 bg-success text-light rounded-0">
          <h4>Total Income : </h4>
          <h1>{income}</h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card p-3 bg-danger text-light rounded-0">
          <h4>Total Expense : </h4>
          <h1>{expense}</h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="card p-3 bg-warning rounded-0">
          <h4>Total Balance : </h4>
          <h1>{balance}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
