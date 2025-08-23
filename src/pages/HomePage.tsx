import { useState, useEffect } from "react";
import searchSvg from "../assets/search.svg"; // Adjust the path as needed
import { SessionItem } from "../features/home/components/Session"
import { Input } from "../features/home/components/Input"
import { Button } from "../features/home/components/Button";
import { Pagination } from "../features/home/components/Pagination";

interface Obra {
    id: string;
    title: string;
    enterprise: string;
    photoUrl: string;
    startDate: string;
    endDate: string;
}


export function Home(){
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [totalOfPage, setTotalOfPage] = useState(10)
    const [works, setWorks] = useState<Obra[]>([])

    function fetchRefunds(e: React.FormEvent) {
        e.preventDefault();
        
    }
    useEffect(() => {
       const getWorks = async () => {
        const response = await fetch(`http://localhost:8080/work`);
        const data = await response.json();
        setWorks(data);
       }
      getWorks();
    },[]
)

    function handlePagination(action: "next" | "previous"){
        setPage((prevPage) => {
            if(action === "next" && prevPage < totalOfPage){
                return prevPage + 1
            }
            
            if(action === "previous" && prevPage > 1){
                return prevPage - 1
            }

            return prevPage
        })
    }

    return(
        <div className="flex justify-center p-15">
            <main className="bg-white rounded-xl p-10 w-[768px] flex-col">
                <h1 className="text-gray-100 font-bold text-xl flex-1">Obras</h1>
                <form onSubmit={fetchRefunds} className="flex flex-1 items-center justify-between mb-4 pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6 ">
                <Input onChange={(e) => setName(e.target.value)} placeholder="Pesquisar"/>
                <Button variant="icon" type="submit">
                    <img src={searchSvg} alt="Ícone de pesquisar" 
                    className="w-5"/>
                </Button>
            </form>
             <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                {works.map((work) => (
                        <SessionItem key={work.id} data={work} href={`/work/${work.id}`}/>
                    ))}
            </div>
            <Pagination current={page}
            total={totalOfPage}
            onNext={() => handlePagination("next")}
            onPrevious={() => handlePagination("previous")}
            />

            </main>
        </div>
    )
}