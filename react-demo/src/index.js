import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import Home from './Home'
import Doctors from './AboutDoctors';
import Dermatology from './Dermatology';
import Nutrition from './Nutrition';
import Dentistry from './Dentistry';
import Login from './Login';
import Profile from './Profile';
import Reservation from './Reservation';
import StaffLogin from './StaffLogin'
import StaffHome from './StaffHome'
import Forget from './Forget';
import ChangePassword from './ChangePassword';
import ResPassword from './Respassword';
import Staff from './StaffRes';
import Sidebar from './Sidebar';
import StaffViewRes from './StaffViewRes';
import Confirmation from './Confirmation';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Doctors/>} />
        <Route path="/derma" element={<Dermatology/>} />
        <Route path="/nutrition" element={<Nutrition/>} />
        <Route path="/dentistry" element={<Dentistry/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/stafflogin" element={<StaffLogin/>} />
        <Route path="/staffhome" element={<StaffHome/>} />
        <Route path="/forgetpassword" element={<Forget/>} />
        <Route path="/profile/changepassword" element={<ChangePassword/>} />
        <Route path="/resetpassword/*" element={<ResPassword />}/>
        <Route path="/modify" element={<Sidebar />}/>
        <Route path="/modify/calendar" element={<Staff />} />
        <Route path="/modify" element={<Sidebar />}/>
        <Route path="/viewReservations" element={<StaffViewRes />}/>
        <Route path="/confirmreservation" element={<Confirmation />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
