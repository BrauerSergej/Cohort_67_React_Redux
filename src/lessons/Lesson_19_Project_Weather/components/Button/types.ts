export interface ButtonProps {
  name?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  disabled?: boolean
  isSearch?: boolean;
}
