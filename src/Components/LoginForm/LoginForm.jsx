import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

export default function LoginForm() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const response = await dispatch(login({ username, password }));
            if (response?.error?.message) {
                throw new Error(response.error.message);
            }
            navigate("/profile");
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
        // Optionally, clear the inputs after submission
        // setPassword('');
        // setUsername('');
    };

    return (
        <div className="main_section">
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <form onSubmit={onSubmit} autoComplete="off" className="login">
                <h2 className="go_reg">Вэлком бэк!</h2>
                <div className="login_input">
                    <input
                        className="info"
                        value={username}
                        ref={userRef}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        placeholder="Введите логин"
                        required
                    />
                    <input
                        className="info"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        placeholder="Пароль"
                        required
                    />
                </div>
                <button type="submit" className="log-btn">Войти</button>

                <Link to={`/register`}><button style={{ fontSize: "16px", fontWeight: "600" }}>У меня еще нет аккаунта</button></Link>
            </form>
        </div>
    );
}
