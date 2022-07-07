// import logo from './logo.svg';
import './App.css';
import Mainscreen from './components/Mainscreen';
import Rightbar from './components/Rightbar';
import { useState } from 'react';
import Transactions from './components/Transactions'

function App() {
  const [transactions, setTransactions] = useState([
      {
          id:1,
          name:"Groceries",
          cost:50,
          date:"July 5th",
          note:"Food for the week",
      },
      {
          id:2,
          name:"Candy",
          cost:2,
          date:"July 6th",
          note:"Just something at the gas station",
      },
      {
          id:3,
          name:"Movies",
          cost:20,
          date:"July 6th",
          note:"Went to watch a movie with some friends",
      },
      {
        id:5,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:6,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:7,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:8,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:9,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:10,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:11,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:12,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      },
      {
        id:13,
        name:"blah",
        cost:20,
        date:"July 6th",
        note:"blah",
      }
  
  ])
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="bg-blue-400 h-16 flex-none">

        </div>
        <div className="flex flex-row h-full w-full">   
          <div className ="basis-3/4 bg-red-600 text-white overflow-y-auto">
            <Transactions transactions={transactions}/>
          </div>
          <div className= "basis-1/4 bg-black text-white overflow-y-auto"><Rightbar/></div>
        </div>
      </div>

    </div>

  );
}

export default App;

