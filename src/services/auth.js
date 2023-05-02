import { BASE_URL, fetchAndParse, headers } from "./utils";


// request catre endpointul de /auth/login
export function login(data) {
    return fetchAndParse(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers
    })
}


// request catre endpointul de /auth/register
export function register(data) {
    return fetchAndParse(`${BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers
    })
}