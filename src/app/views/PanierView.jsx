import React from 'react'
import Panier from './../components/account/Panier';
import './../assets/styles/styles-product.css';

const PanierView = () => {
    return (
        <div className="container-product">
            <div className="w-full bg-gray-200">
               <Panier />
            </div>
        </div>
    )
}

export default PanierView
