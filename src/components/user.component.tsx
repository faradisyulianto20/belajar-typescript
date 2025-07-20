import type {FC} from 'react'

type tipeData = {
    name: string,
    age: number,
    isStudent: boolean
}

const User: FC <tipeData> = ({name, age, isStudent}: tipeData) => {
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{isStudent}</h1>
        </>
    )
} 

export default User