const User = (props: {name: string, age: number, isStudent: boolean}) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.isStudent}</h1>
        </>
    )
} 

export default User