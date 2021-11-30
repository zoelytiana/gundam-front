import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { XIcon } from '@heroicons/react/solid'
import { schemaFormAccount } from './../../shared/constants/formik-yup/yup/yupAccount';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';

function ModalDeliveryAddress({toggleModal, setToggleModal, submit, currentAccount}) {
    const submitClose =(values)=>{
        console.log('toggleModal:',toggleModal)
        console.log('values dans modal account:',values)
        submit(values)
        setToggleModal(!toggleModal)
        //window.document.addInformation.submit()
    }
    return (
        toggleModal && (
            <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


                    {/* <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> */}


                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-2xl lg:w-full md:max-w-xl md:w-full  sm:max-w-lg sm:w-full">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class= "w-full sm:flex sm:items-start">
                                <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                        <Formik onSubmit={submitClose} validationSchema={schemaFormAccount } initialValues={currentAccount}>
                                            <Form className='mt-8 space-y-6'>
                                                <h2>Mon adresse de livraison <a href='#' className="text-red-700" onClick={() => setToggleModal(!toggleModal)}> <XIcon className="h-5 w-5 text-black group-hover:text-primary-400 float-right" aria-hidden="true"/></a></h2>
                                                
                                                <div className='shadow-sm -space-y-px'>
                                                <Field type="hidden" name="id" placeholder="id" 
                                                    component={ CustomInput } className='rounded-none my-3'/>
                                                    <Field type="text" name="userDeliveryAddress.street" placeholder="street"
                                                    component={ CustomInput } className='rounded-none my-3'/>
                                                    <Field type='text' name='userDeliveryAddress.city' placeholder='city' 
                                                    component={ CustomInput } className='rounded-none my-3'/>
                                                    <Field type='text' name='userDeliveryAddress.country' placeholder='country' 
                                                    component={ CustomInput } className='rounded-none my-3' />
                                                </div>

                                                <div className="flex  m-10">
                                                    <button type="submit" className="IncriptionBtn" >
                                                        <div className="InscriptionSpanText">Enregistrer</div>
                                                    </button>
                                                </div>

                                            </Form>
                                        </Formik>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    )
}

export default ModalDeliveryAddress
