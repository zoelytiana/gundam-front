import React from 'react';
import { Formik, Form, Field } from 'formik';

import { defaulValuesLivraison } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesLivraison';
import { schemaFormLivraison } from './../../shared/constants/formik-yup/yup/yupLivraison';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
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
const FormLivraison = ({ submit, errorLog }) => (

    <Formik initialValues={defaulValuesLivraison} onSubmit={submit} validationSchema={schemaFormLivraison}>
    <Form className='flexForm'>
        <div className='w-full my-2'>
            <Field type='email' name='email' placeholder='email' 
            component={ CustomInput } className='styled-input'/>
        </div>
        <div className='w-full my-2'>
            <Field type="text" name="name" placeholder="name" 
            component={ CustomInput } className='styled-input'/>
        </div>
        <div className='w-full my-2'>
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
            <Field type='text' name='phone' placeholder='phone' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full my-2'>
            <Field type='text' name='city' placeholder='city' 
            component={ CustomInput } className='styled-input'/>
        </div>

        <div className='w-full flex my-2'>
            <Field type='checkbox' name='save' placeholder='save' 
            component={ CustomInput } className='styled-input'/>
            <label className=''>Sauvegarder mes données</label>
        </div>


        <div className='w-full my-2 text-center'>
            <button className='btn'>
                VOIR MON PANIER
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
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overscroll-auto md:max-w-2xl">

            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary-100">
                    INSTRUCTION DE LIVRAISON
                </h2>
            </div>
    <FormLivraison {...props} /> 
</div>
    );
};

export default Livraison;