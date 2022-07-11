import React from "react";
import {MdOutlineAttachMoney, MdBookmarkBorder, MdBookmark, MdImportContacts} from 'react-icons/md';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'




const Transaction = ({name,cost,date,note,onDelete,id,bookmarked,bookmarkChange}) =>{
    // const [bookmarked,setBookmarked] = useState(true);

    // const deleteTransaction = (bookmarked) => setBookmarked()
    var coffee = faCoffee
    return(
        
        <div className="border px-4 rounded-lg py-6">
            <div className="flex flex-row items-center">
                {/* this below is going to be logic to make sure that the icon that is shown is according to the
                category that we have selected for the transaction */}
                <MdOutlineAttachMoney className="text-4xl"/>
                <div className=" pl-6 flex flex-col">
                    <div className=" font-medium text-2xl " >{name}</div>
                    <div className="font-light">{date} </div>
                </div>
                
                <div className=" ml-auto text-2xl font-thin pr-20">${cost}</div>
                {bookmarked ? <MdBookmark className=" text-3xl hover:border" onClick={() => {bookmarkChange(id)}}/> : <MdBookmarkBorder className=" text-3xl hover:border" onClick={() => {bookmarkChange(id)}}/> }
                {/* <MdBookmarkBorder className=" text-3xl hover:border" onClick={() => {bookmarkChange(id); console.log(bookmarked)}}/> */}
                {/* <Icon icon = {MdOutlineAttachMoney}/> */}
                <div className=" pl-6 font-thin pr-4 " onClick={()=> {onDelete(id)}}>x</div>
            {/* <div className="translate-x-4">{date}</div> */}
            {/* <div className="translate-x-4">{note}</div> */}
            
            </div>

        </div> 
    );
};

export default Transaction