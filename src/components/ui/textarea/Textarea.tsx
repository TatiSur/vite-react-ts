import './Textarea.scss'
import 'react-tooltip/dist/react-tooltip.css'
import { ChangeEvent, forwardRef, TextareaHTMLAttributes, useState } from 'react'
import { ErrorOutlineRoundedIcon } from '@assets/index'
import { Tooltip as ReactTooltip } from 'react-tooltip'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    const { label, error, rows = 3, maxLength = 250, ...rest } = props
    const [ currentRows, setCurrentRows ] = useState(rows)
    const [ characterCount, setCharacterCount ] = useState(0)

    function handleTextareaInput(e: ChangeEvent<HTMLTextAreaElement>) {
        const textarea = e.target
        const totalHeight = textarea.scrollHeight
        setCharacterCount(textarea.textLength)

        textarea.style.height = totalHeight + 'px'
    }

    return (
        <div className={`textarea textarea${error ? '--error' : ''}`}>
            {label && <label className="textarea__label">{label}</label>}
            <textarea
                className="textarea__input"
                ref={ref}
                {...rest}
                rows={currentRows}
                maxLength={maxLength}
                onInput={handleTextareaInput}
            />
            <div className="textarea__character-count">
                <span>{characterCount}</span> / <span>{maxLength}</span>
            </div>
            {error && (
                <>
                    <ErrorOutlineRoundedIcon
                        className="textarea__error-icon"
                        data-tooltip-id="textarea-error"
                        data-tooltip-content={error}
                    />
                    <ReactTooltip
                        id="textarea-error"
                        place="left"
                        variant="error"
                    />
                </>
            )}
        </div>
    )
})

export default Textarea
