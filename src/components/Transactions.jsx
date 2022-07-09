import React from "react";
import Transaction from './Transaction'

const Transactions = ({transactions, onDelete,bookmarkChange}) => {
    return(
        <div className="flex flex-col space-y-4 py-4 px-16 pb-10">
            {transactions.map((transactions)=>(
                    <Transaction onDelete={onDelete} id={transactions.id}className=""name={transactions.name} cost={transactions.cost} date={transactions.date} note={transactions.note} bookmarkChange={bookmarkChange} bookmarked={transactions.reminder}/>
            ))}
        </div>
    );
};

export default Transactions;