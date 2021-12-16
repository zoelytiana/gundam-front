import React from "react";
import View from '../../assets/images/view.png'
import Cart from '../../assets/images/cart.png'
import Product from '../../assets/images/produit.png'

const changeViaParam = (name) =>{
    console.log(name.name);
}

const Envie = ({name, prix})=>{

    if (name){
        return(
            <div className='box'>
                <div className='box-product-bottom'>
                    <div className='box-product'>
                        <img src ={Product} Alt='Produit'/>
                    </div>
                </div>
                
                    <div className='box-desc'>
                        <div className='product-name'>{name}</div>
                            <div className='product-price'>{prix} €</div>
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