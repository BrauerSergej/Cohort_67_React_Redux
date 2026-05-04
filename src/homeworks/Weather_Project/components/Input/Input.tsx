import { type InputProps } from "./types"
import {
  InputComponent,
  InputWrapper,
} from "./styles"

function Input({
  id,
  name,
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {/* // Условный рендеринг
    // - если слева от && стоит false, то элемент справа от && на странице не показывается(т.е скрывается)
    // - если слева от && стоит true, то элемент справа от && на странице показывается */}
      {/* {!!error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputWrapper>
  )
}

export default Input
