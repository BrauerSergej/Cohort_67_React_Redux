import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { CardWrapper, ButtonControl, CardContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "../../redux/weatherSlice/weatherSlice"
import Button from "../../components/Button/Button"

function Weather() {
  const dispatch = useAppDispatch()
  const savedWeather = useAppSelector(weatherSliceSelectors.savedWeather)

  const deleteCard = (id: string) => {
    dispatch(weatherSliceActions.deleteWeather(id))
    alert("The weather card has been successfully deleted")
  }

  const removeAllCards = () => {
    dispatch(weatherSliceActions.clearCards())
    alert("The weather data has been successfully deleted")
  }
  return (
    <CardContainer>
      <CardWrapper>
        {savedWeather.map(card => (
          <WeatherCard
            key={card.id}
            {...card}
            onDelete={() => deleteCard(card.id)}
          />
        ))}
      </CardWrapper>
      {savedWeather.length > 0 && (
        <ButtonControl>
          <Button onClick={removeAllCards} name="Delete all cards" />
        </ButtonControl>
      )}
    </CardContainer>
  )
}

export default Weather
