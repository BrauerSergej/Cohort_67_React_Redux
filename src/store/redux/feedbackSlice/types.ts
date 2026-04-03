// * Заранее типизированный state
// * Мы создаём interface так как мы создаём объект
// * Типизировать зачем это нужно чтобы мы не на роком в наш state не закинули каких-то лишних данных или данных не того типа
export interface FeedbackInitialState {
  likeCount: number
  dislikeCount: number
}
