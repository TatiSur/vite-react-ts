import { ButtonHTMLAttributes, ReactElement } from 'react'
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: String
    size?: 'small' | 'large';
    variant?: 'contain' | 'outline';
}

function Button({ children, size = 'large', variant = 'contain', ...rest }: ButtonProps): ReactElement {

    return (
        <button className={`button button_${size} button_${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button
