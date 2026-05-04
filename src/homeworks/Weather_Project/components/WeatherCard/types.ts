import { WeatherError } from "../../redux/weatherSlice/types"

export interface WeatherCardProps {
  temp?: number
  cityName?: string
  icon?: string // Код иконки от API (например, "04d")
  description?: string // Описание (например, "cloudy")
  onSave?: () => void 
  onDelete: () => void 
  // Флаг для отображения ошибки (если город не найден)
  error?: WeatherError | null;
}