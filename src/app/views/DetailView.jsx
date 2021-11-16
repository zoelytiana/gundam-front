import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from '../components/boutique/DetailItem';

const DetailView = () => {
    const [gundams, setGundams] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id}  = useParams();
    

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:8000/gundams/:id=${id}`);
            setGundams(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []); 

    return (
        <div className="container">
            <DetailItem gundams={gundams} />
        </div>
    )
}

export default DetailView
