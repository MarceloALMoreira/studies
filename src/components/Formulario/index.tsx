import React, { useState } from "react"
import Botao from "../Botao"
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefa"
import { FormularioProps } from "../../types/formulario"
import {v4 as uuidv4} from 'uuid'


const Formulario: React.FC<FormularioProps> = ({ setTarefas }) => {

    const [nomeTarefa, setNomeTarefa] = useState('');
    const [tempoEstudo, setTempoEstudo] = useState('00:00');

    const handleTarefaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeTarefa(event?.target.value)
    }

    const handleTempoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempoEstudo(event?.target.value)
    }
    const handleSaveForm = (evento: React.FormEvent) => {
        evento.preventDefault();
        const novaTerefa: ITarefa = {
            nome: nomeTarefa,
            tempo: tempoEstudo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }
        // Adicione a nova tarefa ao estado tarefas
        setTarefas((tarefasAntigas) => [...tarefasAntigas, novaTerefa])

        // Limpe os campos de input após o envio.
        setNomeTarefa(''),
        setTempoEstudo('00:00')
    }
    return (
        <form onSubmit={handleSaveForm} className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa" className="">Adiciona um novo Estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que voce quer estudar ?"
                    value={nomeTarefa}
                    onChange={handleTarefaChange}
                    required />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    step='1'
                    value={tempoEstudo}
                    onChange={handleTempoChange}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>
            <Botao text="Cadastrar" type="submit" />
        </form>
    )
}

export default Formulario