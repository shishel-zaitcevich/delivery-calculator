import { InputTypes } from 'components/Types';
import React from 'react';
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

  return (
    <>
      <div className={''}>
        <form className={''} onSubmit={handleSubmit(submitHandler)}>
          <h2>Delivery fee calculator</h2>
          <div className={''}>
            <label>Order Price {`(€)`}</label>
            <input placeholder="10" autoComplete="off" className={''} {...register('orderPrice')} />
          </div>
          <div className={''}>
            <label>Distance {`(m)`}</label>
            <input placeholder="1000" autoComplete="off" className={''} {...register('distance')} />
          </div>
          <div className={''}>
            <label>Quantity {`(pieces)`}</label>
            <input placeholder="1000" autoComplete="off" className={''} {...register('quantity')} />
          </div>
          <div>
            <label htmlFor="meeting-time">Choose a time for your delivery:</label>

            <input type="datetime-local" id="delivery-time" {...register('dateTime')}></input>
          </div>
          <div className={''}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
