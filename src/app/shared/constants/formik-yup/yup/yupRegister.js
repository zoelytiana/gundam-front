import * as Yup from 'yup'

export const schemaFormRegister = Yup.object().shape({
    email: Yup.string().required("Required input"),
    password: Yup.string().required("Required input"),
    passwordConfirmation: Yup.string().required("Required input")
})