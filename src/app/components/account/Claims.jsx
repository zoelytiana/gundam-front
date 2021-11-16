import React, { useState } from "react";
import Claim from "./Claim";

import { Formik, Form, Field } from 'formik';

import { defaulValuesClaim } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesClaim'
import { schemaFormClaim } from './../../shared/constants/formik-yup/yup/yupClaim'
import { CustomInput, CustomTextarea} from '../../shared/components/form-and-error-components/InputCustom'

const FormClaim = ({ submit, errorLog, claims }) => (
        <Formik initialValues={defaulValuesClaim} onSubmit={submit} validationSchema={schemaFormClaim}>
        <Form className='flexForm'>
            <div className='w-full my-2'>
                <div className='flex items-center'>
                    <select name="order" id="order" form="orderform" className="input-select">
                        <option value="0">Numéro de dommande</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='claim'>

                {
                    claims.map((claim, index)=>{
                        return(
                        <Claim key={index} titre={claim.titre} desc={claim.desc}/>
                    )
                })
                }
                </div>
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

const Claims = (props)=>{
    const [claims, setListeProduit] = useState(
        [{titre : "1", desc:'Blabla'},
        {titre : "2", desc:'Cousou'},
        {titre : "3", desc:'Blabla'}]
    );
  

    const handleChange = event => {
        setListeProduit(event.currentTarget.value );
      };



        return(

            
            <div className="flex-container">
                <div className='flex-box'>
                    <div className='titre-panier'>
                        <div><h2 className="mt-6 text-left text-3xl font-extrabold">LISTE DE RECLAMMATIONS </h2></div>
                    </div>
                    <FormClaim claims={claims} /> 
                </div>
            </div>
        )
    }

export default Claims;