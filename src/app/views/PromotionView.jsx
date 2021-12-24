import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import BoutiqueItem from '../components/boutique/BoutiqueItem';
import Pagination from '../components/layouts/Pagination';

const BoutiqueView = () => {
    const [gundams, setGundams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState(9);
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:4000/products');
            setGundams(res.data);
            setLoading(false)
        }
        fetchProduct()

    }, []);
    console.log(gundams)
    //controler le nombre de produits par page par l'intermédiaire des usestate current page et products
    const indexOfLastPost = currentPage * products;
    const indexOfFirstPost = indexOfLastPost - products;
    const currentProducts = gundams.slice(indexOfFirstPost, indexOfLastPost)

    //Changement de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <div>
                <BoutiqueItem gundams={currentProducts} loading={loading}/>
                <Pagination 
                products={products} 
                totalPage={gundams.length} 
                paginate={paginate}
                />
            </div>
        </div>
        
    )
    
}

export default BoutiqueView

