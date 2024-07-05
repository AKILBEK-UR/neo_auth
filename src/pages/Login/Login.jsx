import LoginForm from "../../Components/LoginForm/LoginForm";
import Heroimg from "../../Components/Heroimg/Heroimg";
import "./Login.css"
export default function Login(){
    return(<>
        <div className="mainpage">
            <Heroimg />
            <LoginForm />
        </div>
    </>)
}