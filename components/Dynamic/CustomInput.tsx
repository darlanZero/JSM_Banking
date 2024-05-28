import React, { useState } from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { CustomInputProps } from '@/types'
import { Button } from '../ui/button'

const CustomInput = ({control, name, type, placeholder, className}: CustomInputProps) => {

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword((show) => !show)

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
                        type={type === 'password' ? (showPassword ? 'text': 'password'): type}
                        placeholder={placeholder}
                        className={className}
                        {...field}
                    />
                </FormControl>

                <FormMessage className='form-message mt-2' />
            </div>
              {
                type === 'password' && (
                    <Button
                        type='button'
                        className='bg-bank-gradient text-neutral-800 text-lg capitalize outline-2'
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? 'Hide': 'Show'}
                    </Button>
                )
              }
        </div>
      )}
    >
    </FormField>
  )
}

export default CustomInput