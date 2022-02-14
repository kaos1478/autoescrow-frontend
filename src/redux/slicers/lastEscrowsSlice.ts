import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'
import { TGetLastEscrows } from '@/types/autoEscrowContractTypes'
import { hexDateToNumber } from '@/utils/contract'

export interface ILastEscrowsState {
  escrows: TGetLastEscrows
  fetching: boolean
}

const initialState: ILastEscrowsState = {
  escrows: [],
  fetching: false
}

export const lastEscrowsSlice = createSlice({
  name: 'lastEscrows',
  initialState,
  reducers: {
    setLastEscrows: (state, action: PayloadAction<TGetLastEscrows>) => {
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
    console.log('called')
    const parsedLastEscrows: TGetLastEscrows = []
    try {
      dispatch(setFetching(true))
      const resp = await contract?.getLastEscrows(10)
      resp?.forEach((escrow: any) => {
        parsedLastEscrows.push({
          id: parseInt(escrow.id),
          sender: escrow.sender,
          timeStamp: hexDateToNumber(escrow.timeStamp),
          weiAmount: parseInt(escrow.weiAmount)
        })
      })
      dispatch(setLastEscrows(parsedLastEscrows))
      dispatch(setFetching(false))
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default lastEscrowsSlice.reducer
