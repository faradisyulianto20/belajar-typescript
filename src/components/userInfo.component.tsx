import type { FC } from "react"
import type { Info } from "./types"

type userProps = {
    user: Info
}

const UserInfo: FC<userProps> = ({user}) => {
    return (
        <>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}

export default UserInfo