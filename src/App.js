// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/loginpage';
import ALoginPage from './components/adminlogin';
import AdminHome from './components/adminhome';
import Jobsav from './components/jobs';
import ViewInfo from './components/viewinfo';
import ApplyNow from './components/applynow'
import About1 from './components/about';
import Contact from './components/contact';
import Ajobs from './components/ajobs';
import AContact from './components/acontact'
import About2 from './components/aabout'
const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/alogin" element={<ALoginPage />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/jobs" element={<Jobsav />} />
            <Route path="/viewinfo" element={<ViewInfo />} />
            <Route path="/applynow" element={<ApplyNow />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ajobs" element={<Ajobs />} />
            <Route path="/acontact" element={<AContact />} />
            <Route path="/aabout" element={<About2 />} />
        </Routes>
        </Router>
    );
}

export default App;
