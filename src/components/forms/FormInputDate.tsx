import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Controller } from 'react-hook-form';
import { FormInputProps } from 'components/Types';

export default function BasicDateTimePicker({ name, control }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTime']}>
            <DateTimePicker
              slotProps={{
                textField: {
                  helperText: error ? 'Please, pick date and time' : null,
                  error: !!error,
                },
              }}
              onChange={onChange}
              value={value}
              label="Pick date and time"
              ampm={false}
              disablePast
            />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  );
}
