import { Form } from "./styles"
import Input from "../Input/Input"
import { SEARCH_FORM } from "./types"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "../../redux/weatherSlice/weatherSlice"
import Button from "../Button/Button"

function SearchForm() {
  const dispatch = useAppDispatch()

  // Берем статус загрузки из стора, чтобы отключать кнопку при поиске
  const isLoading = useAppSelector(weatherSliceSelectors.isLoading)

  const formik = useFormik({
    initialValues: {
      [SEARCH_FORM.CITY]: "",
    },
    // используем ручную проверку в onSubmit
    onSubmit: (values, { resetForm }) => {
      const cityName = values[SEARCH_FORM.CITY].trim()

      // Проверка на пустое поле через alert
      if (!cityName) {
        alert("Please enter a city name")
        return
      }

      // Отправляем экшен на получение погоды
      dispatch(weatherSliceActions.getWeather(cityName))

      // Очищаем поле после отправки
      resetForm()
    },
  })
  return (
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="weather-search"
          name={SEARCH_FORM.CITY}
          placeholder="Enter a city"
          value={formik.values[SEARCH_FORM.CITY]}
          onChange={formik.handleChange}
          disabled={isLoading}
        />
        <Button
          type="submit"
          isSearch={true}
          disabled={isLoading}
          name={isLoading ? "Searching..." : "Search"}
        />
      </Form>
  )
}

export default SearchForm
