import React, { Component } from "react";
import Envie from './Envie'
import Bas from './Bas'


const ListeEnvies = ({ errorLog, currentWish, setCurrentWish, submit}) => {
        return(
            <div className="container mx-auto px-4">
                <div className='grid justify-items-center'>
                    <h2 className="mt-6 text-left text-3xl font-extrabold">LISTE DES ENVIES  </h2>
                    <div className="flex justify-center my-20">
                    <ul className="grid grid-cols-3">
                    {

                    currentWish.wishDetail.map((wish, index)=>{
                        return(
                            <Envie key={index} id={wish._id} submit={submit}></Envie>
                        )
                            })
                        }
                        </ul>
                    </div>
                    Pagination
                </div>
                <div><Bas/></div>
                
            </div>
        )
    }

export default ListeEnvies;