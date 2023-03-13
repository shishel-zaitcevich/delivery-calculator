import { Calculation } from '../Calculation';
import { InputTypes } from '../Types';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Paper, Typography, Button } from '@mui/material';
import { FormInputText } from './FormInputText';
import BasicDateTimePicker from './FormInputDate';

export function NumberForms() {
  const {
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

  Calculation(values);

  const submitHandler: SubmitHandler<InputTypes> = () => {};

  return (
    <>
      <div className="container">
        <div className="gif">
          <img className="gif" src={require('../../assets/Take_Away.gif')} alt="gif..." />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Paper
              className="paper"
              style={{
                display: 'grid',
                gridRowGap: '20px',
                padding: '20px',
                // margin: '10px 150px',
              }}
            >
              <Typography variant="h6"> Delivery fee calculator</Typography>

              <FormInputText name="orderPrice" control={control} label="Cart value" />
              <FormInputText name="distance" control={control} label="Delivery distance" />
              <FormInputText name="quantity" control={control} label="Amount of items" />
              <BasicDateTimePicker name="dateTime" label="" control={control} />

              <Button onClick={handleSubmit(submitHandler)} variant={'contained'}>
                {' '}
                Calculate delivery price{' '}
              </Button>
              <Button onClick={() => reset()} variant={'outlined'}>
                {' '}
                Reset{' '}
              </Button>

              <Typography variant="h4">
                Delivery fee is {values.deliveryFee.toFixed(2)} €
              </Typography>
            </Paper>
          </form>
        </div>
      </div>
    </>
  );
}
