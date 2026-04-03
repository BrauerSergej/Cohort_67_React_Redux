// * createAppSlice - создаёт кусочек из нашего Redux хранилище
import { createAppSlice } from "store/createAppSlice"
import { FeedbackInitialState } from "./types"

// * Объект - в котором мы храним значения лайки дизлайки - изначально счётчики равны 0
// * Заранее типизирован
// * Типизировать зачем это нужно чтобы мы не на роком в наш state не закинули каких-то лишних данных или данных не того типа
const feedbackInitialState: FeedbackInitialState = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  // * Придумываем имя в uppercase
  name: "FEEDBACK",
  // *  Это хранилище по умолчанию - и тут мы передаём initialState - что это такое - заранее перед созданием нашего feedbackSlice создаём константу под названием feedbackInitialState
  initialState: feedbackInitialState,
  // * Это объект который хранит пары ключ значение ключом выступает название функции reducer(like, dislike, resetResults) - а значением выступает сама функция reducer
  // * Эти функции - которые нужны для того чтобы каким-то образом обновлять наш state в ответ на action
  reducers: {
    // * like - это callback функция - в качестве аргумента из библиотеки она принимает state т.е актуальный state
    like: (state: FeedbackInitialState) => {
      // * Если было 100 =  + 1
      state.likeCount = state.likeCount + 1
    },

    disLike: (state: FeedbackInitialState) => {
      state.dislikeCount = state.dislikeCount + 1
    },

    // resetResults: (state: FeedbackInitialState) => {
    //   state.likeCount = 0
    //   state.dislikeCount = 0
    // },

    // * Это решение лучше, потому что оно возвращает весь state к начальному состоянию сразу.Если бы полей было много, нам не пришлось бы вручную обнулять каждое свойство по отдельности.
    // ! верхний вариант = ручной сброс каждого поля
    // ! короткий вариант = полный сброс всего slice
    resetResults: () => feedbackInitialState,
  },
  // * selectors - это функции, которые берут нужные данные из state slice
  // * selectors - это объекты, состоят из ключа и значения
  selectors: {
    // * Функция которая возвращает like
    // * likeCount - доступ к нашему хранилищу 
    likeCount: (state: FeedbackInitialState) => {
      return state.likeCount // достать лайки
    },
    // * Функция которая возвращает dislike
    dislikeCount: (state: FeedbackInitialState) => {
      return state.dislikeCount // достать дизлайки
    },
  },
})
// * feedbackSliceActions - это переменная которая будет хранить в себе все actions они у нас формируются автоматически
// * каким образом мы это делаем - из нашего feedbackSlice через точку получаем доступ к нашим actions
export const feedbackSliceActions = feedbackSlice.actions
// * И из нашего feedbackSlice через точку получаем доступ к нашим selectors они у нас формируются автоматически
// * а feedbackSliceSelectors - хранит в себе объект из всех selecotors например likeCount и dislikeCount
export const feedbackSliceSelectors = feedbackSlice.selectors
