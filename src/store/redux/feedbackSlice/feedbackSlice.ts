// createAppSlice - создаёт кусочек из нашего Redux хранилище
import { createAppSlice } from "store/createAppSlice"

// Объект
const feedbackInitialState = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: {
    like: state => {
      state.likeCount = state.likeCount + 1
    },

    disLike: state => {
      state.dislikeCount = state.dislikeCount + 1
    },

    resetResults: state => {
      state.likeCount = 0
      state.dislikeCount = 0
    },
  },

  selectors: {
    likeCount: state => state.likeCount,
    dislikeCount: state => state.dislikeCount,
  },
})

// feedbackSlice в итоге создаёт нам объект - мы можем взять функцию
export const feedbackSliceActions = feedbackSlice.actions

// Далее забираем эти селекторы
export const feedbackSliceSelectors = feedbackSlice.selectors
