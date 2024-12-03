import { ReactNode } from "react"
import { InputProps } from "../input/type"

export type Props = {
    children: ReactNode
    label: string
    inputProps: InputProps
}