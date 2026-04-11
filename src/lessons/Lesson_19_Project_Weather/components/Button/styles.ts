import styled from "@emotion/styled";

interface StyledButtonProps {
  $isSearch?: boolean;
}

export const ButtonComponent = styled.button<StyledButtonProps>`
  width: 155px;
  height: 48px;
  border-radius: 50px;
  padding: 12px 40px;
  font-size: 20px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  line-height: 100%;
  font-style: Regular;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  outline: none;

  /* --- ЛОГИКА ЦВЕТА И РАМКИ --- */

  /* Если ПОИСК: Синий фон и НЕТ рамки */
  /* Если НЕ поиск: Прозрачный фон и БЕЛАЯ рамка */
  background-color: ${({ $isSearch }) =>
    $isSearch ? "#3678b4" : "transparent"};
  border: ${({ $isSearch }) => ($isSearch ? "none" : "1px solid #ffffff")};

  &:hover {
    /* При наведении немного меняем яркость */
    background-color: ${({ $isSearch }) =>
      $isSearch ? "#2d6395" : "rgba(255, 255, 255, 0.1)"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
