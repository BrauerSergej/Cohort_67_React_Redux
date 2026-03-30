// Как подключиться к redux импортируем import {useAppDispatch, useAppSelector} from "store/hooks"
// Через функцию useAppDispatch - создать функцию - dispatch - это наш курьер который предоставляет нам action
// useAppSelector - это хук который позволит нам подписаться на наше redux хранилище
import { useAppDispatch, useAppSelector } from "store/hooks"
// Далее мы должны импортировать counterSliceActions и counterSliceSelectors из counterSlice в Counter
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"
import "./styles.css"
import Button from "components/Button/Button"

function Counter() {
  // Создаём функцию dispatch - это наш курьер
  // Функция хук useDispatch создаёт нам функцию dispatch которая dispatch(ит) action т.е оправляеет его в наш store
  const dispatch = useAppDispatch()

  // useAppSelector - забирает данные из нашего store - каким образом мы импортировали counterSliceSelectors
  // в итоге в этом count будет содержаться - то самое число
  const count = useAppSelector(counterSliceSelectors.count)

  // Создаём функции
  // Нам нужно за диспатчить action
  const onPlus = () => {
    // dispatch - принимает в качестве аргумента action а что у нас возвращает action - мы импрортировали из нашего counterSlice - counterSliceActions
    // создаём action - тоесть action creator
    // почему plus - потомучто когда у нас создаються reducer на него сразу же создаются и action с таким же именем - как и reducer
    const action = counterSliceActions.plus()
    dispatch(action)
    // Можно передать и так
    // dispatch(counterSliceActions.plus())
  }

  const onMinus = () => {
    const action = counterSliceActions.minus()
    dispatch(action)
    // Можно передать и так 
    // dispatch(counterSliceActions.minus())
  }
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  )
}

export default Counter
