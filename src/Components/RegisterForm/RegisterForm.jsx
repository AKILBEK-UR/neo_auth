import "./RegisterForm.css";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/register";
import { useNavigate, Link } from "react-router-dom";
import back from "../../assets/back.svg";
import { useState } from "react";
import { register } from "../../store/authSlice";
import { useDispatch } from "react-redux";
export default function RegisterForm() {
    const [alreadyLogined, setAlreadylogined] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        const value = {
            username: values.login,
            password:values.password,
            email:values.email
        }
        try {
            const response = await dispatch(register(value))
            console.log(response)
            if(response?.error?.message ){
                throw new Error();
            }
            navigate("/verification")
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setAlreadylogined('Уже существующий пользователь!');
            }
            console.error('Error fetching login:', error);
            setTimeout(() => {
                setAlreadylogined('');
            }, 3000);
        }
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            login: "",
            password: "",
            email: "",
            confirmPassword:""
        },
        validationSchema: registerSchema,
        onSubmit,
    });

    return (
        <div className="main_section">
            {alreadyLogined && <p className="errorMessage">{alreadyLogined}</p>}
            <button onClick={() => navigate(-1)} className="goback">
                <img src={back} alt="Назад" style={{ width: "28px" }} />
                <p>Назад</p>
            </button>
            <form onSubmit={handleSubmit} autoComplete="off" className="login">
                <div className="tit">
                    <h2 className="go_reg">Создать аккаунт</h2>
                    <h2 className="go_reg">Lorby</h2>
                </div>
                <div className="login_input">
                    <input
                        className={`info ${errors.email && touched.email ? "input-error" : ""}`}
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="Введите email"
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <input
                        className={`info ${errors.login && touched.login ? "input-error" : ""}`}
                        value={values.login}
                        onChange={handleChange}
                        id="login"
                        type="text"
                        placeholder="Введите логин"
                        onBlur={handleBlur}
                    />
                    {errors.login && touched.login && <p className="error">{errors.login}</p>}
                    <input
                        className={`info ${errors.password && touched.password ? "input-error" : ""}`}
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        type="password"
                        placeholder="Пароль"
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <p className="error">{errors.password}</p>}
                    <input
                        className={`info ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}`}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        id="confirmPassword"
                        type="password"
                        placeholder="Подтвердите пароль"
                        onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="log-btn">Далее</button>
            </form>
        </div>
    );
}