import { Cards } from "../features/home/components/Cards"
import { ContentBox } from "../features/home/components/ContentBox"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"

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
    const navigate = useNavigate()

    const [work, setwork] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       const getwork = async () => {
        try{
            const response = await fetch(`http://localhost:8080/work/${id}`);
            if (!response.ok) {
          navigate("/not-found");
          return; 
        }
        const data = await response.json();
        setwork(data);
        }catch(error){
        console.error("Erro ao buscar dados:", error);
        navigate("/not-found");
        }finally{
            setLoading(false)
        }
       }
       getwork();
    },[id, navigate]
)
    if (loading) {
    return <div>Carregando...</div>;
  }

    return (
        <div className="w-full flex flex-col items-center justify-center bg-white-100 p-8">
            <ContentBox  data={work}/>
            <Cards data={work}/>
        </div>
    )
}