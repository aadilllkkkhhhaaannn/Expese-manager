import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import TransactionContext from "../src/context/TransactionContext";

const TransactionsList = () => {
  const { transactions, deleteTransaction, editTransaction } =
    useContext(TransactionContext);

  return (
    <div>
      <h1 className="text-secondary">Transactions : </h1>
      <ul className="my-3 list-group">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;

// sir vala

// import React from "react";
// import TransactionItem from "./TransactionItem";

// const TransactionsList = ({
//   transactions,
//   deleteTransaction,
//   editTransaction,
// }) => {
//   if (transactions.length === 0) {
//     return (
//       <h1 className="text-center my-3 text-secondary">No Transactions Yet..</h1>
//     );
//   }

//   return (
//     <div>
//       <h1 className="text-secondary">Transactions : </h1>
//       <ul className="my-3 list-group">
//         {transactions.map((transaction) => (
//           <TransactionItem
//             key={transaction.id}
//             transaction={transaction}
//             deleteTransaction={deleteTransaction}
//             editTransaction={editTransaction}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionsList;
