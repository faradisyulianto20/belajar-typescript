import { useState } from "react"

const Typing = () => {
    type userProfile = {
        name: string,
    }

    const [nilai, setNilai] = useState<userProfile>({name: ''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNilai({name: e.target.value});
    };

    return (
        <div>
        <input 
            type="text" 
            value={nilai.name} 
            onChange={handleChange} 
            placeholder="Ketik sesuatu..." 
        />
        <p>Kamu mengetik: {nilai.name}</p> {/* 3. Tampilkan apa yang diketik */}
        </div>
    )
}

export default Typing