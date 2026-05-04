import { v4 } from "uuid"
import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"
import { WeatherState } from "./types"

const weatherinitialState: WeatherState = {
  currentWeather: null,
  savedWeather: [],
  error: null,
  isLoading: false,
}

// --- СЛАЙС ---
export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherinitialState,
  reducers: create => ({
    // Асинхронный запрос через Axios
    getWeather: create.asyncThunk(
      async (city: string, { rejectWithValue }) => {
        try {
          const API_KEY = "a5175a736cdb818dcdaf93bfe0c58bd0" // Вставляем ключ от OpenWeather
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
          )
          return response.data
        } catch (e: any) {
          // Если ошибка, возвращаем объект с UUID v4
          // Если сервер ответил ошибкой (например, 404), прокидываем её в rejected
          return rejectWithValue({
            message: e.response?.data?.message || "Network Error",
            cod: e.response?.data?.cod || e.response?.status || null,
          })
        }
      },
      {
        pending: state => {
          state.isLoading = true
          state.error = null // Очищаем прошлую ошибку перед новым поиском
        },

        fulfilled: (state, action) => {
          state.isLoading = false
          // Формируем объект данных с уникальным ID (v4)
          state.currentWeather = {
            id: v4(),
            cityName: action.payload.name,
            temp: action.payload.main.temp,
            icon: action.payload.weather[0].icon,
          }
        },

        rejected: (state, action: any) => {
          state.isLoading = false
          // Сохраняем ошибку как объект с ID (v4)
          state.error = {
            id: v4(),
            message: action.payload?.message || "Unknown error",
            cod: action.payload?.cod || null,
          }
          state.currentWeather = null // Убираем старую погоду, если поиск провалился
        },
      },
    ),

    // Сохранение (перенос из Home в Weather)
    saveWeather: create.reducer(state => {
      if (state.currentWeather) {
        state.savedWeather.push(state.currentWeather)
        state.currentWeather = null // Карточка исчезнет с Home
      }
    }),

    // saveWeather: create.reducer(state => {
    //   if (state.currentWeather) {
    //     // 1. Ищем, есть ли уже в массиве город с таким же именем
    //     const isAlreadySaved = state.savedWeather.some(
    //       city =>
    //         city.cityName.toLowerCase() ===
    //         state.currentWeather!.cityName.toLowerCase(),
    //     )

    //     // 2. Если такого города еще нет — сохраняем
    //     if (!isAlreadySaved) {
    //       state.savedWeather.push(state.currentWeather)
    //       state.currentWeather = null
    //     } else {
    //       // 3. Если есть — можно просто ничего не делать или вывести алерт
    //       alert("This city is already in your saved list!")
    //     }
    //   }
    // }),

    // Удаление карточки (по ID)
    deleteWeather: create.reducer((state, action: PayloadAction<string>) => {
      // 1. Если ID совпадает с тем, что на главной — удаляем
      if (state.currentWeather?.id === action.payload) {
        state.currentWeather = null
      }
      // 2. Если это была карточка ошибки (у неё тоже есть ID) — удаляем
      if (state.error?.id === action.payload) {
        state.error = null
      }
      // 3. Удаляем из списка сохраненных на другой странице
      state.savedWeather = state.savedWeather.filter(
        item => item.id !== action.payload,
      )
    }),

    // clearCurrentWeather: create.reducer(state => {
    //   state.currentWeather = null
    //   state.error = null
    // }),

    // Очистка ошибки (для кнопки Delete на плитке с ошибкой)
    clearError: create.reducer(state => {
      state.error = null
    }),

    clearCards: create.reducer(state => {
      state.savedWeather = []
    }),
  }),

  // Селекторы, чтобы Home.tsx видел данные
  selectors: {
    currentWeather: state => state.currentWeather, // Для Home (результат поиска)
    savedWeather: state => state.savedWeather, // Для Weather (список избранного)
    error: state => state.error, // Для отображения ошибок
    isLoading: state => state.isLoading, // Для показа спиннера
  },
})

// --- ЭКСПОРТЫ ---
export const weatherSliceActions = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
