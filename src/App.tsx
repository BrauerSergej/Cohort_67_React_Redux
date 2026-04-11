// import Layout from "./lessons/Lesson_18_Employee_Project/components/Layout/Layout"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// import Employee from "./lessons/Lesson_18_Employee_Project/components/Employees/Employees"
// import CreateEmployee from "./lessons/Lesson_18_Employee_Project/components/CreateEmployee/CreateEmployee"
// import { ROUTES } from "./lessons/Lesson_18_Employee_Project/components/routesthighttech"
import { Provider } from "react-redux"
import { store } from "store/store"
import { ROUTES } from "lessons/Lesson_19_Project_Weather/routes/routes"
import Layout from "lessons/Lesson_19_Project_Weather/components/layout/Layout"
import Home from "lessons/Lesson_19_Project_Weather/pages/home/Home"
import Weather from "lessons/Lesson_19_Project_Weather/pages/weather/Weather"
// import Homework_17 from "homeworks/homework_17/Homework_17"
import GlobalStyles from "styles/GlobalStyles"

function App() {
  return (
    // <>{/* <Lesson_17 /> */}</>
    // <BrowserRouter>
    //   {/* <Layout/> */}
    //   {/* <Homework_17/> */}
    //   <Provider store={store}>
    //     <Layout>
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={<Navigate to={ROUTES.CREATE_EMPLOYEE} />}
    //         />
    //         <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
    //         <Route path={ROUTES.EMPLOYEES} element={<Employee />} />
    //         <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
    //       </Routes>
    //     </Layout>
    //   </Provider>
    // </BrowserRouter>

    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.WEATHERS} element={<Weather />} />
            <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  )
}
export default App
