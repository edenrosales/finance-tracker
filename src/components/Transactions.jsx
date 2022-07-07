import React from "react";
import Transaction from './Transaction'

const Transactions = ({transactions}) => {
    return(
        <div>
            {transactions.map((transactions)=>(
                <Transaction name={transactions.name} cost={transactions.cost} date={transactions.date} note={transactions.note}/>
            ))}
        </div>
    );
};

export default Transactions;