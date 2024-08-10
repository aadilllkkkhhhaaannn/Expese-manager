// import React, { useContext, useState } from "react";
import Form from "../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../components/Dashboard";
import TransactionsList from "../components/TransactionList";
import Navbar from "../components/Navbar";
import TransactionContext, { TransactionProvider } from "./context/TransactionContext";

const App = () => {



  return (
    <TransactionProvider>
      <Navbar />
      <div className="container p-5">
        <Form />
        <Dashboard/>
        <TransactionsList />
        <ToastContainer />
      </div>
      </ TransactionProvider>
  );
};

export default App;
  

  // const {transaction, setTransactions} = useContext(TransactionContext)
  // save Transaction

  // const saveTransaction = (text , amount)=>{
  //   setTransactions([...transactions,
  //     {id: crypto.randomUUID(), text, amount: parseInt(amount)},
  //   ])
  //   // console.log(text , amount)
  // }
  // toast("Transaction success!!")


// delete Transaction

// const deleteTransaction = (id)=>{
//   setTransactions(transactions.filter((item)=>item.id !== id))
// }

// edit Transaction

// const editTransaction = (transaction)=>{
//   console.log(transaction)
// }












// mera
// save transaction



// dlelete transaction




// edit


  // const [edit , setEdit] = useState({
  //   transaction : {},
  //   isEdit : false
  // })















// sir vala

// const App = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [edit, setEdit] = useState({
//     transaction: {},
//     isEdit: false,
//   });

//   const saveTransaction = (text, amount) => {
//     setTransactions([
//       { id: crypto.randomUUID(), text, amount: parseInt(amount) },
//       ...transactions,
//     ]);
//     // toast.success("Transaction Success!!");
//   };

//   const deleteTransaction = (id) => {
//     setTransactions(transactions.filter((item) => item.id !== id));

//     // toast.error("Transaction Deleted!!");
//   };

//   const editTransaction = (transaction) => {
//     setEdit({
//       transaction: transaction,
//       isEdit: true,
//     });
//   };

//   const updateTransaction = (updatedTransaction) => {
//     setTransactions(
//       transactions.map((item) =>
//         item.id === updatedTransaction.id ? updatedTransaction : item
//       )
//     );

//     setEdit({ transaction: {}, isEdit: false });

//     // toast.success("Transaction Updated!!");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container p-5">
//         <Form
//           saveTransaction={saveTransaction}
//           edit={edit}
//           updateTransaction={updateTransaction}
//         />
//         <Dashboard transactions={transactions} />
//         <TransactionsList
//           transactions={transactions}
//           deleteTransaction={deleteTransaction}
//           editTransaction={editTransaction}
//         />
//         {/* <ToastContainer /> */}
//       </div>
//     </>
//   );
// };

// // PreventEvent.Default()

// export default App;



