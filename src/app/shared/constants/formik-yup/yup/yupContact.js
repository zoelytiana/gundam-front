import * as Yup from 'yup'

export const schemaFormContact = Yup.object().shape({
    name: Yup.string().required("Required input"),
    lastName: Yup.string().required("Required input"),
    email: Yup.string().email('invalid email').required("Required input"),
    tel: Yup.string().required("Required input"),
    message: Yup.string().required("Required input")
})