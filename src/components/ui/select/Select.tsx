import './Select.scss'
import { ChangeEvent, forwardRef } from 'react'
import ReactSelect, { components, DropdownIndicatorProps } from 'react-select'
import { ErrorOutlineRoundedIcon } from '@assets/index'

interface SelectProps {
    options: { value: string, label: string }[]
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    label?: string
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
    const { label, options, ...rest } = props

    return (
        <div className="select" ref={ref}>
            {label && <label className="select__label">{label}</label>}
            <ReactSelect
                options={options}
                styles={{
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        zIndex: 100,
                    }),
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        background: 'transparent',
                        border: '1px solid gray',
                        borderRadius: '5px',
                        padding: '15px 20px 8px',
                        margin: 0,
                        cursor: 'pointer'
                    }),
                    indicatorSeparator: () => ({
                        display: 'none'
                    }),
                    valueContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        padding: 0,
                        margin: 0,
                        lineHeight: '150%'

                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)'

                    }),
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        margin: 0,
                    }),
                    input: (baseStyles) => ({
                        ...baseStyles,
                        padding: 0,
                        margin: 0,
                    })
                }}
                // defaultMenuIsOpen={true}
                components={{
                    // DropdownIndicator
                }}
            />
        </div>
    )
})

export default Select

const DropdownIndicator = (
    props: DropdownIndicatorProps
) => {
    return (
        <components.DropdownIndicator {...props}>
            <ErrorOutlineRoundedIcon/>
        </components.DropdownIndicator>
    );
};
