import React from 'react';
import { Formik, Form, Field } from 'formik';

import { defaulValuesLivraison } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesLivraison';
import { schemaFormLivraison } from './../../shared/constants/formik-yup/yup/yupLivraison';
import { CustomInput, CustomCheckbox } from '../../shared/components/form-and-error-components/InputCustom';
import amazon from '../../assets/images/amazon_pay2.png'

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
const FormLivraison = ({ submit, errorLog }) => (

    <Formik initialValues={defaulValuesLivraison} onSubmit={submit} validationSchema={schemaFormLivraison}>
    <Form className='flexForm'>
        <div className='w-full my-2'>
            <Field type='email' name='email' placeholder='email' 
            component={ CustomInput } className='styled-input'/>
        </div>
        <div className='flexCol'>
                <Field type="text" name="name" placeholder="name" 
                component={ CustomInput } className='styled-input'/>
                <Field type="text" name='lastName' placeholder='lastName' 
                component={ CustomInput } className='styled-input'/>
        </div>
        <div className='w-full my-2'>
            <Field type='address' name='address' placeholder='address' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full my-2'>
            <Field type='address2' name='address2' placeholder='address2' 
            component={ CustomInput } className='styled-input'/>
        </div>
        <div className='w-full my-2'>
            <Field type='text' name='city' placeholder='city' 
            component={ CustomInput } className='styled-input'/>
        </div>    
        <div className='w-full my-2'>
            <Field type='text' name='phone' placeholder='phone (optional)' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full flex my-4'>
            <div className='center'>
            <Field type='checkbox' name='save' placeholder='save' 
            component={ CustomCheckbox } className='styled-input' label ='Sauvegarder mes données'/>
            </div>
        </div>
        <div className='center'>
            <div className='form-shadow'>
            <img src={amazon} alt='Amazon'/>
            </div>
        </div>

        <div className='w-full my-4 text-center'>
            <button className='btn-form'>
                <div className='btn-form-text'>VOIR MON PANIER</div>
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
const Livraison = (props) => {
    return (
<div className="max-w-md mx-auto bg-form rounded-xl shadow-md overscroll-auto md:max-w-2xl">

            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold">
                    INSTRUCTIONS DE LIVRAISON
                </h2>
                <p className='note'>Vous avez déjà un compte? <a href='/connect'>Se connecter</a></p>
            </div>
    <FormLivraison {...props} /> 
</div>
    );
};

export default Livraison;