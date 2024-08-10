
import { createContext, useState } from "react";


const TransactionContext = createContext()

export const TransactionProvider = ({children})=>{

    const [transactions , setTransactions] = useState([

        {id : 1, Text : "sallary", amount : 100000},
        {id : 2, Text : "Rent", amount : -10000},
    ])


    const [edit , setEdit] = useState({

        transaction:{},
        isEdit : false,

    })

    const saveTransaction = (text , amount) =>{
        const newTransaction = {
          id : crypto.randomUUID(),
          text,
          amount : Number(amount),
        }
      
        console.log(newTransaction)
      
      
        setTransactions([newTransaction , ...transactions])
      
      
      }


      const editTransaction = (transaction)=>{

        setEdit({
          
          transaction : transaction,
          isEdit : true,
      
        })
      
      }


      const deleteTransaction = (id)=>{
        setTransactions(transactions.filter((item)=>item.id !==id))
      
        // toast.error("transaction Delete")
      
      }


    
    

return(

<TransactionContext.Provider value={{transactions , setTransactions , edit, saveTransaction, editTransaction, deleteTransaction}}>

    {children}

</TransactionContext.Provider>
)
}

export default TransactionContext;




