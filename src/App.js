// import logo from './logo.svg';
import './App.css';
import Mainscreen from './components/Mainscreen';
import Rightbar from './components/Rightbar';

function App() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="bg-blue-400 h-16">

        </div>
        <div className="flex flex-row h-full w-full">   
          <div className ="basis-3/4 bg-red-600 text-white overflow-y-auto"></div>
          <div className= "basis-1/4 bg-black text-white overflow-y-auto"><Rightbar/></div>
        </div>
      </div>

    </div>

  );
}

export default App;

