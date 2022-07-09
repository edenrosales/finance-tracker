import React from "react";
import {MdOutlineAttachMoney, MdBookmarkBorder, MdBookmark} from 'react-icons/md';
import { useState } from 'react';



const Transaction = ({name,cost,date,note,onDelete,id}) =>{
    const [bookmarked,setBookmarked] = useState(true);

    const deleteTransaction = (bookmarked) => setBookmarked()
    return(
        <div className="border px-4 rounded-lg py-6">
            <div className="flex flex-row items-center">
                {/* this below is going to be logic to make sure that the icon that is shown is according to the
                category that we have selected for the transaction */}
                <MdOutlineAttachMoney className="text-4xl"/>
                <div className=" pl-6 flex flex-col">
                    <div className=" font-medium text-2xl ">{name}</div>
                    <div className="font-light">{date} </div>
                </div>
                <div className=" ml-auto text-2xl font-thin pr-20">${cost}</div>
                {bookmarked ? <MdBookmarkBorder className=" text-3xl hover:border" onClick={() => {setBookmarked(!bookmarked)}}/> : <MdBookmark className=" text-3xl hover:border" onClick={() => {setBookmarked(!bookmarked)}}/> }
                
                <div className=" pl-6 font-thin pr-4 " onClick={()=> {onDelete(id)}}>x</div>
            {/* <div className="translate-x-4">{date}</div> */}
            {/* <div className="translate-x-4">{note}</div> */}
            </div>

        </div>
    );
};

export default Transaction