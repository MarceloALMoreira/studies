import { ITarefa } from '../../../types/tarefa'
import style from '../Item/Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Item = ({ nome, tempo, selecionado, completado, id, selecionaTarefa }: Props) => {
    // console.log('item atual:', { nome, tempo, selecionado, completado, id })
    return (
        <li className={`${style.item} ${selecionado ?
            style.itemSelecionado : ''} ${completado ?
                style.itemCompletado : ''}`}
                // aqui vamos selecionar a terelfa quando nao for complatada se for ele nao seleciona.
            onClick={() => !completado && selecionaTarefa({
                nome,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {completado && <span
                className={style.concluido}
                aria-label='tarefa completada'></span>}
        </li>
    )
}

export default Item