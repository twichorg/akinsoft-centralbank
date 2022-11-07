import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  // React Router Dom kütüphanesini import ediyoruz.
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  //Can Aktürk 4.11.2022
  return (
    <div className="App">
     <BrowserRouter>                
         <Routes>
         <Route exact path="/" element={<LoginPage/>} />      
          <Route  path="/home" element={<HomePage />}/>     
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
