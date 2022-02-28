import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type network = {
  text: string
  value: string
  active: boolean
  contractAddress: string
  coin: string
}

interface networks {
  selected: string
  networks: network[]
}

const initialState: networks = {
  selected: '56',
  networks: [
    {
      active: true,
      coin: 'MATIC',
      contractAddress: '0x90BB80C815ccFE970539CEa4E066a35b57105663',
      text: 'Polygon',
      value: '137'
    },
    {
      active: true,
      coin: 'BNB',
      contractAddress: '0x867c87E76Ca0D7C70B6664A0e5182571A8d1015a',
      text: 'Binance',
      value: '56'
    },
    {
      active: false,
      coin: 'ETH',
      contractAddress: '',
      text: 'Ethereum',
      value: '1'
    },
    {
      active: false,
      coin: 'MATIC',
      contractAddress: '0xd764Eb6c4FE505C15859bDE9bEaDCdA4f433d04e',
      text: 'Poly Test',
      value: '80001'
    }
  ]
}

export const networksSlice = createSlice({
  initialState,
  name: 'networks',
  reducers: {
    setSelectedNetwork: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
      localStorage.setItem('network', action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedNetwork } = networksSlice.actions

export default networksSlice.reducer
