import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct(props) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:4000/products/${id}`);
            setProduct(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []);
    console.log(id);
    return (
        <div className='m-52'>
            {product.productName}
            {/* <div className='mt-52'>
                <pre>{JSON.stringify(form, undefined, 2)}</pre>
                <form onSubmit={onSubmit}>
                    <h1>Ajoutez un produit</h1>
                    <div className="md:flex justify-center">
                        <div className="flex flex-col md:w-full mx-8 my-20">
                            <label>Nom</label>
                            <input type="text" name="productName" value={form.productName} onChange={handleChange}/>
                            <label>Prix</label>                       
                            <input type="number" min="0" name="productPrice" value={form.productPrice} onChange={handleChange}/>
                            <label>Poids</label>
                            <input type="number" min="0" name="productWeight" value={form.productWeight} onChange={handleChange}/>
                            <label>Courte description</label>
                            <textarea type="text" name="productShortDesc" value={form.productShortDesc} onChange={handleChange}/>
                            <label>Longue description</label>
                            <textarea type="text" name="productLongDesc" value={form.productLongDesc} onChange={handleChange}/>
                            <label>Image d'entête</label>
                            <input type="text" name="productPicHigh" value={form.productPicHigh} onChange={handleChange}/>
                            <label>image</label>
                            <input type="text" name="productPic" value={form.productPic} onChange={handleChange}/>
                            <label>Catégorie</label>
                            <input type="text" name="productUnderCategory" value={form.productUnderCategory} onChange={handleChange}/>
                            <label>Date de Création</label>
                            <input type="date" min="2018-01-01" name="productUpdateDate" value={form.productUpdateDate} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col md:w-full mx-8 my-20">
                            <label>Stock</label>
                            <input type="number" min="0" name="productStock" value={form.productStock} onChange={handleChange}/>
                            <label>Provenance</label>                       
                            <input type="text" name="productLocation" value={form.productLocation} onChange={handleChange}/>
                            <label>Promotion</label>
                            <input type="number" min="0" name="productDiscount" value={form.productDiscount} onChange={handleChange}/>
                            <label>Taille du textile</label>
                            <div>
                                <input type="checkbox" name="textilSize" value="S" onChange={handleChange}/>
                                <label htmlFor="">S</label>
                                <input type="checkbox" name="textilSize" value="M" onChange={handleChange}/>
                                <label htmlFor="">M</label>
                            </div>
                            <select name="textilSize" multiple >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                                <option value="3XL">3XL</option>
                            </select>
                            <label>Taille</label>
                            <input type="number" min="0" name="productSize" value={form.productSize} onChange={handleChange}/>
                            <label>Hauteur</label>
                            <input type="number" min="0" name="productHeight" value={form.productHeight} onChange={handleChange}/>
                            <label>Matériel</label>
                            <input type="text" name="productMaterial" value={form.productMaterial} onChange={handleChange}/>
                            <label>Age requis</label>
                            <input type="number" min="0" name="productAgeRequired" value={form.productAgeRequired} onChange={handleChange}/>
                            <label>Couleur</label>
                            <input type="text" name="productColor" value={form.productColor} onChange={handleChange}/>
                            <label>Fabriquant</label>
                            <input type="text" name="productManufacturer" value={form.productManufacturer} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" className="mb-20 bg-primary-100 p-2 rounded text-white flex justify-center cursor-pointer" >Ajouter produit</button>
                    </div>
                </form>

            </div> */}
        </div>
    )
}

export default UpdateProduct
