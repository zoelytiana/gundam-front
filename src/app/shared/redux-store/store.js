import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';
import productReducer from "./productSlice"

/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		product: productReducer,
	},
});
