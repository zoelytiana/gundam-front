import React from "react";
import { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import Trash from '../../assets/images/trash-alt-solid.svg'
import View from '../../assets/images/eye-regular.svg'
import { removeWish } from './../../api/backend/wish';
import { getProduct } from './../../api/backend/product';
import { Link } from 'react-router-dom';
import { URL_DETAIL} from './../../shared/constants/urls/urlConstants';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import Loader from '../../shared/components/utils-components/Loader'


const Envie = ({ wish, submit})=>{

    //const [productDetail, setProductDetail] = useState(null);

    const changeViaParam = (values) =>{
        console.log('values:',values)
        submit(values)
    }

    /*useEffect(() =>{
        loadDetailProduct();
    }, []);*/

    /*const loadDetailProduct = () => {
        console.log('id dans envie:',id);
            getProduct(id).then(res => {
                if(res.status === 200 && res.data) {
                    console.log('Données:', res.data);
                    setProductDetail(res.data);
                }
            }).catch((error)=>console.log('Get wishes error !'));
            
    }*/

        return(
            
            <li className="m-4" key={wish._id}>
                {wish!==null ? 
                <div>
                <div className="box-product-bottom w-72">
                    <div className="box-product h-72 flex justify-center items-center">
                        <img className="w-48 h-48" src ={wish.productPicHigh} alt='Produit'/>
                    </div>
                </div>

                <div className="shadow-sm rounded m-1 mt-2 p-2 w-72 h-24">
                            <div className="flex flex-col items-center">
                                <h4 className="font-bold">{wish.productName}</h4>
                                <p>{wish.productPrice} €</p>
                            </div>
                            <Formik onSubmit={changeViaParam}  initialValues={wish}>
                            <Form className='mt-8 space-y-6' name="addInformation">
                                                
                                                <div className='shadow-sm -space-y-px'>
                                                <Field type="hidden" name="_id" placeholder="id" 
                                                    component={ CustomInput } className='rounded-none my-3'/>
                                                </div>

                                                    
                                                    <div className="flex justify-end items-center">
                                                    <Link className="ml-1" to={URL_DETAIL + `/${wish._id}`}>
                                                                <button><img className='w-6 h-6' src={View} alt='Détail'/></button>
                                                            </Link>
                                                        <button type='submit'>
                                                                <img className='w-6 h-6' src={Trash} alt='Supprimer' />
                                                            </button>
                                                    </div>
                                                    
                            </Form>
                            </Formik>

                    </div>
                    
                </div>
            : <Loader/>}
            </li>  

        )
   
}

export default Envie;