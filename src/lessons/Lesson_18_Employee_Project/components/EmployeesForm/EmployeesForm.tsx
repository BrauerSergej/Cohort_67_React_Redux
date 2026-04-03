// ? Что это за компонент
// EmployeesForm — это компонент формы, где пользователь:
// вводит имя
// фамилию
// возраст
// должность
// Потом нажимает Create, и данные сохраняются в Context.
// То есть этот компонент создаёт объект сотрудника и записывает его в общее хранилище.

import { useFormik } from "formik"
import * as Yup from "yup"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import { v4 } from "uuid"
import {
  EmployeesFormContainer,
  InputsContainer,
  ButtonControl,
} from "./styles"
import { CONTACT_EMPLOYEES_FORM } from "store/redux/employeeSlice/types"
import { useAppDispatch } from "store/hooks"
import { employeeSliceActions } from "store/redux/employeeSlice/employeesSlice"

function EmployeesForm() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [CONTACT_EMPLOYEES_FORM.NAME]: Yup.string()
      .required("Name field is required")
      .min(2, "Minimum name field length should be 2")
      .max(50, "Maximum name field length should be 50"),
    [CONTACT_EMPLOYEES_FORM.SURNAME]: Yup.string()
      .required("Surname field is required")
      .max(15, "Maximum name field length should be 15"),
    [CONTACT_EMPLOYEES_FORM.AGE]: Yup.string()
      .required("Age field is required")
      .min(1, "Minimum age field length should be 1")
      .max(3, "Maximum age field length should be 3"),
    [CONTACT_EMPLOYEES_FORM.JOB_POSITION]: Yup.string().max(
      30,
      "Maximum Full name field length should be 30",
    ),
  })
  const formik = useFormik({
    // name у элементов формы должен совпадать с ключом обьекта initialValues
    initialValues: {
      [CONTACT_EMPLOYEES_FORM.NAME]: "",
      [CONTACT_EMPLOYEES_FORM.SURNAME]: "",
      [CONTACT_EMPLOYEES_FORM.AGE]: "",
      [CONTACT_EMPLOYEES_FORM.JOB_POSITION]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      const newEmployee = {
        ...values,
        id: v4(),
      }
      dispatch(employeeSliceActions.addEmployee(newEmployee))
      resetForm()
      console.log("Данные с ID сохранены:", newEmployee)
    },
  })

  return (
    <EmployeesFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="employee-name"
          label="Name*"
          placeholder="Your name"
          name={CONTACT_EMPLOYEES_FORM.NAME}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_EMPLOYEES_FORM.NAME]}
          error={formik.errors[CONTACT_EMPLOYEES_FORM.NAME]}
        />
        <Input
          id="employee-surname"
          label="Surname*"
          placeholder="Your surname"
          name={CONTACT_EMPLOYEES_FORM.SURNAME}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_EMPLOYEES_FORM.SURNAME]}
          error={formik.errors[CONTACT_EMPLOYEES_FORM.SURNAME]}
        />
        <Input
          id="employee-age"
          label="Age*"
          placeholder="Your age"
          name={CONTACT_EMPLOYEES_FORM.AGE}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_EMPLOYEES_FORM.AGE]}
          error={formik.errors[CONTACT_EMPLOYEES_FORM.AGE]}
        />
        <Input
          id="employee-jobposition"
          label="Job Position"
          placeholder="QA"
          name={CONTACT_EMPLOYEES_FORM.JOB_POSITION}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_EMPLOYEES_FORM.JOB_POSITION]}
          error={formik.errors[CONTACT_EMPLOYEES_FORM.JOB_POSITION]}
        />
      </InputsContainer>
      <ButtonControl>
        <Button name="Create" type="submit" />
      </ButtonControl>
    </EmployeesFormContainer>
  )
}
export default EmployeesForm
