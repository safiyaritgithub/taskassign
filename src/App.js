import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Navbar} from './components/navbar'
import {Signupform} from './pages/signup/signup'
import {Loginform} from './pages/login/login'
import {Home} from './pages/home/home'





function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signupform/>}/>
          <Route path="/login" element={<Loginform/>} />


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
