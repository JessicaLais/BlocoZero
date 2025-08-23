//import Lincoln from '../../../assets/PredioLincoln.svg';
export type ContentBoxProps = {
    data : {
        id: string;
        title: string;
        enterprise: string;
        photoUrl: string;
        startDate: string;
        endDate: string;
    }
}
export function ContentBox({data}: ContentBoxProps) {
    
    console.log(data, "Testando a força do macaco do centro oeste")
    return (
        <main className="bg-white rounded-sm shadow-xl w-full  2xl:max-h-[400px] flex">
            <div className=" flex-shrink-0">
                <img
                    src={data.photoUrl}
                    alt="Prédio Lincoln"
                    className="2xl:max-h-[380px] md:max-h-[290px] h-auto w-full object-cover"
                />
            </div>

            <div className='flex flex-col text-gray-950 p-4 md:p-6 lg:p-8 justify-center'>
                <section className='md:text-lg 2xl:text-2xl flex flex-col md:gap-2 2xl:gap-4'>
                    <h1 className='font-bold text-2xl 2xl:text-4xl text-gray-800 mb-2'>{data.title}</h1>
                    <p className="text-gray-600"><strong>Local:</strong> xxxxx</p>
                    <p className="text-gray-600"><strong>Empresa:</strong> {data.enterprise} </p>
                    <p className="text-gray-600"><strong>CNPJ:</strong> XXXXXXX</p>
                    <p className="text-gray-600"><strong>Data de inicio:</strong> {data.startDate}</p>
                    <p className="text-gray-600"><strong>Previsão de Termino:</strong> {data.endDate}</p>
                </section>
            </div>
        </main>
    )
}