import React, { Component } from "react";
import Product from './Product'
import Total from './Total'

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
                        <div><h2 onMouseOver={this.change} className="mt-6 text-left text-3xl font-extrabold">MON PANIER (nb articles) </h2></div>
                    </div>
                    
                    <div className='flex'>
                        <div className='flex-box'>
    
                        {
                            this.state.produit.map((produit, index)=>{
                                return(
                                <Product key={index} name={produit.name} prix={produit.prix} picture={produit.picture}/>
                            )
                        })
                        }
                        </div>
                        <div className='panier-total'>
                            <Total/>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Panier;