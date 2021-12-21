import React, { Component } from "react";
import { useState } from 'react'
import Envie from './Envie'
import Bas from './Bas'
import Pagination from '../../components/layouts/Pagination';

const ListeEnvies = ({ errorLog, currentWish, setCurrentWish, submit}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState(8);

      //controler le nombre de produits par page par l'intermédiaire des usestate current page et products
      const indexOfLastPost = currentPage * products;
      const indexOfFirstPost = indexOfLastPost - products;
      const currentWishtoDisplay = currentWish.wishDetail.slice(indexOfFirstPost, indexOfLastPost)
  
      //Changement de page
      const paginate = (pageNumber) => setCurrentPage(pageNumber)

    console.log(currentWish.wishDetail.length)
        return(
            <div className="container mx-auto max-w-screen-2xl px-4 space-y-8 py-24 ">
                <div className='grid justify-items-center'>
                    <h2 className="mt-6 text-left text-3xl font-extrabold">LISTE DES ENVIES ({currentWish.wishDetail.length}) </h2>
                    <div className="grid justify-items-center my-20">
                    <ul className="flex flex-wrap">
                    {
                        
                        currentWishtoDisplay.map((wish, index)=>{
                        return(
                            <div key={index}>
                                <Envie key={index} wish={wish} submit={submit}></Envie>
                                
                            </div>
                        )
                            })
                        }
                        </ul>
                        <Pagination 
                                    products={products} 
                                    totalPage={currentWish.wishDetail.length} 
                                    paginate={paginate}
                                    />
                    </div>
                   
                </div>
                <div><Bas/></div>
                
            </div>
        )
    }

export default ListeEnvies;