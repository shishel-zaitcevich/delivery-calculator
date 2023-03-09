import { TextField } from '@mui/material';
import { FormInputProps } from 'components/Types';
import React from 'react';
import { Controller } from 'react-hook-form';

export const FormInputText = ({ name, control, label }: FormInputProps) => {
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
