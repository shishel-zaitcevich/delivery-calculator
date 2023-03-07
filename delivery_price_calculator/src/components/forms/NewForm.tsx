import * as React from 'react';
// import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form';

// type FormValues = {
//   usersData: {
//     orderPrice: number;
//     distance: number;
//     quantity: number;
//     dateTime: string;
//   }[];
// };

// const Total = ({ control }: { control: Control<FormValues> }) => {
//   const formValues = useWatch({
//     name: 'usersData',
//     control,
//   });

//   // const total = formValues.reduce(
//   //   (acc, current) => acc + (current.orderPrice || 0) * (current.quantity || 0),
//   //   0
//   // );
//   // return <p>Total Amount: {total}</p>;
// };

// export default function Form() {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       usersData: [{ orderPrice: 0, distance: 0, quantity: 0, dateTime: '' }],
//     },
//     mode: 'onChange',
//   });
//   const { fields, append, remove } = useFieldArray({
//     name: 'usersData',
//     control,
//   });
//   const onSubmit = (data: FormValues) => console.log(data);
//   console.log(fields);

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {fields.map((field, index) => {
//           return (
//             <div key={field.id}>
//               <section className={'section'} key={field.id}>
//                 <div className={''}>
//                   <label>Order Price {`(€)`}</label>
//                   <input
//                     className="order-price"
//                     // type="number"
//                     autoComplete="off"
//                     {...register(`usersData.${index}.orderPrice` as const, {
//                       required: 'Field is required',

//                       pattern: {
//                         value: /^[0-9]+$/i,
//                         message: 'Only numbers can be used',
//                       },
//                     })}
//                     // className={errors?.usersData?.[index]?.orderPrice ? 'error' : ''}
//                   />
//                   {
//                     <p>
//                       {' '}
//                       {errors.usersData?.[index]?.orderPrice &&
//                         errors.usersData?.[index]?.orderPrice?.message}
//                     </p>
//                   }
//                 </div>
//                 <div className={'distance'}>
//                   <label>Distance {`(m)`}</label>
//                   <input
//                     autoComplete="off"
//                     {...register(`usersData.${index}.distance` as const, {
//                       required: 'Field is required',
//                       pattern: {
//                         value: /^[0-9]+$/i,
//                         message: 'Only numbers can be used',
//                       },
//                     })}
//                     // className={errors?.usersData?.[index]?.distance ? 'error' : ''}
//                   />
//                   <p>
//                     {errors.usersData?.[index]?.distance &&
//                       errors.usersData?.[index]?.distance?.message}
//                   </p>
//                 </div>
//                 <div className={''}>
//                   <label>Quantity {`(pieces)`}</label>
//                   <input
//                     {...register(`usersData.${index}.quantity` as const, {
//                       required: 'Field is required',
//                       pattern: {
//                         value: /^[0-9]+$/i,
//                         message: 'Only numbers can be used',
//                       },
//                     })}
//                     // className={errors?.usersData?.[index]?.quantity ? 'error' : ''}
//                   />
//                   <p>
//                     {errors.usersData?.[index]?.quantity &&
//                       errors.usersData?.[index]?.quantity?.message}
//                   </p>
//                 </div>
//                 <div className={''}>
//                   <input
//                     type="datetime-local"
//                     // id="delivery-time"
//                     {...register(`usersData.${index}.dateTime` as const, {
//                       required: true,
//                     })}
//                     // className={errors?.usersData?.[index]?.dateTime ? 'error' : ''}
//                   />
//                   {errors.usersData?.[index]?.dateTime && <p>Field is required</p>}
//                 </div>
//               </section>
//             </div>
//           );
//         })}

//         {/* <Total control={control} /> */}
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
