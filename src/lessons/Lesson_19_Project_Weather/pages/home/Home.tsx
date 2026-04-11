import { HomeWrapper } from "./styles"
import Spinner from "lessons/Lesson_19_Project_Weather/components/Spinner/Spinner"
import SearchForm from "../../components/searchForm/SearchForm"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "../../redux/weatherSlice/weatherSlice"
import WeatherCard from "../../components/WeatherCard/WeatherCard"

function Home() {
  const dispatch = useAppDispatch()

  // Достаем данные из стора
  const currentWeather = useAppSelector(weatherSliceSelectors.currentWeather)
  const error = useAppSelector(weatherSliceSelectors.error)
  const isLoading = useAppSelector(weatherSliceSelectors.isLoading)

  // --- ЛОГИКА ДЛЯ КНОПОК ---

  // 1. Сохранение погоды в список (кнопка Save)
  const handleSave = () => {
    dispatch(weatherSliceActions.saveWeather())
    alert("The weather data has been successfully saved")
  }

  // 2. Удаление текущего результата поиска (кнопка Delete в карточке погоды)
  const handleClear = () => {
    if (error) {
      dispatch(weatherSliceActions.clearError()) // Чистим ошибку
      alert("The error data has been successfully deleted")
    } else if (currentWeather) {
      dispatch(weatherSliceActions.deleteWeather(currentWeather.id)) // Удаляем погоду
    }
  }
  return (
    <HomeWrapper>
      <SearchForm />
      {isLoading && <Spinner />}
      {/* Если есть данные или ошибка — рисуем нашу универсальную карточку */}
      {!isLoading && (currentWeather || error) && (
        <WeatherCard
          // Распаковываем данные из объекта currentWeather
          {...currentWeather}
          error={error}
          onSave={currentWeather ? handleSave : undefined}
          onDelete={handleClear}
        />
      )}
    </HomeWrapper>
  )
}

export default Home
