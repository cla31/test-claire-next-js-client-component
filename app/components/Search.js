'use client' //syntaxe pour un client component

import { useState} from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    console.log("client component");

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button>
                🚀
            </button>
        </form>
    )
}