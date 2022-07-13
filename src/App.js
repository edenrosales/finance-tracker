// import logo from './logo.svg';
import './App.css';
import Mainscreen from './components/Mainscreen';
import Rightbar from './components/Rightbar';
import { useState } from 'react';
import Transactions from './components/Transactions'
import {Scrollbars} from 'react-custom-scrollbars-2'
import Dropdown from './components/Dropdown'
import AddTransaction from './components/AddTransactionWindow'
import AddTransactionWindow from './components/AddTransactionWindow';


function App() {
  const [transactions, setTransactions] = useState([
      {
          id:1,
          name:"Groceries",
          cost:50,
          date:"July 5th",
          note:"Food for the week",
          reminder: false,
      },
      {
          id:2,
          name:"Candy",
          cost:2,
          date:"July 6th",
          note:"Just something at the gas station",
          reminder: false,
      },
      {
          id:3,
          name:"Movies",
          cost:20,
          date:"July 6th",
          note:"Went to watch a movie with some friends",
          reminder: false,
          
      },
      {
        id:5,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:6,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:7,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:8,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:9,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:10,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:11,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:12,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      },
      {
        id:13,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
        reminder: false,
      }
  
  ])
  const [transactionOrder, setTransactionOrder] = useState(1);
  const onDeleteTransaction = (id) => setTransactions(transactions.filter( (transaction) => (id !== transaction.id)))
  const bookmarkChange = (id) => setTransactions( transactions.map((transaction)=>(transaction.id===id ? { ...transaction,reminder:!transaction.reminder } : transaction)))
  const addTransaction = (name,date,price) =>{
    const temp = {
      id : Math.floor(Math.random() * 10000) +1, 
      name : name,
      date: date,
      cost: price,
    }
    setTransactions([...transactions,temp])
  }
  function setView(transactionOrder) { 
    if(transactionOrder === 1)
    return(<Transactions className="" transactions={transactions} onDelete={onDeleteTransaction} bookmarkChange = {bookmarkChange}/>)
    else 
    return(<div>this is working</div>)
  }
  
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="bg-blue-400 h-16 flex-none"></div>
        {/* <div className="m-auto">
          <Dropdown/>
        </div> */}
        <div className="flex flex-row h-full w-full">   
          <div className ="basis-3/4 flex flex-col bg-red-600 text-white overflow-y-auto">
            <div className="flex flex-row">
              <div className="mr-auto py-6 px-16 z-10">
                <AddTransactionWindow addTransaction={addTransaction}/>
              </div>
              <div className="ml-auto py-6 px-16 z-10">
                <Dropdown setTransactionOrder={setTransactionOrder} transactionOrder={transactionOrder}/>
              </div>
            </div>
            <Scrollbars className="z-0" >
              {setView(transactionOrder)}
              {/* <Transactions className="" transactions={transactions} onDelete={onDeleteTransaction} bookmarkChange = {bookmarkChange}/> */}
            </Scrollbars>
          </div>
          <div className= "basis-1/4 bg-black text-white overflow-y-auto"><Rightbar/></div>
        </div>
      </div>

    </div>

  );
}

export default App;

