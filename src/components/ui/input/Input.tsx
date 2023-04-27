import { FC, InputHTMLAttributes, ReactNode } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

const Input: FC<InputProps> = ({ icon, type = 'text', ...rest }) => {
    return (
        <div className="input-container">
            {icon && <div className="icon">{icon}</div>}
            <input type={type} {...rest} />
        </div>
    )
}

export default Input
