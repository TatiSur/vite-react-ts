import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import './Input.scss'
import { ErrorOutlineRoundedIcon } from '@assets/index'
import { Tooltip as ReactTooltip } from 'react-tooltip'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, error, icon, type = 'text', maxLength = 25, ...rest } = props

    return (
        <div className={`input input${error ? '--error' : ''}`}>
            {label && <label className="input__label">{label}</label>}
            {icon && <div className="icon">{icon}</div>}
            <input
                className="input__field"
                ref={ref}
                type={type}
                {...rest}
            />
            {error && (
                <>
                    <ErrorOutlineRoundedIcon
                        className="input__error-icon"
                        data-tooltip-id="input-error"
                        data-tooltip-content={error}
                    />
                    <ReactTooltip
                        id="input-error"
                        place="left"
                        variant="error"
                    />
                </>
            )}
        </div>
    )
})

export default Input
