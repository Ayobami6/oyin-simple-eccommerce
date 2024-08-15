import { apiBaseUrl } from "@/constants/constants";


export const fetchProducts = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}products`)
        const data = await response.json()
        return data
    } catch(err){
        console.log(err)

    }
}

export const fetchProductById = async (id: string) => {
    try {
        const response = await fetch(`${apiBaseUrl}products/${id}`)
        const data = await response.json()
        return data
    } catch(err){
        console.log(err)
    }
}