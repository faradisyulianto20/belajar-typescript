import { useState } from "react"

const Counter = () => {
    const [nilai, setNilai] = useState(0)

    return (
        <>
            <p>{nilai}</p>
            <button onClick={() => setNilai(nilai + 1)}>tambah</button>
            <button onClick={() => setNilai(nilai - 1)}>kurang</button>

        </>
    )
}

export default Counter
