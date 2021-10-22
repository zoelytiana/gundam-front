import * as Yup from 'yup'

export const schemaFormLivraison = Yup.object().shape({
    email: Yup.string().email('invalid email').required("Required input"),
    name: Yup.string().required("Required input"),
    lastName: Yup.string().required("Required input"),
    address: Yup.string().required("Required input"),
    address2: Yup.string().required("Required input"),
    phone: Yup.string().required("Required input"),
    city: Yup.string().required("Required input")
})