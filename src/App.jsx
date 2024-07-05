import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register"
import Verification from './pages/Verification/Verification';
import Profile from './pages/Profile/Profile';
export default function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/verification' element = {<Verification/>} />
        <Route path="/profile" element = {<Profile />} />
    </Routes>
    </>);
}