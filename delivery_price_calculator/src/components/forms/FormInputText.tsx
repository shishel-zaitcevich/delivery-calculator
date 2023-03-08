import { TextField } from '@mui/material';
import { InputTypes } from 'components/Types';
import React, { useState } from 'react';
import { Controller, useForm, useFormContext, useFormState } from 'react-hook-form';

import { FormInputProps } from './FormInputProps';

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  const [names, setName] = useState();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  // const { ref, ...rest } = register('name', { required: true });

  // const currentName = watch('name');

  // function onSubmit(data: FormInputProps) {
  //   setName(data.name);
  //   reset();
  // }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          error={value === ''}
          helperText={value === '' ? 'Please enter a value!' : ' '}
          // required={true}
          // helperText={error ? error.message : null}
          // size="small"
          // error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
