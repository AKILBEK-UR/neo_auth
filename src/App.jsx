import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Mainpage/Login';
import Register from "./pages/Register/Register"
export default function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </>);
}