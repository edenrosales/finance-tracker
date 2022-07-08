import React from "react";
import Transaction from './Transaction'

const Transactions = ({transactions}) => {
    return(
        <div className="flex flex-col space-y-4 py-4 px-2">
            {transactions.map((transactions)=>(
                <Transaction className=""name={transactions.name} cost={transactions.cost} date={transactions.date} note={transactions.note}/>
            ))}
        </div>
    );
};

export default Transactions;