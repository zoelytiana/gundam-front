import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesRegister';
import { schemaFormRegister } from './../../shared/constants/formik-yup/yup/yupRegister';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { CustomCheckbox, CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { URL_CGU, URL_LOGIN } from '../../shared/constants/urls/urlConstants';

import '../../assets/styles/register.css'

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

const inscrit = "J'ai déjà un compte. "
const FormRegister = ({ submit, errorLog }) => (
    <Formik initialValues={defaulValuesLogin} onSubmit={submit} validationSchema={schemaFormRegister}>
        <Form className='mt-8 space-y-6'>
            <div className='shadow-sm -space-y-px'>
                <Field type="email" name="email" placeholder="Votre adresse e-mail" 
                component={ CustomInput } className='rounded-none my-3' noError/>
                <Field type='password' name='password' placeholder='Mot de passe' 
                component={ CustomInput } className='rounded-none my-3' noError/>
                <Field type='password' name='passwordConfirmation' placeholder='Confirmation du mot de passe' 
                component={ CustomInput } className='rounded-none my-3' noError/>
            </div>

            <div className="flex items-center">
                <Field name='cgu' component={CustomCheckbox} value={true} />

                <Link to={URL_CGU}>
                <label className="form-check-label" for="flexCheckChecked">
                    J'accepte les<a href={URL_CGU} className="text-red-700"> conditions d'utilisations</a>
                </label>
                </Link>
            </div>
            
            <div className="flex justify-center">
                <button type="submit" className="IncriptionBtn">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-white group-hover:text-primary-400" aria-hidden="true" />
                    </span>
                    <div className="InscriptionSpanText">S'inscrire</div>
                </button>
            </div>
            <div>
                <div className="text-center">
                    <span>{inscrit}</span>
                    <Link to={URL_LOGIN} >
                        <span className='font-medium text-red-700 hover:text-primary-500 cursor-pointer text-center' >
                            Se connecter
                        </span>
                    </Link>
                </div>
            </div>

            { errorLog && <ErrorMessSmall middle message="Les mots de passe ne correspondent pas" /> }
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
const Register = (props) => {
    return (
        <div className='cadreInscription bg-white p-4 shadow space-y-8 py-12 px-4 sm:px-6 lg:px-8'>
            <div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-800 uppercase">
                    Inscrivez-vous gratuitement
                </h1>
            </div>
            
            <hr />
            <FormRegister {...props} />
        </div>
    );
};

export default Register;