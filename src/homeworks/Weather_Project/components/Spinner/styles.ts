import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Создаем анимацию кручения
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// Создаем стилизованный (спиннер)
export const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 20px auto;
`;