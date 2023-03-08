import { Calculation } from 'components/Calculation';
import { InputTypes } from 'components/Types';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Paper, Typography, Button } from '@mui/material';
import { FormInputText } from './FormInputText';
import BasicDateTimePicker from './FormInputDate';

export function NumberForms() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InputTypes>({
    mode: 'onChange',
    defaultValues: {
      orderPrice: 0,
      distance: 0,
      quantity: 0,
      dateTime: '',
    },
  });
  const values: InputTypes = getValues();
  // console.log(values);

  Calculation(values);

  const submitHandler: SubmitHandler<InputTypes> = () => {};

  return (
    <>
      <div className={'container'}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Paper
            style={{
              display: 'grid',
              gridRowGap: '20px',
              padding: '20px',
              margin: '10px 300px',
            }}
          >
            <Typography variant="h6"> Delivery fee calculator</Typography>

            <FormInputText name="orderPrice" control={control} label="Cart value" />
            <FormInputText name="distance" control={control} label="Delivery distance" />
            <FormInputText name="quantity" control={control} label="Amount of items" />
            <BasicDateTimePicker name="dateTime" control={control} label="" />

            <Button onClick={handleSubmit(submitHandler)} variant={'contained'}>
              {' '}
              Calculate delivery price{' '}
            </Button>
            <Button onClick={() => reset()} variant={'outlined'}>
              {' '}
              Reset{' '}
            </Button>
            <output name="result">delivery fee is {values.deliveryFee} €</output>
          </Paper>
        </form>
      </div>
    </>
  );
}
