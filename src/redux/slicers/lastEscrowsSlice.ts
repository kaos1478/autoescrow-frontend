import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'

export interface ILastEscrows {
  id: number
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IContractInfoState {
  escrows: ILastEscrows[]
  fetching: boolean
}

const initialState: IContractInfoState = {
  escrows: [],
  fetching: false
}

export const lastEscrowsSlice = createSlice({
  name: 'lastEscrows',
  initialState,
  reducers: {
    setLastEscrows: (state, action: PayloadAction<ILastEscrows[]>) => {
      state.escrows = action.payload
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLastEscrows, setFetching } = lastEscrowsSlice.actions

export const asyncGetLastEscrows = (contract: Contract | null): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const parsedLastEscrows: ILastEscrows[] = []
    try {
      dispatch(setFetching(true))
      const resp = await contract?.getLastEscrows(10)
      dispatch(setFetching(false))
      resp?.forEach((escrow: any) => {
        parsedLastEscrows.push({
          id: parseInt(escrow.id),
          sender: escrow.sender,
          timeStamp: parseInt(escrow.timeStamp) * 1000,
          weiAmount: parseInt(escrow.weiAmount)
        })
      })
      dispatch(setLastEscrows(parsedLastEscrows))
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default lastEscrowsSlice.reducer
