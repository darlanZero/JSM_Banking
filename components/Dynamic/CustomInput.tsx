import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const CustomInput = ({control, name, type, placeholder, className}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({field}) => (
        <div className='form-item'>
            <FormLabel className='form-label'>
                {name.charAt(0).toLocaleUpperCase() + name.slice(1)}
            </FormLabel>

            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input 
                        type={type}
                        placeholder={placeholder}
                        className={className}
                        {...field}
                    />
                </FormControl>

                <FormMessage className='form-message mt-2' />
            </div>
        </div>
      )}
    >

    </FormField>
  )
}

export default CustomInput