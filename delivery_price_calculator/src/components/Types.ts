export interface InputTypes {
  orderPrice: number;
  distance: number;
  quantity: number;
  dateTime: string;
  deliveryFee: number;
}

export interface FormInputProps {
  name: string;
  control: object;
  label: string;
  setValue?: string;
}
