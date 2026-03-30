import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import "./styles.css"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedbackSlice/feedbackSlice"

import {} from "./styles.css"

function Feedback() {
  const dispatch = useAppDispatch()

  const likeCount = useAppSelector(feedbackSliceSelectors.likeCount)

  const dislikeCount = useAppSelector(feedbackSliceSelectors.dislikeCount)

  const like = () => {
    // const action = feedbackSliceActions.like()
    // dispatch(action)
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
