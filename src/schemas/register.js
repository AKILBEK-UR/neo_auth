import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 char, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
    email:yup.string().email("Введите действительный адрес электронной почты.").required("Заполните поле."),
    login:yup.string().required("Заполните поле.").matches(/^[a-zA-Z0-9]*$/, 'Логин должен содержать только буквы и цифры.'),
    password: yup
    .string()
    .min(8,"Пароль должен содержать не менее 8 символов.")
    .max(15,"Пароль должен содержать не более 15 символов.")
    .required("Заполните поле.")
    .test(
        "uppercase",
        "Пароль должен содержать хотя бы одну заглавную букву.",
        value => /[A-Z]/.test(value)
    )
    .test(
        "lowercase",
        "Пароль должен содержать хотя бы одну строчную букву.",
        value => /[a-z]/.test(value)
    )
    .test(
        "number",
        "Пароль должен содержать хотя бы одну цифру.",
        value => /\d/.test(value)
    )
    .test(
        "special-character",
        "Пароль должен содержать хотя бы один специальный символ.",
        value => /[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]/.test(value)
    ),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Пароли должны совпадать.").required("Заполните поле."),
})