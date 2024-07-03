import "./Login.css";
import main_img from "../../assets/illustration.png";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/login";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState("")
    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`https://lorby.online/api/v1/auth/login`, {
                username: values.login,
                password: values.password
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Неверный пароль или логин!');
            } else {
                setErrorMessage('An error occurred. Please try again later.');
            }
            console.error('Error fetching login:', error);
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    return (
        <div className="main_section">
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <div className="hero">
                <img src={main_img} className="hero-img" />
                <h1 className="title">Lorby</h1>
                <h3 className="sub-title">Твой личный репетитор</h3>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off" className="login">
                <h2 className="go_reg">Вэлком бэк!</h2>
                <div className="login_input">
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
                </div>
                <button type="submit" className="log-btn">Войти</button>
                <Link to={`/register`}><button style={{ fontSize: "16px", fontWeight: "600" }}>У меня еще нет аккаунта</button></Link>
            </form>
        </div>
    );
}
