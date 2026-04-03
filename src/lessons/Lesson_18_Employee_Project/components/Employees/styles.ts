import styled from "@emotion/styled"
// import Button from "components/Button/Button";

export const OutputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 590px;
  min-height: 470px;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 60px;
  gap: 30px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CardInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: rgba(111, 111, 111, 1);
`

export const UserInfo = styled.p`
  font-weight: 700;
  line-height: 130%;
  font-size: 28px;
  padding: 0;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  flex-wrap: wrap;
`

export const ButtonControl = styled.div`
  & button {
    border-radius: 6px;
  }
`
export const EmployeesPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RemoveAllWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  & button {
    width: 700px;
    max-width: 100%;
    border-radius: 6px;
  }
`
