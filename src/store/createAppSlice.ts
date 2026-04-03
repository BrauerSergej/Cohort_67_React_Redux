// * createSlice - это та функция которая создает slice, а buildCreateSlice практически тоже самое что createSlice - но позволяет нам добавлять дополнительные кофигурации которые уже могут давать возможность делать асинхронность
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"

// `buildCreateSlice` allows us to create a slice with async thunks.
// * Почему функция buildCreateSlice вынесена в отдельный файл - потому-что здесь разработчикам сделан такая кофигурация настройка, чтобы мы имели возможность в случае чего делать какие то асинхоронные действия внутри redax - весь redax по себе он является синхронной библиотекой и именно эта возможность asyncThunk позволяет нам делать какие то асинхронные действия внутри redax */
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})
