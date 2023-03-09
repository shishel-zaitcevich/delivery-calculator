import { Control, FieldValues } from 'react-hook-form';

export interface InputTypes {
  orderPrice: number;
  distance: number;
  quantity: number;
  dateTime: string;
  deliveryFee: number;
}

export interface FormInputProps {
  name: string;
  control?: Control<ControlField>;
  label: string;
  setValue?: string;
}

export type ControlField = FieldValues | any; //тип any прописан в документации к react-hook-form
