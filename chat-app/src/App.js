import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainForm from './components/MainForm';
import ChatRoom from './components/ChatRoom';



function App() {
  


  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height : "100vh"}}>
    <BrowserRouter>
    <Routes>

     <Route index element={<MainForm />}/>
     <Route path='/chat/:roomName' element={<ChatRoom />}/>
     <Route path='*' element={<h1>404 Not Found !!</h1>}/>


    </Routes>
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
