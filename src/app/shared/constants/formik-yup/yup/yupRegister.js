import * as Yup from 'yup'

export const schemaFormRegister = Yup.object().shape({
    username: Yup.string().required("Required input"),
    password: Yup.string().required("Required input"),
    passwordConfirmation: Yup.string().required("Required input")
})