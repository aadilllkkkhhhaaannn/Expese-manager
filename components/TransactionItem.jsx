import React from "react";

const TransactionItem = ({transaction , editTransaction , deleteTransaction}) => {
  return (
  


    //  conditional styling

    <li className= {transaction.amount > 0 ? "list-group-item rounded-0 bg-success text-light" : "list-group-item rounded-0 bg-dark text-light"}>

          <h4>{transaction.text}</h4>
      <h2>{transaction.amount}</h2>

      <button className="btn btn-outline-light btn-sm rounded-0 float-end" onClick={()=>deleteTransaction (transaction.id) }>
        Delete
      </button>
      <button className="btn btn-outline-light btn-sm rounded-0 float-end" onClick={()=>editTransaction (transaction)}>
        Edit
      </button>
    </li>
  );
};

export default TransactionItem;


// sir vala


// import React from "react";

// const TransactionItem = ({
//   transaction,
//   deleteTransaction,
//   editTransaction,
// }) => {
//   return (
//     <li
//       className={
//         transaction.amount > 0
//           ? "list-group-item rounded-0 bg-success text-light"
//           : "list-group-item rounded-0 bg-danger text-light"
//       }
//     >
//       <h4>{transaction.text}</h4>
//       <h2>{transaction.amount}</h2>

//       <button
//         className="btn btn-outline-light btn-sm rounded-0 float-end"
//         onClick={() => deleteTransaction(transaction.id)}
//       >
//         Delete
//       </button>
//       <button
//         className="btn btn-outline-light btn-sm rounded-0 float-end"
//         onClick={() => editTransaction(transaction)}
//       >
//         Edit
//       </button>
//     </li>
//   );
// };

// export default TransactionItem;
