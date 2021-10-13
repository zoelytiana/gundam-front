import * as Yup from 'yup'

export const schemaFormForgotPassword = Yup.object().shape({
    username: Yup.string().required("Required input")
})