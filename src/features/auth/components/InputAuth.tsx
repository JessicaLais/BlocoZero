type Props = React.ComponentProps<"input"> & {
    legend?: string
}

export function InputAuth({ legend, type="text", ...rest}: Props) {
    return(
        <fieldset className="flex flex-col gap-2 w-full">
            {legend && <legend className="text-white text-sm py-1">{legend}</legend>}
            <input type={type} className="w-full h-12 rounded-lg bg-white px-4 text-sm text-gray-400  outline-none focus:border-2 focus:border-gray-300  placeholder-gray-300" {...rest} />
        </fieldset>
    )
}