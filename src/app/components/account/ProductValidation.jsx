import React from "react";
import ProductPic from '../../assets/images/product.png'
import TrashPic from'../../assets/images/trash.png'

const ProductValidation = ({name, prix})=>{

    if (name){
        return(
                    <div className='panier-product'>
                        <img src ={ProductPic} Alt='Produit'/>
                        <div className='panier-product-desc'>
                            <p className='panier-product-name'>{name}</p>
                            <p className='panier-product-detail'>Détail</p>
                            <p className='panier-product-price'>{prix} €</p> 
                        </div>
                        
                    </div>
        )
    }
   
}

export default ProductValidation;