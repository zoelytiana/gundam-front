import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LockClosedIcon } from '@heroicons/react/solid'

import { defaulValuesForgotPassword } from '../../shared/constants/formik-yup/default-values-form/idefaultValuesForgotPassword';
import { schemaFormForgotPassword } from '../../shared/constants/formik-yup/yup/yupForgotPassword';
import ErrorMessSmall from '../../shared/components/form-and-error-components/ErrorMessSmall';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';

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
const FormForgotPassword = ({ submit, errorLog }) => (
    <Formik initialValues={defaulValuesForgotPassword} onSubmit={submit} validationSchema={schemaFormForgotPassword}>
        <Form className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
                <Field type="email" name="email" placeholder="Entrez votre adresse e-mail" 
                component={ CustomInput } className='rounded-b-md rounded-t-md' noError/>
            </div>
            
            <div>
                <button type="submit" className="group relative btn btn-primary w-full">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-primary-800 group-hover:text-primary-400" aria-hidden="true" />
                    </span>
                    Réinitialiser
                </button>
            </div>
            { errorLog && <ErrorMessSmall middle message="Login inconnu" /> }
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
const ForgotPassword = (props) => {
    return (
        <div className='bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8'>
            <div>
                <div className='flex justify-center'>
                    <img
                        className="h-12 w-auto sm:h-10 cursor-pointer"
                        src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
                        alt=""
                        width={200}
                        height={60}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Réinitialisation du mot de passe
                </h2>
            </div>
            
            <hr />
            <FormForgotPassword {...props} />
        </div>
    );
};

export default ForgotPassword;