
import apiBackEnd from './api.Backend';
import { URL_BACK_PRODUCT} from './../../shared/constants/urls/urlBackEnd';



export function getProduct(id) {
    return apiBackEnd.get(URL_BACK_PRODUCT+'/'+id)
}


