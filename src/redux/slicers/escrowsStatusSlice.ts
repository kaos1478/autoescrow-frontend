import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type escrowsStatus = {
  text: string
  value: string
}

const initialState: escrowsStatus[] = [
  {
    text: '',
    value: ''
  }
]

export const escrowsStatusSlice = createSlice({
  initialState,
  name: 'escrowsStatus',
  reducers: {
    setEscrowsStatus: (state, action: PayloadAction<escrowsStatus[]>) => {
      console.log('action.payload: ', action.payload)
      state = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEscrowsStatus } = escrowsStatusSlice.actions

export default escrowsStatusSlice.reducer
