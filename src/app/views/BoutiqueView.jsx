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
            const res = await axios.get('http://localhost:8000/gundams');
            setGundams(res.data);
            setLoading(false)
        }
        fetchProduct()
        // fetch('http://localhost:8000/gundams')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //         setGundams(data)
        //     })
    }, []);

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

