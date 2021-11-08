import React from 'react'
import Ticket from './../components/account/Ticket';
import './../assets/styles/styles-product.css';

const PanierView = () => {
    return (
        <div className="container-product">
            <div className="w-full bg-gray-200">
               <Ticket />
            </div>
        </div>
    )
}

export default PanierView
