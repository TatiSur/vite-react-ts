import { ReactElement } from 'react'
import './Button.scss'

interface Props {
    children: String
    size?: 'small' | 'large';
    variant?: 'contain' | 'outline';
}

function Button({ children, size = 'large', variant = 'contain' }: Props): ReactElement {

    return (
        <div className={`button button_${size} button_${variant}`}>
            {children}
        </div>
    )
}

export default Button
