import style from './Botao.module.scss'
type PropsButton = {
    text: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void

}

const Botao = (props: PropsButton) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (

        <button onClick={handleClick}
            className={style.botao}>
            {props.text}
        </button>
    )
}

export default Botao