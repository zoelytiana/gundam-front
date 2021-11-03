import React, { Component } from "react";
import ProductValidation from './ProductValidation'
import Total from './Total'
import Information from "./Information";
import BtnOrder from "./BntOrder";

class Panier extends Component{

    state = {
        produit :[
            {name : 'produit1', picture :'pic', prix:200},
            {name : 'produit2', picture :'pic', prix:100},
        ]
    }

    addCart = ()=>{
        const upDateState = this.state.produit.map((param)=> {
            return param.prix+=10;
        })
        this.setState({upDateState})     
    }


    render(){
        return(
            <div className="flex-container">
                <div className='flex-box'>
                    <div className='titre-panier'>
                        <div><h2 onMouseOver={this.change} className="mt-6 text-left text-3xl font-extrabold">CONFIRMATION DE COMMANDE </h2></div>
                    </div>
                    <p>VOTRE COMMANDE A ETE ENREGISTRE</p>
                    <div className='flex'>
                        <div className='flex-box'>
    
                        {
                            this.state.produit.map((produit, index)=>{
                                return(
                                <ProductValidation key={index} name={produit.name} prix={produit.prix} picture={produit.picture}/>
                            )
                        })
                        }
                        </div>
                        <div className='panier-total'>
                            <Information/>
                        </div>
                    </div>
                <div>
                    <Total/>
                    <BtnOrder/>
                </div>

                </div>
            </div>
        )
    }
}

export default Panier;