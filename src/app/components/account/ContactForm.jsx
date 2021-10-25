import React from 'react';
import { Formik, Form, Field } from 'formik';

import { defaulValuesContact } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesContact';
import { schemaFormContact } from './../../shared/constants/formik-yup/yup/yupContact';
import { CustomInput, CustomTextarea} from '../../shared/components/form-and-error-components/InputCustom';
import './../../css/styles-form.css';


/**
 * Component Form Login
 * Use Formik to create the Form
 * 
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormContact = ({ submit, errorLog }) => (

    <Formik initialValues={defaulValuesContact} onSubmit={submit} validationSchema={schemaFormContact}>
    <Form className='flexForm'>
        
        <div className='flexCol'>
            <Field type="text" name="name" placeholder="name" 
            component={ CustomInput } className='styled-input'/>
            <Field type="text" name='lastname' placeholder='lastname' 
            component={ CustomInput } className='styled-input'/>
        </div>
        <div className='w-full my-2'>
            <Field type='email' name='email' placeholder='email' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full my-2'>
            <Field type='text' name='tel' placeholder='tel' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full my-2'>
            <Field as='textarea' type='textarea' name='message' placeholder='message' 
            component={ CustomTextarea } className='styled-input'/>
        </div>
        <div className='w-full my-2 text-center'>
            <button className='btn-form'>
                <div className='btn-form-text'>Envoyer</div>
            </button>
        </div>
        </Form>
    </Formik>
)

/**
 * Component Login
 * 
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 * 
 * See above for information
 * 
 * @author Peter Mollet
 */
const ContactForm = (props) => {
    return (
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-primary-100">
                    NOUS CONTACTER
                </h2>
            </div>
    <FormContact {...props} /> 
</div>
    );
};

export default ContactForm;