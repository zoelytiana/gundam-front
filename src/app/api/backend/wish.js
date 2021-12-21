
import apiBackEnd from './api.Backend';
import { URL_BACK_WISHES, URL_BACK_WISH, URL_BACK_WISH_USER } from './../../shared/constants/urls/urlBackEnd';



export function getWish(id) {
    return apiBackEnd.get(URL_BACK_WISH+'/'+id)
}

export function getAllWishes(userId) {
    return apiBackEnd.get(URL_BACK_WISHES+'/'+userId)
}

export function putWish(userId, data) {
    return apiBackEnd.put(URL_BACK_WISH+'/'+userId, data)
}

export function removeWish(userId, data) {
    console.log('data avant sup',data)
    return apiBackEnd.put(URL_BACK_WISH_USER+'/'+userId, data)
}

export function existWish(userId, data) {
    console.log('data avant check',data)
    return apiBackEnd.post(URL_BACK_WISH_USER+'/'+userId, data)
}
