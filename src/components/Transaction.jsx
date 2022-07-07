import React from "react";

const Transaction = ({name,cost,date,note}) =>{
    return(
        <div>
            <div className="">{name}</div>
            <div className="">{cost}</div>
            <div className="">{date}</div>
            <div className="bottom-2">{note}</div>
        </div>
    );
};

export default Transaction