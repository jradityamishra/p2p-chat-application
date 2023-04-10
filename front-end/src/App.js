import {io} from "socket.io-client";
import './App.css';
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './main page/Home';
import Chat from "./main page/Chat";
const socket=io("http://localhost:4500/",{transports:['websocket']});

function App() {
 
  return (
   <>
   <div className="app">
   
   <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/chat" Component={Chat}/>
    </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}

export default App;
