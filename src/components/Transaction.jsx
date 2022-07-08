import React from "react";

const Transaction = ({name,cost,date,note}) =>{
    return(
        <div className="shadow-lg border px-4">
            <div className=" font-medium text-2xl font-light">{name}</div>
            <div className=" translate-x-4">{date} {cost}</div>
            {/* <div className="translate-x-4">{date}</div> */}
            <div className="translate-x-4">{note}</div>
        </div>
    );
};

export default Transaction