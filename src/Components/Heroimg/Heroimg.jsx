import main_img from "../../assets/illustration.png";
import "./Heroimg.css"
export default function Heroimg(){

    return(<>
        <div className="hero">
                <img src={main_img} className="hero-img" />
                <h1 className="title">Lorby</h1>
                <h3 className="sub-title">Твой личный репетитор</h3>
        </div>
    </>)
}