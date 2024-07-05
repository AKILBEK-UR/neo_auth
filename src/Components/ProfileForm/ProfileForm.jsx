import "./ProfileForm.css"
import { useNavigate } from "react-router-dom";
import main_img from "../../assets/illustration.png"

export default function ProfileForm(){
    const navigate = useNavigate();

    return (<div className="mainpage1">     
         <div className="hero1">
            <h1 className="title1">Добро пожаловать!</h1>
            <h3 className="sub-title1">Lorby - Твой личный репетитор</h3>
            <img src={main_img} className="hero-img1" />
        </div>
        <button onClick={() => navigate("/")} className="logout1">
            <p>Выйти</p>            
        </button>  
    </div>)
}