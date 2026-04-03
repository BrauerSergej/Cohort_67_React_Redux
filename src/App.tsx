import Layout from "./lessons/Lesson_18_Employee_Project/components/Layout/Layout"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Employee from "./lessons/Lesson_18_Employee_Project/components/Employees/Employees"
import CreateEmployee from "./lessons/Lesson_18_Employee_Project/components/CreateEmployee/CreateEmployee"
import { ROUTES } from "./lessons/Lesson_18_Employee_Project/components/routesthighttech"
import { Provider } from "react-redux"
import { store } from "store/store"
// import Homework_17 from "homeworks/homework_17/Homework_17"

function App() {
  return (
    // <>{/* <Lesson_17 /> */}</>
    <BrowserRouter>
      {/* <Layout/> */}
      {/* <Homework_17/> */}
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={ROUTES.CREATE_EMPLOYEE} />}
            />
            <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
            <Route path={ROUTES.EMPLOYEES} element={<Employee />} />
            <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  )
}
export default App
