import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 char, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
    login:yup.string().required("Заполните поле."),
    password: yup.string().min(5,"Пароль должен содержать не менее 5 символов.").required("Заполните поле."),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Пароли должны совпадать.").required("Заполните поле."),
})