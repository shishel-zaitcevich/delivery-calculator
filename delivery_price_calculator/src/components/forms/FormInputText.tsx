import { TextField } from '@mui/material';
import { FormInputProps } from '../Types';
import React from 'react';
import { Controller } from 'react-hook-form';

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
        pattern: /^[0-9]+$/i,
      }}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          helperText={error ? 'Please, enter a value or use numbers' : null}
          error={!!error}
          size="small"
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
