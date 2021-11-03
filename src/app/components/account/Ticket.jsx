import React, { useState } from "react";
import Panier from "../../assets/images/panier.png"
import ProductTicket from "./ProductTicket";
import Total from './Total';
import Information from "./Information";
import BtnPaiement from "./BntPaiement";

const Ticket = (props)=>{
  const [produit, setListeProduit] = useState(
      [{name : "produit1", price:20, nb:2}],
      [{name : "produit2", price:30, nb:3}]
  );

  const handleChange = event => {
    setListeProduit(event.currentTarget.value );
  };

  const handleSubmit = event => {
    event.preventDefault();

    produit("" );
  };

        return(
            <div className="flex-container">
                <div className='flex-box'>
                    <div className='titre-panier'>
                        <div><h2 onMouseOver={handleChange} className="mt-6 text-left text-3xl font-extrabold">PANIER <img src={Panier} alt='Panier' className='float-right'/> </h2></div>
                    </div>
                    
                    <div>
                        <div className='flex-box'>
    
                        {
                            produit.map((produit, index)=>{
                                return(
                                <ProductTicket key={index} name={produit.name} price={produit.price} nb={produit.nb}/>
                            )
                        })
                        }
                        </div>
                        <div className='panier-total'>
                            <Information/>
                            <Total/>
                            <BtnPaiement/>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }

export default Ticket;