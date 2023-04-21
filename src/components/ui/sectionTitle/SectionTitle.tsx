import './SectionTitle.scss'
import { CSSProperties } from 'react'

interface SectionTitleProps {
    children: String
    colors?: { text: String, first: String, second: String }
}

const defaultColors = {
    text: '#a0b7c5', first: '#00DFD8', second: '#007CF0',
}

function SectionTitle({ children, colors = defaultColors }: SectionTitleProps): JSX.Element {
    const styleColors = {
        '--text-color': colors?.text,
        '--first-color': colors?.first,
        '--second-color': colors?.second,
    }

    return (
        <h2 className="section-title" style={styleColors as CSSProperties}>
            {children}
            <span/>
        </h2>
    )
}

export default SectionTitle
