import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface INewEscrowModal {
  amount: number | string
  isOpen: boolean
}

export interface ModalsState {
  newEscrow: INewEscrowModal
}

const initialState: ModalsState = {
  newEscrow: {
    amount: '',
    isOpen: false
  }
}

type TSetOpen = {
  modal: 'newEscrow'
  state: INewEscrowModal
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<TSetOpen>) => {
      state[action.payload.modal] = action.payload.state
    }
  }
})

// Action creators are generated for each case reducer function
export const { setOpen } = modalsSlice.actions

export default modalsSlice.reducer
