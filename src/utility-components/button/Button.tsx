import './Button.css'
import type { ButtonProps } from "./type";

function Button({ children, className, ...rest }: ButtonProps) {
    return <button className={`custom-button ${className}`} {...rest}>{children}</button>
}

export default Button