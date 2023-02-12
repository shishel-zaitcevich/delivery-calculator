import { InputTypes } from 'components/Types';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export function NumberForms() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InputTypes>({ mode: 'onChange' });

  const submitHandler: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
  };

  const [orderPrice, setOrderPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dateTime, setDateTime] = useState('');

  return (
    <>
      <div className={''}>
        <form className={''} onSubmit={handleSubmit(submitHandler)}>
          <h2>Delivery fee calculator</h2>
          <div className={''}>
            <label>Order Price {`(€)`}</label>
            <input
              placeholder="10"
              autoComplete="off"
              className={''}
              {...register('orderPrice', {
                required: 'Field is required',
                pattern: {
                  value: /^[0-9]+$/i,
                  message: 'Only numbers can be used',
                },
              })}
            />
            {<p> {errors.orderPrice && errors.orderPrice.message}</p>}
          </div>
          <div className={''}>
            <label>Distance {`(m)`}</label>
            <input
              placeholder="1000"
              autoComplete="off"
              className={''}
              {...register('distance', {
                required: 'Field is required',
                pattern: {
                  value: /^[0-9]+$/i,
                  message: 'Only numbers  can be used',
                },
              })}
            />
            {<p> {errors.distance && errors.distance.message}</p>}
          </div>
          <div className={''}>
            <label>Quantity {`(pieces)`}</label>
            <input
              placeholder="1000"
              autoComplete="off"
              className={''}
              {...register('quantity', {
                required: 'Field is required',
                pattern: {
                  value: /^[0-9]+$/i,
                  message: 'Only numbers can be used',
                },
              })}
            />
            {<p> {errors.quantity && errors.quantity.message}</p>}
          </div>
          <div>
            <label htmlFor="meeting-time">Choose a time for your delivery:</label>
            <input
              type="datetime-local"
              id="delivery-time"
              {...register('dateTime', { required: true })}
            />
            {errors.dateTime && <p>Field is required</p>}
          </div>
          <div className={''}>
            <button>Submit</button>
          </div>

          <output name="result">delivery price is ....</output>
        </form>
      </div>
    </>
  );
}
