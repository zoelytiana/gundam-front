import React from "react";
import './../../css/styles-product.css';
import View from '../../img/view.png'
import Cart from '../../img/cart.png'

const changeViaParam = (name) =>{
    console.log(name.name);
}

const Envie = ({name, prix})=>{

    if (name){
        return(
            <div className='box'>
                <div className='picture'>

                </div>
                <div className='box-desc'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>{prix} €</p>
                    <div className='flex-end'>
                    <a href='/productDetail' onClick={()=>changeViaParam ({name})} className='lien'><img src={View} alt='Visualuser' /></a>
                    <a href='/cart' onClick={()=>changeViaParam ({name})} className='lien'><img src={Cart} alt='Visualuser'/></a>
                    </div>
                 </div>
            </div>
        )
    }
   
}

export default Envie;