// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable no-restricted-imports */
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// * Функция useAppDispatch нужна для того чтобы создовать функцию dispatch - функция которая доставляем action
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// * Функция useAppSelector - это функция которая позволяеет нам забрать данные со store
export const useAppSelector = useSelector.withTypes<RootState>()
