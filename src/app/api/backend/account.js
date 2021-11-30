
import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE } from './../../shared/constants/urls/urlBackEnd';
import { URL_BACK_REGISTER } from './../../shared/constants/urls/urlBackEnd';
import { URL_BACK_ACCOUNT } from './../../shared/constants/urls/urlBackEnd';
import { URL_BACK_PASSWORD } from './../../shared/constants/urls/urlBackEnd';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}

export function account(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}

export function updateAccount (id, data) {
    console.log('les valeur à ajouter dans la base:',data)
    return apiBackEnd.put(URL_BACK_ACCOUNT+'/'+id, data);
}

export function updatePassword(id, data) {
    console.log('les valeur à ajouter dans la base:', data)
    return apiBackEnd.put(URL_BACK_PASSWORD+'/'+id, data);
}

export function getAccount(id) {
    //URL_BACK_ACCOUNT = '/users?email='+login
    console.log('URL+login :', URL_BACK_ACCOUNT+'/'+id)
    return apiBackEnd.get(URL_BACK_ACCOUNT+'/'+id)
}

/*export function authenticate(values) {
    //URL_BACK_AUTHENTICATE += `/authenticate?email={$values.email} & password={$values.password}`
    return apiBackEnd.get(`/authenticate?email="aa@aa.com"`)
}*/

//Recherche par nom du produit
/*const findProductByName = name_product => {
    return http.get(`/products?name_product={$name_product}`);
}*/

//Ajouter un produits
/*const createProduct = data => {
    return http.post("/products", data);
}*/