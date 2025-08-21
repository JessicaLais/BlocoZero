import { useState } from "react"
import { Cards } from "../features/home/components/Cards"
import { ContentBox } from "../features/home/components/ContentBox"
export function Home(){
    const [orcamento, setOrcamento] = useState("")
    const [gasto, setGasto] = useState("")
    const [operadores, setOperadores] = useState("")
    const [progresso, setProgresso] = useState("")
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-white-100 my-30">
            <ContentBox />
            <Cards />
        </div>
    )
}