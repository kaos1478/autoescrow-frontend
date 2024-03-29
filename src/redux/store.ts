import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  contractInfoReducer,
  counterReducer,
  escrowsStatusReducer,
  findByIDReducer,
  lastEscrowsReducer,
  modalsReducer,
  myEscrowsReducer,
  myProfileReducer,
  networksReducer
} from '@/redux/slicers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    contractInfo: contractInfoReducer,
    counter: counterReducer,
    escrowsStatus: escrowsStatusReducer,
    findByID: findByIDReducer,
    lastEscrows: lastEscrowsReducer,
    modals: modalsReducer,
    myEscrows: myEscrowsReducer,
    myProfile: myProfileReducer,
    networks: networksReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
