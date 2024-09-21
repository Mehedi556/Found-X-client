import { Input } from '@nextui-org/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

interface IProps {
    variant?: "flat" | "bordered" | "faded",
    size?: "sm" | "md" | "lg",
    required?: boolean,
    type?: string,
    label: string,
    name: string
}

const FXInput = ({variant = "bordered", size = "md", required = false, type = "text", label, name}:IProps) => {
    const { register } = useFormContext();
  return (
    <Input {...register(name)} variant={variant} size={size} required={required} type={type} label={label}/>
  )
}

export default FXInput