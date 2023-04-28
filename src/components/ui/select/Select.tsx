import './Select.scss'
import { ChangeEvent } from 'react'

interface SelectProps {
    options: { value: string, label: string }[]
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

function Select({ options, value, onChange }: SelectProps): JSX.Element {
    return (
        <select value={value} onChange={onChange}>
            {options.map(({value, label}) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export default Select
