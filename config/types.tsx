export interface BankCardType {
  title: string;
  description: string;
  detail: string;
  id: number;
  image: string;
}
export interface cardComponentType extends BankCardType {
  className: string;
  loading: boolean;
  onClick: () => void;
}
