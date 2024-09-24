import { IInput } from '@/src/types'
import { DatePicker } from '@nextui-org/date-picker'
import { Controller, useFormContext } from 'react-hook-form';

interface IProps extends IInput{}

const FXDatePicker = ({label, name}: IProps) => {
    const { register, formState: { errors} } = useFormContext();
  return (
    <Controller 
    name={name}
    render={() => <DatePicker label={label} className="max-w-[284px]" />}
    />
  )
}

export default FXDatePicker