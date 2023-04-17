import { ReactElement } from 'react'
import './MainTitle.scss'

interface Props {
    children: String
}

function MainTitle({ children }: Props): ReactElement {

    return (
        <h1 className="title">
            {children
                .split(' ')
                .map((word, index) => (
                    <span
                        data-text={word}
                        key={index}
                        className={`background-color background-color-${index}`}
                    >
                       <span className={`foreground-color foreground-color-${index}`}>
                            {word}
                       </span>
                   </span>
                ))
            }
        </h1>
    )
}

export default MainTitle
