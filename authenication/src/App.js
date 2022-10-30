import './App.css';
import Login from "./login.js";
import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import DashBoard from './dashboard.js';



function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login/> }/>
      <Route path='/dashboard' element={ <DashBoard/> }/>
    </Routes>
  );
}

export default App;
