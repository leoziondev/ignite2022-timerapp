import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react';
import { CyclesContext } from '../..';
import { useFormContext } from 'react-hook-form';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext) 
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        {...register('task')}
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={ !!activeCycle }
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Bla Bla blaBla" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        {...register('minutesAmount', {valueAsNumber: true})}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={ !!activeCycle }
      />

      <span>minutos.</span>
    </FormContainer>
  )
}