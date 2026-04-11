import {
  getActiveStyles,
  HeaderComponent,
  HeaderTitle,
  HomeLink,
  PagesContainer,
  WeatherLink,
} from "./styles"
import { ROUTES } from "../../routes/routes"

function Header() {
  return (
    <HeaderComponent>
      <HeaderTitle>Weather App</HeaderTitle>
      <PagesContainer>
        <HomeLink style={getActiveStyles} to={ROUTES.HOME}>Home</HomeLink>
        <WeatherLink style={getActiveStyles} to={ROUTES.WEATHERS}>Weathers</WeatherLink>
      </PagesContainer>
    </HeaderComponent>
  )
}

export default Header
