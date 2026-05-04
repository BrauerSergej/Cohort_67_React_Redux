import styled from "@emotion/styled"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SearchFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`
export const WeatherInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 709px;
  min-height: 220px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  border-radius: 16px;
  backdrop-filter: blur(2px);
`

export const WeatherMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 27px 0 0 36px;
`

export const TemperatureText = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 57px;
  line-height: 100%;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
`

export const CityName = styled.p`
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
`
export const WeatherIconsContainer = styled.div`
  width: 290px;
  height: 74px;
  opacity: 1;
  padding: 28px 130px 0 0;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeatherIcon = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
`

export const WeatherContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  align-items: flex-end;
  padding: 28px;
`

export const ErrorTitle = styled.div`
  line-height: 1.5;
  color: rgba(243, 94, 94, 1);
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 57px;
  line-height: 100%;
  text-align: center;
`

export const ErrorInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  width: 709px;
  min-height: 220px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.52) 5.78%,
    rgba(11, 27, 52, 0.46) 96.58%
  );
  border-radius: 16px;
  backdrop-filter: blur(8px);
  padding: 20px 8px;
`
export const ServerError = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`
