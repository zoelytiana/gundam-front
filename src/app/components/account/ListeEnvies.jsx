import React, { Component } from "react";
import Envie from './Envie'
import Bas from './Bas'

class ListeEnvies extends Component{

    state = {
        produit :[
            {name : 'produit1', picture :'pic', prix:200},
            {name : 'produit2', picture :'pic', prix:100},
            {name : 'produit3', picture :'pic', prix:300},
            {name : 'produit4', picture :'pic', prix:200},
            {name : 'produit5', picture :'pic', prix:100},
            {name : 'produit6', picture :'pic', prix:300}
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
            <div className="max-w-md mx-auto md:max-w-2xl flex-container">
                <div className='flex-box'>
                    <h2 onMouseOver={this.change} className="mt-6 text-left text-3xl font-extrabold text-primary-100">LISTE DES ENVIES</h2>
                    <div className='flex-list flex-wrap'>
                    {
                        this.state.produit.map((produit, index)=>{
                            return(
                            <Envie key={index} name={produit.name} prix={produit.prix} picture={produit.picture}>ici</Envie>
                        )
                    })
                    }
                    </div>
                </div>
                <div><Bas/></div>
                <div className="bg-black">footer</div>
                
            </div>
        )
    }
}

export default ListeEnvies;