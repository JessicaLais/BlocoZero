import Lincoln from '../../../assets/PredioLincoln.svg';
export function ContentBox() {
    return (
        <main className="bg-gray-300 w-[1120px] h-[400px] flex my-20">
            <div className="p-2">
                <img src={Lincoln} alt="" className='w-[280px] h-full'/>
            </div>
            <div className='flex flex-col text-gray-950 p-10 justify-center'>
                <section className='text-2xl flex flex-col gap-4 justify-center'>
                    <h1 className='font-semibold text-4xl'>Obra do prédio Lincoln</h1>
                    <p><strong>Local:</strong> São Paulo, Rua João Sampaio Correia</p>
                    <p><strong>Empresa:</strong> XXXXXX </p>
                    <p><strong>CNPJ:</strong> XXXXXXX</p>
                    <p><strong>Data de inicio:</strong> São Paulo, Rua João Sampaio Correia</p>
                    <p><strong>Previsão de Termino:</strong> São Paulo, Rua João Sampaio Correia</p>
                </section>
            </div>


        </main>
    )
}