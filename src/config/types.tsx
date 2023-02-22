export interface BankCardType {
  title: string;
  description: string;
  detail: string;
  id: number;
  image: string;
}
export interface cardComponentType {
  className?: string;
  loading?: boolean;
  onClick?: () => void;
  detail?: React.ReactNode;
  description?: string;
  title?: string;
  image?: React.ReactNode;
}
