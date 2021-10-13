import * as Yup from 'yup'

export const schemaFormRegister = Yup.object().shape({
    username: Yup.string().required("Required input"),
    password: Yup.string().required("Required input"),
    password2: Yup.string().required("Required input")
})