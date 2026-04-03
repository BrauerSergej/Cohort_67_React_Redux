import Button from "components/Button/Button"
// * Импортируем из файла хук useAppDispatch, useAppSelector - они нам нужы для того чтобы нам иметь возможность работать с redux хранилищем
import { useAppDispatch, useAppSelector } from "store/hooks"
import "./styles.css"
// * Из feedbackSlice импортируем эти две константы
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedbackSlice/feedbackSlice"

import {} from "./styles.css"

function Feedback() {
  // * Создаём функцию dispatch - эта функция которая доставляет нам из компонента в redux хранилище для чего? redux хранилище когда получает какой-то action т.е событие оно вызывает соответсвующий reducers который выплоняет некоторе действие - ведь способ изменения redux хранилища существует только один это функция reducer
  const dispatch = useAppDispatch()
  // * используем useAppSelector - чтобы собрать данные для нашего store в первый кладём likeCount
  // * В итоге два этих hook создают нам две переменные. Это лайки и дизлайки.
  const likeCount = useAppSelector(feedbackSliceSelectors.likeCount)
  // * В итоге два этих hook создают нам две переменные. Это лайки и дизлайки.
  // * используем useAppSelector - чтобы собрать данные для нашего store в первый кладём dislikeCount
  const dislikeCount = useAppSelector(feedbackSliceSelectors.dislikeCount)

  const like = () => {
    // const action = feedbackSliceActions.like()
    // dispatch(action)
    console.log(feedbackSliceActions.like());
    // * метод like() - это actionCrator, который создает action
    dispatch(feedbackSliceActions.like())
  }

  const disLike = () => {
    // const action = feedbackSliceActions.disLike()
    // dispatch(action)
    dispatch(feedbackSliceActions.disLike())
  }

  const resetResults = () => {
    // const action = feedbackSliceActions.disLike()
    // dispatch(action)
    dispatch(feedbackSliceActions.resetResults())
  }
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          {/* Другой способ без вынесения функции сверху */}
          {/* <Button
            name="Like"
            onClick={() => dispatch(feedbackSliceActions.like())}
          /> */}
          <Button name="Like" onClick={like} />
          {/* Затем ипользуем likeCount у себя в компоненте */}
          <p className="count">{likeCount}</p> 
        </div>
        <div className="buttonwithcount-container">
          {/* Другой способ без вынесения функции сверху */}
          {/* <Button
            name="Like"
            onClick={() => dispatch(feedbackSliceActions.disLike())}
          /> */}
          <Button name="Dislike" onClick={disLike} />
          <p className="count">{dislikeCount}</p>
        </div>
      </div>
      {/* Другой способ без вынесения функции сверху */}
      {/* <Button
        name="Reset Results"
        onClick={() => dispatch(feedbackSliceActions.resetResults())}
      /> */}
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  )
}

export default Feedback
