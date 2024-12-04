import './Button.css'
import type { ButtonProps } from "./type";

function Button({ children, ...rest }: ButtonProps) {
    return <button className="custom-button" {...rest}>{children}</button>
}

export default Button