import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Viewer from "./pages/viewer/Viewer";
import Register from "./pages/register/Register";
import Login from './pages/login/Login';
import './App.scss';

function App() { 
  const user = true;
  return (
    <Router>
      <Routes>      
          <Route path="/" element={user ? <Home /> : <Navigate to='/register' replace />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to='/' replace />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' replace />} />
          { user && (
            <>
              <Route path="/movies" element={<Home type='movies'/>}/>
              <Route path="/series" element={<Home type='series'/>}/>  
              <Route path="/watch" element={<Viewer />} />  
            </>
          )}         
      </Routes>
    </Router>
  );
}

export default App;
