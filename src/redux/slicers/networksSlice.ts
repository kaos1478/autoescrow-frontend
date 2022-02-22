import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type network = {
  text: string
  value: string
}

interface networks {
  selected: string
  networks: network[]
}

const initialState: networks = {
  selected: 'polygon',
  networks: [
    {
      text: 'Poly Test',
      value: 'polygon'
    } /*,
    {
      text: 'Binance',
      value: 'binance'
    },
    {
      text: 'Ethereum',
      value: 'ethereum'
    } */
  ]
}

export const networksSlice = createSlice({
  initialState,
  name: 'networks',
  reducers: {
    setSelectedNetwork: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedNetwork } = networksSlice.actions

export default networksSlice.reducer
