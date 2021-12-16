import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_ADMIN_ADDPRODUCT } from './../../shared/constants/urls/urlConstants';
import { useDispatch } from "react-redux";
import { deleteProduct } from '../../shared/redux-store/productSlice';

function ProductList({id}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get('http://localhost:4000/products');
            setProducts(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []);

    const handleDeleteClick = () => {
        dispatch(
            deleteProduct({ id: id })
        )
    }

    return (
        <div>
            <div className='flex justify-center m-40'>
                <div className="dashboardProductAdmin">
                    <div className="flex justify-end m-8">
                        <Link to={URL_ADMIN_ADDPRODUCT}><button className='bg-primary-100 text-white p-2 rounded font-bold text-xl'>Ajouter un produit</button></Link>
                    </div>

                    <table className="productTableAdmin">
                        <thead className='bg-primary-100 p-8 text-white'>
                            <tr>
                                <th colSpan="1">Image</th>
                                <th colSpan="1">Nom du produit</th>
                                <th colSpan="1">Prix</th>
                                <th colSpan="1"></th>
                                <th colSpan="1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => {
                                return (
                                    <tr>
                                        <td><img src={product.productPicHigh} className='md:w-40 md:h-40 w-28 h-28 object-cover' /></td>
                                        <td className="p-1 text-center">{product.productName}</td>
                                        <td>{product.productPrice}€</td>
                                        <td className="p-1 md:p-11">
                                            <button className='bg-primary-100 p-1 rounded text-white'>Modifier</button>
                                        </td>
                                        <td className="p-1 md:p-4">
                                            <button onClick={handleDeleteClick} className='bg-primary-100 p-1 rounded text-white'>Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductList
