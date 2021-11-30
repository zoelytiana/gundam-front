import * as Yup from 'yup'

export const schemaFormRegister = Yup.object().shape({
    userEmail: Yup.string().required("Required input"),
    userPassword: Yup.string().required("Required input"),
    userPasswordConfirmation: Yup.string().required("Required input")
})