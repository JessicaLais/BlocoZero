import { Cards } from "../features/home/components/Cards"
import { ContentBox } from "../features/home/components/ContentBox"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

interface Obra {
    id: string;
    title: string;
    enterprise: string;
    photoUrl: string;
    startDate: string;
    endDate: string;
    budget: string,
    employees: number,
    progress: string,
}

export function CardObra(){
    const {id} = useParams()
    const [work, setwork] = useState({})
    useEffect(() => {
       const getwork = async () => {
        const response = await fetch(`http://localhost:8080/work/${id}`);
        const data = await response.json();
        setwork(data);
       }
       getwork();
    },[]
)

    return (
        <div className="w-full flex flex-col items-center justify-center bg-white-100 p-4">
            <ContentBox  data={work}/>
            <Cards data={work}/>
        </div>
    )
}