export function Cards(){
    return (
        <div className="flex flex-row gap-20 my-40">
            <div className="flex flex-col items-center w-50 h-50 bg-white-200 p-2 border-1 border-gray-950 shadow-md">
                <h1 className="text-3xl text-gray-950 font-semibold">Orçamento</h1>
                <p className="text-4xl text-gray-950 my-8">3 milhões</p>
            </div>
             <div className="flex flex-col items-center w-50 h-50 bg-white-200 p-2 border-1 border-gray-950 shadow-md">
                <h1 className="text-3xl text-gray-950 font-semibold">Gastos</h1>
                <p className="text-4xl text-gray-950 my-8">200 Mil</p>
            </div>
            <div className="flex flex-col items-center w-50 h-50 bg-white-200 p-2 border-1 border-gray-950 shadow-md">
                <h1 className="text-3xl text-gray-950 font-semibold">Operadores</h1>
                <p className="text-4xl text-gray-950 my-8">30</p>
            </div>
            <div className="flex flex-col items-center w-50 h-50 bg-white-200 p-2 border-1 border-gray-950 shadow-md">
                <h1 className="text-3xl text-gray-950 font-semibold">Progresso</h1>
                <p className="text-4xl text-gray-950 my-8">200 Mil</p>
            </div>
        </div>
    )
}