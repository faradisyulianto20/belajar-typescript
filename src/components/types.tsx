export interface Info {
    id: number,
    name: string,
    email: string
}

export interface adminInfoList extends Info {
    role: string
}