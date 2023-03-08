import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormInputProps } from './FormInputProps';
import { Controller } from 'react-hook-form';

export default function BasicDateTimePicker({ name, control }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTime']}>
            <DateTimePicker onChange={onChange} value={value} label="Pick date and time" />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  );
}
