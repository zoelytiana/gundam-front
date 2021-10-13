import * as Yup from 'yup'

export const schemaFormForgotPassword = Yup.object().shape({
    email: Yup.string().required("Required input")
})