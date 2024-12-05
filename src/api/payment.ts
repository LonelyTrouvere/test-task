import { FormInputs } from "../components/card-form/type"
import { api } from "./instance"

export const payment = async (data: FormInputs) => {
    return await api.post(`/`, data)
}