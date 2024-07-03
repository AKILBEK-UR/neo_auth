import "../Mainpage/Login.css"
import main_img from "../../assets/illustration.png"
import { useNavigate, Link } from "react-router-dom"
import back from "../../assets/back.svg";

export default function Verification(){

    const navigate = useNavigate();
    
    return <>
        <div className="main_section">
            <button onClick={() => navigate(-1)} className="goback">
                <img src={back} alt="Назад" style={{width:"28px"}}/>
                <p>Назад</p>
            </button>
            <div className="hero">
                <img src={main_img} className="hero-img"/>
                <h1 className="title">Lorby</h1>
                <h3 className="sub-title">Твой личный репетитор</h3>
            </div>
            <div className="login">
                <h2 className="go_reg">Выслали письмо со ссылкой для завершения регистрации на example@gmail.com</h2>
                <p style={{fontSize:"20px"}} className="go_reg">Если письмо не пришло, не спеши ждать совиную почту - лучше проверь ящик “Спам” <br></br>(´｡• ω •｡`)</p>
            </div>
        </div>
    </>
}