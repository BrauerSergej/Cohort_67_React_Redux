import styled from "@emotion/styled";

export const EmployeesFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
  gap: 30px;
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 24px;
  font-weight: normal;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonControl = styled.div`
  & button {
    background: rgba(31, 39, 245, 1);
    border-radius: 6px;
    line-height: 150%;
  }
`;
