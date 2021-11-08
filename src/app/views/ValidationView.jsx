import React from 'react'
import Validation from './../components/account/Validation';
import './../assets/styles/styles-product.css';

const PanierView = () => {
    return (
        <div className="container-product">
            <div className="w-full bg-gray-200">
               <Validation />
            </div>
        </div>
    )
}

export default PanierView
