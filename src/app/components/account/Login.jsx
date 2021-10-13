import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { CustomCheckbox, CustomInput } from '../../shared/components/form-and-error-components/InputCustom';

import { URL_FORGOTPASSWORD, URL_REGISTER } from './../../shared/constants/urls/urlConstants';

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
const membre = "Vous n'êtes pas encore membre ? "

const FormLogin = ({ submit, errorLog }) => (
    <Formik initialValues={defaulValuesLogin} onSubmit={submit} validationSchema={schemaFormLogin}>
        <Form className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
                <Field type="email" name="email" placeholder="Login" 
                component={ CustomInput } className='rounded-none rounded-t-md' noError/>
                <Field type='password' name='password' placeholder='Password' 
                component={ CustomInput } className='rounded-none rounded-b-md' noError/>
            </div>

            <div className="flex items-center justify-between">
                <Field name='rememberMe' label='Se souvenir de moi' component={CustomCheckbox} value={true} />
                <div className="text-sm">
                    <Link to={URL_FORGOTPASSWORD} >
                        <span className='font-medium text-primary-600 hover:text-primary-500 cursor-pointer' >
                            Mot de passe oublié ?
                        </span>
                    </Link>
                </div>
            </div>
            
            <div>
                <button type="submit" className="group relative btn btn-primary w-full">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-primary-800 group-hover:text-primary-400" aria-hidden="true" />
                    </span>
                    Sign in
                </button>
            </div>
            <div>
                <div className="text-center">
                    <span>{membre}</span>
                    <Link to={URL_REGISTER} >
                        <span className='font-medium text-primary-600 hover:text-primary-500 cursor-pointer text-center' >
                            Créer un compte
                        </span>
                    </Link>
                </div>
            </div>
            { errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" /> }
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
const Login = (props) => {
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
                    Se connecter à son compte
                </h2>
            </div>
            
            <hr />
            <FormLogin {...props} />
        </div>
    );
};

export default Login;