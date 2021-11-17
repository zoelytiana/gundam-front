import * as Yup from 'yup'

export const schemaFormAccount = Yup.object().shape({
    email: Yup.string().required(" Required input"),
    name: Yup.string().required(" Required input")
})