import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from '../components/boutique/DetailItem';

const DetailView = () => {
    const [gundam, setGundam] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id}  = useParams();
    

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:4000/products/${id}`);
            setGundam(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []); 

    return (
        <div className="container">
            <DetailItem gundam={gundam} />
        </div>
    )
}

export default DetailView
