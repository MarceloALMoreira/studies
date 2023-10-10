import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined
}
const Relogio = ({ tempo = 0 }: Props) => {
    const minutos = Math.floor(tempo / 60)
    const segungos = tempo % 60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')

    const [segundoDezena, segundoUnidade] = String(segungos).padStart(2, '0')

    return (
        <main>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </main>
    )
}

export default Relogio