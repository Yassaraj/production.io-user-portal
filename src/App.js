import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';
import ScriptPage from './pages/ScriptPage';
import MoodBoards from './pages/MoodBoards';
import CallSheet from './pages/Callsheet';

import SideNavBar from './components/common/SideNavBar';
import { PanoramaVerticalSelectOutlined } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route path='/*' element={<SideNavBar/>}/>
      </Routes>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/scripts' element={<ScriptPage/>}/>
        <Route exact path='/moodboards' element={<MoodBoards/>}/>
        <Route exact path='/callsheet' element={<CallSheet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
