import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react"

export type Props = {
    children: ReactNode
    label: string
    inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}