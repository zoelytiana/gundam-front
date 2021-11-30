import * as Yup from 'yup'

export const schemaFormLogin = Yup.object().shape({
    userEmail: Yup.string().required("Required input"),
    userPassword: Yup.string().required("Required input")
})