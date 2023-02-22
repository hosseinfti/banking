export interface BankCardType {
  title?: string;
  description?: string;
  detail: string;
  id: number;
  image: string;
}
export interface cardComponentType
  extends Pick<BankCardType, "title" | "description"> {
  className?: string;
  loading?: boolean;
  onClick?: () => void;
  detail?: React.ReactNode;
  image?: React.ReactNode;
}
