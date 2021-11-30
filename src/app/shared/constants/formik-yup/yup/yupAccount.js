import * as Yup from 'yup'

export const schemaFormAccount = Yup.object().shape({
    userEmail: Yup.string().required(" Required input"),
    userName: Yup.string().required(" Required input")
})