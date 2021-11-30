import React, { useState } from 'react';

import { PencilAltIcon } from '@heroicons/react/solid'

import ModalAccount from "./ModalAccount";
import ModalAccountAddress from "./ModalAccountAddress";
import ModalAccountBillingAddress from "./ModalAccountBillingAddress";
import ModalAccountDeliveryAddress from "./ModalAccountAddressDelivery";
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
    const [openModalBillingAddress, setOpenModalBillingAddress] = useState(false);
    const [openModalDeliveryAddress, setOpenModalDeliveryAddress] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);
    console.log('currentaccount dans account.jsx', currentAccount)
    return (
    /*<Formik onSubmit={submit} validationSchema={schemaFormAccount } initialValues={currentAccount[0]}>
        <Form className='mt-8 space-y-6'>*/
        <div>
        
            <h2>Mes Informations <a href='#' className="text-red-700" onClick={() => setOpenModalAccount(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="text" placeholder={currentAccount._id} className='rounded-none my-3 w-full'/>
                <input type="email" placeholder={currentAccount.userEmail} className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userName} className='rounded-none my-3 w-full'/>
                <input type='text' placeholder={currentAccount.userFirstName} className='rounded-none my-3 w-full' />
                <input type='text'  placeholder={currentAccount.userPhone} className='rounded-none my-3 w-full' pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"/>
                <input type='text'  placeholder={currentAccount.userBirthday} className='rounded-none my-3 w-full' />
            </div>
        </fieldset>
            <ModalAccount toggleModal={openModalAccount} setToggleModal={setOpenModalAccount} submit={submit} currentAccount={currentAccount} />

            <h2>Mon adresse <a href='#' className="text-red-700" onClick={() => setOpenModalAddress(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="text"  placeholder={currentAccount.userAddress.street !=="" ? currentAccount.userAddress.street : "" } className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userAddress.city !=="" ? currentAccount.userAddress.city : "City"} className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userAddress.country !=="" ? currentAccount.userAddress.country : "Country"} className='rounded-none my-3 w-full' />
            </div>
            </fieldset>
            <ModalAccountAddress toggleModal={openModalAddress} setToggleModal={setOpenModalAddress} submit={submit} currentAccount={currentAccount} />
            
            <h2>Mon adresse de facturation <a href='#' className="text-red-700" onClick={() => setOpenModalBillingAddress(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="text"  placeholder={currentAccount.userBillingAddress.street !=="" ? currentAccount.userBillingAddress.street : "" } className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userBillingAddress.city !=="" ? currentAccount.userBillingAddress.city : "City"} className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userBillingAddress.country !=="" ? currentAccount.userBillingAddress.country : "Country"} className='rounded-none my-3 w-full' />
            </div>
            </fieldset>
            <ModalAccountBillingAddress toggleModal={openModalBillingAddress} setToggleModal={setOpenModalBillingAddress} submit={submit} currentAccount={currentAccount} />

            <h2>Mon adresse de livraison <a href='#' className="text-red-700" onClick={() => setOpenModalDeliveryAddress(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="text"  placeholder={currentAccount.userDeliveryAddress.street !=="" ? currentAccount.userDeliveryAddress.street : "Street" } className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userDeliveryAddress.city !=="" ? currentAccount.userDeliveryAddress.city : "City"} className='rounded-none my-3 w-full'/>
                <input type='text'  placeholder={currentAccount.userDeliveryAddress.country !=="" ? currentAccount.userDeliveryAddress.country : "Country"} className='rounded-none my-3 w-full' />
            </div>
            </fieldset>
            <ModalAccountDeliveryAddress toggleModal={openModalDeliveryAddress} setToggleModal={setOpenModalDeliveryAddress} submit={submit} currentAccount={currentAccount} />

            <h2>Mon mot de passe <a href='#' className="text-red-700" onClick={() => setOpenModalPassword(true)}> <PencilAltIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
            <fieldset disabled>
            <div className='shadow-sm -space-y-px'>
                <input type="password" placeholder='Mot de passe' value={currentAccount.userPassword} className='rounded-none my-3 w-full'/>                
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