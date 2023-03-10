import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';
import ScriptPage from './pages/ScriptPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/scripts' element={<ScriptPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
