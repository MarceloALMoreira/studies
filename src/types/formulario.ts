// types.ts

import { ReactNode } from 'react';
import { ITarefa } from './tarefa';


export interface FormularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
    children?: ReactNode; // Exemplo de outra propriedade opcional
}
