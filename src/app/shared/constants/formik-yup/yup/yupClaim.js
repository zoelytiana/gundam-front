import * as Yup from 'yup'

export const schemaFormClaim = Yup.object().shape({
    message: Yup.string().required("Required input")
})