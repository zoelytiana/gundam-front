import React from "react";
import ProductPic from '../../assets/images/product.png'
import TrashPic from'../../assets/images/trash.png'

const Product = ({name, prix})=>{

    if (name){
        return(
                    <div className='panier-product'>
                        <img src ={ProductPic} Alt='Produit'/>
                        <div className='panier-product-desc'>
                            <p className='panier-product-name'>{name}</p>
                            <p className='panier-product-detail'>Détail</p>
                            <p className='panier-product-price'>{prix} €</p>
                            <div className='flexCol'>
                                <div><img src ={TrashPic} Alt='Trash'/></div>
                                <div><select name="nb" id="nb" form="panierform" className="panier-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select></div>
                            </div>
                        </div>
                        
                    </div>
        )
    }
   
}

export default Product;