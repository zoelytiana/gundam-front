import * as Yup from 'yup'

export const schemaFormNewsLetter = Yup.object().shape({
    email: Yup.string().required("Required input")
})