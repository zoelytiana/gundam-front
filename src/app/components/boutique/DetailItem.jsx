import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { URL_PANIER } from './../../shared/constants/urls/urlConstants';
import heart from "./../../assets/images/heart.png";
import heartSolid from "./../../assets/images/heart-solid.svg";
import stars from "./../../assets/images/stars.png";
import { putWish, existWish, removeWish } from '../../api/backend/wish';
import { Formik, Form, Field } from 'formik';
import { accountLogin} from './../../shared/services/accountServices';
import { URL_ENVIE } from './../../shared/constants/urls/urlConstants';
//import { configureStore } from '@reduxjs/toolkit'
import { store } from '../../shared/redux-store/store';
import { addProduct, deleteProduct } from '../../shared/redux-store/productSlice';
import { useSelector} from 'react-redux';
import { selectIsLogged} from './../../shared/redux-store/authenticationSlice'; 


const DetailItem = ({ gundam }) => {
    let userId = null;
    const [checkWish, setCheckWish] = useState(false);

    const isLogged = useSelector(selectIsLogged)
    console.log('islogged :',isLogged)

    //check if wish is already exist
    if(isLogged){
        userId = accountLogin()
        const data = {
            "wish": gundam._id
        }
        console.log('wish to check', data)
    
        existWish(userId, data).then(res => {
        console.log('setCheckWish', res.data)
        setCheckWish(res.data);
        })

        const addWish = (id)=>{
            console.log('id',id)       
            const data = 
            {
                "wishDetail": {"_id": id}
              }
              console.log('data to wish',data)
            putWish(userId, data).then(res => {
                if(res.status === 201 && res.data) {
                    console.log('Data update in wish:', res.data);
                    setCheckWish(true)
                    //history.push(URL_ENVIE)
                }
            }).catch((error)=>console.log('Put wishes error !'));
        }
    
        const deletetoWish = (id)=>{
            console.log('id',id)      
            const data = 
            {
                "_id": id
              }
              console.log('data to wish',data)
            removeWish(userId, data).then(res => {
                if(res.status === 201) {
                    console.log('data registred :', res.data);  
                    setCheckWish(false);
                }
            }).catch((error)=>console.log('Get account error !')); 
        }
    }
    else{//ici je ne comprend si l'utilisateur n'est pas connecté, il utilise les fontions suivantes alors qu'il affiche tjr une erreur
        const addWish = (id)=>{
            console.log('id',id)     
            document.getElementById('error').classList.toggle("invisible");
        }
    
        const deletetoWish = (id)=>{
            console.log('id',id) 
            document.getElementById('error').classList.toggle("invisible");     
        }
    }
    
     // Can still subscribe to the store
    //store.subscribe(() => console.log(store.getState()))

    const addToCart = (id, productName, productPrice ) =>{
   
        const data = {
                id: id,
                productName: productName,
                productPrice: productPrice
            };

          console.log('data',data)
          // Still pass action objects to `dispatch`, but they're created for us
          store.dispatch(addProduct(data))
          console.log('store',store.getState())
          const obj = store.getState()
          console.log('produit',obj.product)
          //localstorage

          localStorage.setItem('Cart', JSON.stringify(obj.product));
    }

    return (
        <div className="flex flex-col items-center my-40">
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-around">

                <img className="md:w-2/5 w-4/5" src={gundam.productPicHigh} alt={gundam.productName} />


                <div className="flex flex-col items-center justify-center bg-white p-8 rounded text-center md:w-2/5 w-4/5">
                    <h1 className="m-4">{gundam.productName}</h1>
                    <h2 className="font-thin">{gundam.productPrice}€</h2>
                  
                    { checkWish === false ? <img className="m-4 hover:h-20 hover:cursor-pointer" id="imgHeart" src={heart} alt="Like" onClick={()=>addWish(gundam._id)} /> : <img className="m-4 w-20" src={heartSolid} alt="Dislike" onClick={()=>deletetoWish(gundam._id)}/>}
                    <div id='error' className='error invisible'>Pas authentifié</div>
                    
                    <div className="grid grid-cols-3 items-center">
                        <div className="btn-form" >
                            <p className="btn-form-text">En stock</p>
                        </div>
                        <img src={stars} alt="" />
                        <h4>14 avis</h4>
                    </div>
                    <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur commodi numquam quis id sunt totam labore enim laboriosam. Ex at pariatur velit incidunt nulla maxime sit rerum impedit consectetur!</p>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <h3 className="m-2">-</h3>
                            <h3 className="border-solid border-black border-2 rounded p-2">1</h3>
                            <h3 className="m-2">+</h3>
                        </div>
                       
                            <button className="btn-form" onClick={()=>addToCart(gundam._id,gundam.productName,gundam.productPrice)}>
                                <p className="btn-form-text">Ajouter au panier</p>
                            </button>
                       
                    </div>
                </div>
            </div>

            <div className="lg:w-7/12 w-4/5 text-center p-8 lg:m-8 rounded bg-white">
                <h3>Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo.</p>
               
            </div>

            {/* <div className="md:flex justify-center w-60">
                {gundams.slice(0, 3).map(gundam => {
                    return <img key={gundam.id} className="m-11" src={gundam.image} alt={gundam.name} />
                })}
            </div>
            <h2>Produits similaire</h2>
            <div className="xl:flex justify-center">
                {gundams.slice(0, 3).map(gundam => {
                    return <img key={gundam.id} className="m-8" src={gundam.image} alt={gundam.name} />
                })}
            </div> */}

        </div>
    )
}

export default DetailItem
