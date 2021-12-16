import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from '../../shared/redux-store/productSlice';


function AddProduct() {
    const [value, setValue] = useState('');

	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addProduct({
			productName: value,
            productPrice: value,
		}))
	};
    return (
        <div>

            <form onSubmit={onSubmit}>
                <h1>Ajoutez un produit</h1>
                <div className="md:flex justify-center">
                    <div className="flex flex-col md:w-full mx-8 my-20">
                        <label>Nom</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/>
                        <label>Prix</label>                       
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/>
                        {/* <label>Poids</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Courte description</label>
                        <textarea type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Longue description</label>
                        <textarea type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Image d'entête</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>image</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Catégorie</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Date de Création</label>
                        <input type="text" name="" /> */}
                    </div>
                    <div className="flex flex-col md:w-full mx-8 my-20">
                        {/* <label>Stock</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Provenance</label>                       
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Promotion</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Taille du textile</label>
                        <select>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">2XL</option>
                            <option value="">3XL</option>
                        </select> */}
                        {/* <label>Taille</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Hauteur</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Matériel</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Age requis</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Couleur</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                        {/* <label>Fabriquant</label>
                        <input type="text" name="" value={value} onChange={(event) => setValue(event.target.value)}/> */}
                    </div>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="mb-20 bg-primary-100 p-2 rounded text-white flex justify-center cursor-pointer" >Ajouter produit</button>
                </div>
            </form>

        </div>
    )
}

export default AddProduct
