import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'
import { IGetContractInfo } from '@/types/autoEscrowContractTypes'

export interface IGetEscrowByIDState {
  error: string
  info: IGetContractInfo
  fetching: boolean
}

const initialState: IGetEscrowByIDState = {
  error: '',
  info: {
    currentDisputeAsSender: 0,
    currentOpenAsSender: 0,
    currentPaidAsSender: 0,
    totalCreated: 0,
    totalDisputeAsSender: 0,
    totalPaidAsSender: 0,
    currentDisputeAsPayer: 0,
    currentPaidAsPayer: 0,
    totalDisputeAsPayer: 0,
    totalPaidAsPayer: 0
  },
  fetching: false
}

export const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    setMyProfile: (state, action: PayloadAction<IGetContractInfo>) => {
      state.info = action.payload
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMyProfile, setFetching, setError } = myProfileSlice.actions

export const asyncGetProfile = (
  contract: Contract | null,
  address: string
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    let info: IGetContractInfo = initialState.info
    try {
      dispatch(setFetching(true))
      dispatch(setError(''))
      const {
        currentDisputeAsSender,
        currentOpenAsSender,
        currentPaidAsSender,
        totalCreated,
        totalDisputeAsSender,
        totalPaidAsSender,
        currentDisputeAsPayer,
        currentPaidAsPayer,
        totalDisputeAsPayer,
        totalPaidAsPayer
      } = await contract?.getInfoByAddress(address)
      info = {
        currentDisputeAsSender: parseInt(currentDisputeAsSender),
        currentOpenAsSender: parseInt(currentOpenAsSender),
        currentPaidAsSender: parseInt(currentPaidAsSender),
        totalCreated: parseInt(totalCreated),
        totalDisputeAsSender: parseInt(totalDisputeAsSender),
        totalPaidAsSender: parseInt(totalPaidAsSender),
        currentDisputeAsPayer: parseInt(currentDisputeAsPayer),
        currentPaidAsPayer: parseInt(currentPaidAsPayer),
        totalDisputeAsPayer: parseInt(totalDisputeAsPayer),
        totalPaidAsPayer: parseInt(totalPaidAsPayer)
      }
      dispatch(setFetching(false))
      dispatch(setMyProfile(info))
    } catch (e: any) {
      dispatch(setFetching(false))
      dispatch(setError(e.data?.message || e.message))
    }
  }
}

export default myProfileSlice.reducer
