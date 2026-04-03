import {
  OutputCard,
  CardInfo,
  UserInfo,
  InfoContainer,
  Card,
  ButtonControl,
  RemoveAllWrapper,
  EmployeesPageWrapper,
} from "./styles"
import Button from "components/Button/Button"
import type { IEmployeeData } from "store/redux/employeeSlice/types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeSliceActions,
  employeeSliceSelectors,
} from "store/redux/employeeSlice/employeesSlice"

function Employees() {
  const dispatch = useAppDispatch()
  const userData = useAppSelector(employeeSliceSelectors.employees)

  const deleteCard = (id: string) => {
    dispatch(employeeSliceActions.deleteEmployee(id))
  }
  const removeAllEmployees = () => {
    dispatch(employeeSliceActions.clearEmployees())
  }
  
  return (
    <EmployeesPageWrapper>
      <Card>
        {userData.map((employee: IEmployeeData) => (
          <OutputCard key={employee.id}>
            <InfoContainer>
              <CardInfo>Name</CardInfo>
              <UserInfo>{employee.name}</UserInfo>
            </InfoContainer>
            <InfoContainer>
              <CardInfo>Surname</CardInfo>
              <UserInfo>{employee.surname}</UserInfo>
            </InfoContainer>
            <InfoContainer>
              <CardInfo>Age</CardInfo>
              <UserInfo>{employee.age}</UserInfo>
            </InfoContainer>
            <InfoContainer>
              <CardInfo>Job position</CardInfo>
              <UserInfo>{employee.jobposition}</UserInfo>
            </InfoContainer>
            <ButtonControl>
              <Button
                isRed
                name="Delete"
                onClick={() => deleteCard(employee.id)}
              />
            </ButtonControl>
          </OutputCard>
        ))}
      </Card>
      {userData.length > 1 && (
        <RemoveAllWrapper>
          <Button
            isRed
            name="Remove All Employees"
            onClick={removeAllEmployees}
          />
        </RemoveAllWrapper>
      )}
    </EmployeesPageWrapper>
  )
}
export default Employees
