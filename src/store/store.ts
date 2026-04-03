import type { Action, ThunkAction } from "@reduxjs/toolkit"
// Импортировли из нашей библиотеки @reduxjs/toolkit - функцию configureStore - потомучто именно она создаёт глобальное Redux хранилище
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

// * Импортируем заранее созданный counterSlice - кусочки
import {counterSlice} from "store/redux/counterSlice/counterSlice";
import {feedbackSlice} from "store/redux/feedbackSlice/feedbackSlice"
import { employeeSlice } from "./redux/employeeSlice/employeesSlice";
// import {profileSlice}

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
// Функция combineSlices - идет из библитеки redax - это функция у нас собирает все кусочки и кладёт их в общее redax хранилище - куда класть в качестве аргументов
const rootReducer = combineSlices(counterSlice, feedbackSlice, employeeSlice)
// Infer the `RootState` type from the root reducer
// Чтобы нам получить тип нашего общего глобального хранилищя - создаётся такой type - возвращаемый тип из нашего rootReducer - в итоге появляется типизация нашего state
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
// По сути всё делает вот этот код - что такое prelodedState - это хранилище по умолчанию - оно у нас пустой объект
export const makeStore = (preloadedState?: Partial<RootState>) => {
  // Здесь мы создаём хранилище - store и мы как раз тут используем функцию configureStore из библиотеки @reduxjs/toolkit
  // Функция configureStore - создаёт reduxstore
  const store = configureStore({
    reducer: rootReducer,
    // Пустой объект
    preloadedState,
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
