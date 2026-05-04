import { type ChangeEvent } from "react";

export interface InputProps {
  id?: string;
  name: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
