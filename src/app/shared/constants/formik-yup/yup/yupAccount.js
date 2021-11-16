import * as Yup from 'yup'

export const schemaFormAccount = Yup.object().shape({
    email: Yup.string().required(" Required input"),
    name: Yup.string().required(" Required input"),
    firstName: Yup.string().required("Required input"),
    phone: Yup.string().required(" Required input"),
    birthday: Yup.string().required("Required input"),
    street: Yup.string().required("Required input"),
    city: Yup.string().required("Required input"),
    country: Yup.string().required("Required input"),
    password: Yup.string().required("Required input")
})