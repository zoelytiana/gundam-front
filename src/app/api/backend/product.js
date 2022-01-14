
import apiBackEnd from './api.Backend';
import { URL_BACK_PRODUCT, URL_BACK_PRODUCTDISCOUNT} from './../../shared/constants/urls/urlBackEnd';



export function getProduct(id) {
    return apiBackEnd.get(URL_BACK_PRODUCT+'/'+id)
}

export function getProductDiscount(productDiscount) {
    console.log('url :',URL_BACK_PRODUCTDISCOUNT+'?productDiscount='+productDiscount)
    return apiBackEnd.get(URL_BACK_PRODUCTDISCOUNT+'?productDiscount='+productDiscount)
}


