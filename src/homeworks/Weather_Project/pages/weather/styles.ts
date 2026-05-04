import styled from "@emotion/styled"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
`

export const ButtonControl = styled.div`
  padding-top: 40px;
  & button {
    /* width: 100%; */
    width: 709px;
    padding: 12px 40px;
    height: 48px;
    border: none;
    background-color: #3678b4;
    cursor: pointer;
    color: #ffffff;
    &:hover {
      border-radius: 50px;
      background-color: #4a90d9;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
