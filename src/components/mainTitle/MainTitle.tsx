import { CSSProperties, ReactElement } from 'react'
import './MainTitle.scss'

interface ElementStyle extends CSSProperties {
    '--content': string;
}

interface Props {
    children: String
}

function MainTitle({ children }: Props): ReactElement {

    return (
        <h1 className="title">
            {children
                .split(' ')
                .map((str, index) => (
                    <span
                        key={index}
                        className={`background-color background-color-${index}`}
                        style={{ '--content': `"${str}"` } as ElementStyle}
                    >
                       <span className={`foreground-color foreground-color-${index}`}>
                            {str}
                       </span>
                   </span>
                ))
            }
        </h1>
    )
}

export default MainTitle
