import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false
}

export const counterSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setOpen } = counterSlice.actions

export default counterSlice.reducer
