import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';
import ScriptPage from './pages/ScriptPage';
import MoodBoards from './pages/MoodBoards';
import CallSheet from './pages/Callsheet';
import Contacts from './pages/Contacts';

import SideNavBar from './components/common/SideNavBar';
import { PanoramaVerticalSelectOutlined } from '@mui/icons-material';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container">
        <SideNavBar/>
        <div className="main-content">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/scripts' element={<ScriptPage/>}/>
            <Route exact path='/moodboards' element={<MoodBoards/>}/>
            <Route exact path='/callsheet' element={<CallSheet/>}/>
            <Route exact path='/contactslist' element={<Contacts/>}/>
  
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
    
    {/* <BrowserRouter>
    <div className="container"> 
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/scripts' element={<ScriptPage/>}/>
        <Route exact path='/moodboards' element={<MoodBoards/>}/>
        <Route exact path='/callsheet' element={<CallSheet/>}/>
      </Routes>
    </div>

      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route path='/*' element={<SideNavBar/>}/>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
