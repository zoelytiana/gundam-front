import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { PencilAltIcon } from '@heroicons/react/solid'
import { schemaFormAccount } from './../../shared/constants/formik-yup/yup/yupAccount';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { URL_CGU} from '../../shared/constants/urls/urlConstants';

import ModalAccount from "./ModalAccount";
import ModalAccountAddress from "./ModalAccountAddress";
import ModalAccountPassword from "./ModalAccountPassword";

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

const FormAccount = ({ submit, submitPassword, errorLog, currentAccount}) => {

    const [openModalAccount, setOpenModalAccount] = useState(false);
    const [openModalAddress, setOpenModalAddress] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);
    console.log('currentaccount', currentAccount)
    return (
    /*<Formik onSubmit={submit} validationSchema={schemaFormAccount } initialValues={currentAccount[0]}>
        <Form className='mt-8 space-y-6'>*/
        <div>
        
            <h2>Mes Informations <a href='#' className="text-red-700" onClick={() => setOpenModalAccount(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
            
                <input type="email" placeholder={currentAccount[0].email} className='rounded-none my-3'/>
                <input type='text'  placeholder={currentAccount[0].name} className='rounded-none my-3'/>
                <input type='text' placeholder={currentAccount[0].firstName} className='rounded-none my-3' />
                <input type='text'  placeholder={currentAccount[0].phone} className='rounded-none my-3' />
                <input type='text'  placeholder={currentAccount[0].birthday} className='rounded-none my-3' />
            </div>
        </fieldset>
            <ModalAccount toggleModal={openModalAccount} setToggleModal={setOpenModalAccount} submit={submit} currentAccount={currentAccount} />

            <h2>Mon adresse de facturation <a href='#' className="text-red-700" onClick={() => setOpenModalAddress(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="text"  placeholder={currentAccount[0].street} className='rounded-none my-3'/>
                <input type='text'  placeholder={currentAccount[0].city} className='rounded-none my-3'/>
                <input type='text'  placeholder={currentAccount[0].country} className='rounded-none my-3' />
            </div>
            </fieldset>
            <ModalAccountAddress toggleModal={openModalAddress} setToggleModal={setOpenModalAddress} submit={submit} currentAccount={currentAccount} />

            <h2>Mon mot de passe <a href='#' className="text-red-700" onClick={() => setOpenModalPassword(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="password" placeholder={currentAccount[0].password} className='rounded-none my-3'/>
                <input type='text' placeholder='Nouveau Password' className='rounded-none my-3'/>
                <input type='text' placeholder='Confirmation password' className='rounded-none my-3' />
            </div>
            </fieldset>
            <ModalAccountPassword toggleModal={openModalPassword} setToggleModal={setOpenModalPassword} submit={submitPassword} currentAccount={currentAccount} />

       </div> 

)
}

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
const Account = (props) => {
 
    return (
        <div className='w-full bg-white p-4 shadow space-y-8 py-12 px-4 sm:px-6 lg:px-8 mx-auto'>
            <div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-800 uppercase">
                    Mon compte
                </h1>
            </div>
            
            <hr />
            <FormAccount {...props} />
            
        </div>
    );
};

export default Account;