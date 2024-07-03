import * as yup from "yup";

export const loginSchema = yup.object().shape({
    login:yup.string().required("Заполните поле."),
    password: yup.string().required("Заполните поле."),
})