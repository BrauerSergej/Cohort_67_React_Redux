// --- ИНТЕРФЕЙСЫ (потом вынесешь в types.ts) ---
export interface WeatherData {
  id: string
  cityName?: string
  temp?: number
  icon?: string
  // description: string;
}

export interface WeatherError {
  id: string
  message: string
  // Добавляем поле cod (оно может быть числом или строкой)
  cod?: string | number | null
}

export interface WeatherState {
  currentWeather: WeatherData | null
  savedWeather: WeatherData[]
  error: WeatherError | null
  isLoading: boolean
}
