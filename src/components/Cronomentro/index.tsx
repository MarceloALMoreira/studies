import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefa"
import { useEffect, useState } from "react"

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}
const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {

    const [tempo, setTempo] = useState<number>();


    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundo(selecionado.tempo))
        }
        // ele aceita dois paramentro uma função e um array de depedências
    }, [selecionado])

    function regressiva(contador: number = 0) {
        // usando uma função recurssiva
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            // Quando finalizado o tempo ele chama essa função
            finalizarTarefa()
        }, 1000)
    }
    // console.log('Conversão', tempoParaSegundo('01:01:01'))

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <div>
                <Botao
                    onClick={() => regressiva(tempo)}
                    text="Começar" />
            </div>
        </div>
    )
}

export default Cronometro