import style from './Lista.module.scss'
import Item from './Item'
import { ITarefa } from '../../types/tarefa'

interface Props {
    tarefas: ITarefa[]
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {


    return (
        <aside className={style.listaTarefas}>
            <ul >
                {tarefas.map((tarefa) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id}
                        {...tarefa} />
                ))
                }
            </ul>
            {/* Aqui Eu estou desaclopando a responsabilidade do componente
            A funmção desse componente é inteirar a lista de Item que vem de outro componente. aqui etou usando o principio da SRP */}
        </aside>
    )
}


export default Lista