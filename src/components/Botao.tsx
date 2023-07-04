interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'    
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'green'
    console.log(cor)
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-700 to-${cor}-500
            text-white 
            rounded-md px-4 py-2
            ${props.className}`}>
            {props.children}
        </button>
    )
}