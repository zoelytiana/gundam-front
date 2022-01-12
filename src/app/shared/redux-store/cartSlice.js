import { createSlice, configureStore  } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "Products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const newCart = {
                id: action.payload.id,
                productName: action.payload.productName,
                productPrice: action.payload.productPrice,
            };
            state.push(newCart);
        },
        deleteProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        }
    }
})
export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;