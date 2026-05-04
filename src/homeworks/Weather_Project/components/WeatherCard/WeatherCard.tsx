import Button from "../Button/Button"
import { WeatherCardProps } from "./types"
import {
  ErrorInfoCard,
  ErrorTitle,
  HomeWrapper,
  ServerError,
  ErrorContainer,
  WeatherInfoCard,
  TemperatureText,
  WeatherMainInfo,
  CityName,
  WeatherIconsContainer,
  WeatherIcon,
  CardActions,
  WeatherContent,
} from "./styles"

function WeatherCard({
  temp,
  cityName,
  icon,
  error,
  onSave,
  onDelete,
}: WeatherCardProps) {
  // Рендерим пустоту, если нет ни данных, ни ошибки
  if (!error && !cityName) return null

  // --- ЛОГИКА ДЛЯ ОШИБКИ ---
  if (error) {
    const statusCode = error.cod || ""
    const apiMessage = error.message || "Something went wrong"
    const headerText = statusCode ? `API ERROR: ${statusCode}` : "API ERROR"
    const formattedBody =
      apiMessage.charAt(0).toUpperCase() + apiMessage.slice(1)

    return (
      <ErrorInfoCard>
        <ErrorContainer>
          <ErrorTitle>{headerText}</ErrorTitle>
          <ServerError>{formattedBody}</ServerError>
        </ErrorContainer>
        <Button name="Delete" onClick={onDelete} isSearch={false} />
      </ErrorInfoCard>
    )
  }

  return (
    <HomeWrapper>
      <WeatherInfoCard>
        <WeatherContent>
          <WeatherMainInfo>
            <TemperatureText>
              {temp !== undefined ? Math.round(Number(temp)) : 0}°
            </TemperatureText>
            <CityName>{cityName}</CityName>
          </WeatherMainInfo>
          <WeatherIconsContainer>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather"
            />
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather"
            />
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather"
            />
          </WeatherIconsContainer>
        </WeatherContent>
        <CardActions>
          {onSave && <Button name="Save" onClick={onSave} isSearch={false} />}
          <Button name="Delete" onClick={onDelete} isSearch={false} />
        </CardActions>
      </WeatherInfoCard>
    </HomeWrapper>
  )
}

export default WeatherCard
