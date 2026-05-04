import { ButtonComponent } from "./styles"
import { ButtonProps } from "./types"

function Button({
  name,
  type = "button",
  onClick,
  disabled,
  isSearch,
}: ButtonProps) {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      // Передаем наш флаг в стили с $, чтобы браузер не ругался
      $isSearch={isSearch}
    >
      {name}
    </ButtonComponent>
  )
}

export default Button
