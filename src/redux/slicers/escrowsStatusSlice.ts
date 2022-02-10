import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type escrowsStatus = {
  value: string
  text: string
}

const initialState: escrowsStatus[] = [
  {
    value: '',
    text: ''
  }
]

export const escrowsStatusSlice = createSlice({
  name: 'escrowsStatus',
  initialState,
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
