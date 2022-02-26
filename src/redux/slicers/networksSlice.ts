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
  selected: '80001',
  networks: [
    {
      active: true,
      coin: 'MATIC',
      contractAddress: '0x3bFc8C16E968F45067ECB77FC3cad18151e6A2ab',
      text: 'Poly Test',
      value: '80001'
    },
    {
      active: true,
      coin: 'MATIC',
      contractAddress: '0xE2Eb5EC66d926A329FEfaF3BB298f8FbD1f45788',
      text: 'Polygon',
      value: '137'
    },
    {
      active: true,
      coin: 'BNB',
      contractAddress: '0x72FDA63d84C593F5010BDf563a21E86c6174eaa4',
      text: 'Binance',
      value: '56'
    },
    {
      active: false,
      coin: 'ETH',
      contractAddress: '',
      text: 'Ethereum',
      value: '1'
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
