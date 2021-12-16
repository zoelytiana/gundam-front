import React, {useState}  from "react";
import ProductPic from '../../assets/images/product2.png'
import TrashPic from'../../assets/images/trash.png'

const ProductTicket = ({name, price, nb})=>{
    const [count, setNb] = useState(nb);
    if (name){
        return(
            <div className='panier-product-ticket'>
                <div className='flex'>
                        <img src ={ProductPic} Alt='Produit'/>
                        <div className='panier-product-desc-ticket'>
                            <h3>{name}</h3>
                            <p className='h-8'>Détail</p>
                            <div className='text-xl'><button className='btn-ticket'>-</button>{nb}<button className='btn-ticket'>+</button></div>
                         </div>
                           
                </div>
                <div className='flex w-full justify-between'>
                    <div className='product-price-ticket'>Sous Total: {price} €</div> 
                    <div><img src ={TrashPic} Alt='Trash'/></div>
                </div>
            </div>

        )
    }
   
}

export default ProductTicket;