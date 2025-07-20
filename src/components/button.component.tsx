import type {FC} from 'react'

interface tipeData {
    label: string,
    onClick: () => void,
    disabled: boolean,
}


const Button: FC<tipeData> = ({label, onClick, disabled}: tipeData) => {
    return (
        <>
            <button onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </>
    )
}

export default Button