import styled from "@emotion/styled"

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const InputComponent = styled.input`
  height: 48px;
  width: 550px;
  /* width: min(550px, 100%); */
  border-radius: 40px;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 12px 0 12px 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  outline: none;
  font-weight: 600;
  line-height: 1;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: rgba(255, 255, 255, 1);
    font-family: "Inter", sans-serif;
    -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
    box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: background-color 5000s ease-in-out 0s;
  }
`
