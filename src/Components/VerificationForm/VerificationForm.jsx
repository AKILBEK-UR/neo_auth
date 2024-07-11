import "./VerificationForm.css"
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.svg"
export default function VerificationForm(){

    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return(<>
        <button onClick={() => navigate(-1)} className="goback">
                <img src={back} alt="Назад" style={{width:"28px"}}/>
                <p>Назад</p>
            </button>
            <div className="login">
                <h2 className="go_reg">Выслали письмо со ссылкой для завершения регистрации на вашу почту.</h2>
                <p style={{fontSize:"20px"}} className="go_reg">Если письмо не пришло, не спеши ждать совиную почту - лучше проверь ящик “Спам” <br></br>(´｡• ω •｡`)</p>
                <button onClick={handleClick}>Авторизоватся</button>
            </div>
    </>)
}