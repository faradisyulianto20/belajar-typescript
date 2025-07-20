import type { adminInfoList } from "./types"
import type { FC } from "react"

type adminProps = {
    admin: adminInfoList
}


const AdminInfo : FC<adminProps>= ({admin}) => {
    return (
        <>  
            <p>{admin.id}</p>
            <p>{admin.name}</p>
            <p>{admin.email}</p>
            <p>{admin.role}</p>
        </>
    )
}

export default AdminInfo