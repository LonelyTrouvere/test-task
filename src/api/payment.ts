import { FormInputs } from "../components/card-form/type"
import { api } from "./instance"

type Response = {
    success: boolean
}

export const payment = async (data: FormInputs) => {
    if (import.meta.env.VITE_API_URL){
        try {
            return (await api.post(`/`, data)).data as Response
        } catch (e) {
            return {
                success: false
            }
        }
    } else {
        // fallback to show functionality on gh-pages
        if(data.card === '374245455400126'){
            return {
                success: false
            } 
        } 
        return {
            success: true
        } 
    }
}