import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addProductAsync = createAsyncThunk(
    'products/addProduct',   
    async (payload) => {
        console.log(payload);
        const response = await fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                productName: payload.form.productName, 
                productPrice: payload.form.productPrice, 
                productWeight: payload.form.productWeight,
                productShortDesc: payload.form.productShortDesc,
                productLongDesc: payload.form.productLongDesc,
                productPicHigh: payload.form.productPicHigh,
                productPic: payload.form.productPic,
                productUnderCategory: payload.form.productUnderCategory,
                productUpdateDate: payload.form.productUpdateDate,
                productCreateDate: payload.form.productCreateDate,
                productStock: payload.form.productStock,
                productLocation: payload.form.productLocation,
                productDiscount: payload.form.productDiscount,
                textilSize: payload.form.textilSize,
                productSize: payload.form.productSize,
                productHeight: payload.form.productHeight,
                productMaterial: payload.form.productMaterial,
                productAgeRequired: payload.form.productAgeRequired,
                productColor: payload.form.productColor,
                productManufacturer: payload.form.productManufacturers,
            }),
        });
        if (response.ok) {
            const product = await response.json();
            return { product }
        }        
    }
);
export const deleteProductAsync = createAsyncThunk(
	'products/deleteProductAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:4000/products/${payload}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return payload;
		}
	}
);

const productSlice = createSlice({
    name: "Products",
    initialState: {products: []},
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }, 
        // addProduct: (state, action) => {
        //     const newTodo = {
        //         id: action.payload.id,
        //         productName: action.payload.productName,
        //         productPrice: action.payload.productPrice,
        //         productWeight: action.payload.productWeight,
        //         productShortDesc: action.payload.productShortDesc,
        //         productLongDesc: action.payload.productLongDesc,
        //         productPicHigh: action.payload.productPicHigh,
        //         productPic: action.payload.productPic,
        //         productUnderCategory: action.payload.productUnderCategory,
        //         productUpdateDate: action.payload.productUpdateDate,
        //         productCreateDate: action.payload.productCreateDate,
        //         productStock: action.payload.productStock,
        //         productLocation: action.payload.productLocation,
        //         productDiscount: action.payload.productDiscount,
        //         textilSize: action.payload.textilSize,
        //         productSize: action.payload.productSize,
        //         productHeight: action.payload.productHeight,
        //         productMaterial: action.payload.productMaterial,
        //         productAgeRequired: action.payload.productAgeRequired,
        //         productColor: action.payload.productColor,
        //         productManufacturer: action.payload.productManufacturers,
        //     };
        //     state.push(newTodo);
        // },
        // deleteProduct: (state, action) => {
        //     return state.filter((product) => product.id !== action.payload.id)
        // }
    },
    extraReducers: {
        [addProductAsync.fulfilled]: (state, action) => {
            state.products.push(action.payload.product)
            
        },
        [deleteProductAsync.fulfilled]: (state, action) => {
            const index = state.products.findIndex((product) => product._id === action.payload)
            state.products.splice(index, 1)
		},
    }
})
export const { setProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
export const selectProducts = (state) => state.product.products;