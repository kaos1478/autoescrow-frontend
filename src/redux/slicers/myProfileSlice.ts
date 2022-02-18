import { AppDispatch, AppThunk } from '../store'
import { Contract } from 'ethers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetContractInfo } from '@/types/autoEscrowContractTypes'

export interface IGetEscrowByIDState {
  error: string
  fetching: boolean
  info: IGetContractInfo
}

const initialState: IGetEscrowByIDState = {
  error: '',
  info: {
    currentDisputeAsPayer: 0,
    currentDisputeAsSender: 0,
    currentOpenAsSender: 0,
    currentPaidAsPayer: 0,
    currentPaidAsSender: 0,
    totalCreated: 0,
    totalDisputeAsPayer: 0,
    totalDisputeAsSender: 0,
    totalPaidAsPayer: 0,
    totalPaidAsSender: 0
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
  address: string,
  contract: Contract | null
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    let info: IGetContractInfo = initialState.info
    try {
      dispatch(setFetching(true))
      dispatch(setError(''))
      const {
        currentDisputeAsPayer,
        currentDisputeAsSender,
        currentOpenAsSender,
        currentPaidAsPayer,
        currentPaidAsSender,
        totalCreated,
        totalDisputeAsPayer,
        totalDisputeAsSender,
        totalPaidAsPayer,
        totalPaidAsSender
      } = await contract?.getInfoByAddress(address)
      info = {
        currentDisputeAsPayer: parseInt(currentDisputeAsPayer),
        currentDisputeAsSender: parseInt(currentDisputeAsSender),
        currentOpenAsSender: parseInt(currentOpenAsSender),
        currentPaidAsPayer: parseInt(currentPaidAsPayer),
        currentPaidAsSender: parseInt(currentPaidAsSender),
        totalCreated: parseInt(totalCreated),
        totalDisputeAsPayer: parseInt(totalDisputeAsPayer),
        totalDisputeAsSender: parseInt(totalDisputeAsSender),
        totalPaidAsPayer: parseInt(totalPaidAsPayer),
        totalPaidAsSender: parseInt(totalPaidAsSender)
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
