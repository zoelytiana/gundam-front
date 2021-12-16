import axios from "axios";
import { getToken } from "../../shared/services/tokenServices";
import handleHttpError from './../../shared/components/form-and-error-components/HandleHttpError';

/**
 * Instance axios to the BACKEND 
 * 
 * @author Peter Mollet
 */
/*const apiBackEnd = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})
export default apiBackEnd;*/

//Export du fichier
const apiBackEnd = axios.create({
    //Appel de url de base de json_server
    baseURL: "http://localhost:4000",
    header : "Content-Type: application/json"
});
export default apiBackEnd;

/**
 * Interceptor of request to automatically put the JWTToken in the header
 * 
 * @author Peter Mollet
 */
apiBackEnd.interceptors.request.use( request => {
    request.headers['Authorization'] = `Bearer ${ getToken() }`;
    return request;
})

/**
 * Interceptor of response, to see status code in the console and to handle the error
 * 
 * @author Peter Mollet
 */
apiBackEnd.interceptors.response.use(
    response => {
        console.log(response.status);
        return response;
    },
    error => handleHttpError(error)
)