import "../Mainpage/Login.css"
import main_img from "../../assets/illustration.png"
import { useFormik } from "formik"
import { registerSchema } from "../../schemas/register"

export default function Register(){
    const onSubmit = () => {
        console.log("Submitted!");
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{
            login: "",
            password:"",
        },
        validationSchema: registerSchema,
        onSubmit,
    });
    console.log(errors)
    return <>
        <div className="main_section">
            <div className="hero">
                <img src={main_img} />
                <h1 className="title">Lorby</h1>
                <h3 className="sub-title">Твой личный репетитор</h3>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off" className="login">
                <div>
                    <h2 className="go_reg">Создать аккаунт</h2>
                    <h2 className="go_reg">Lorby</h2>
                </div>
                <div className="login_input">
                    <input
                        className={`info ${errors.login && touched.login ? "input-error" : "" }`}
                        value={values.login}
                        onChange={handleChange}
                        id="login"
                        type="text"
                        placeholder="Введите логин"
                        onBlur={handleBlur}
                    />
                    {errors.login && touched.login && <p className="error">{errors.login}</p>}
                    <input
                        className={`info ${errors.password && touched.password ? "input-error" : "" }`}
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        type="password"
                        placeholder="Пароль"
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="log-btn">Войти</button>
            </form>
        </div>
    </>
}