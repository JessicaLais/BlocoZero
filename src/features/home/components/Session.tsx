export type SessionItemProps = {
    id: string
    title: string
    enterprise: string
    photoUrl: string
    startDate: string
    endDate: string
}

type Props = React.ComponentProps<"a"> & {
    data: SessionItemProps
}

export function SessionItem({ data, ...rest }: Props) { 
    console.log(data)   
    return (
        <a 
            className="flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md border-1 border-gray-300 p-2"
            {...rest}
        >
            <img className="w-8 h-8" src={data.photoUrl} alt="Ícone da categoria"/>

            <div className="flex-1 flex flex-col">
                <strong className="text-sm text-gray-100">{data.title}</strong>
                <span className="text-xs text-gray-500">{data.enterprise}</span>
            </div>

        </a>
    )
}