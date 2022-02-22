import { AppDispatch, AppThunk } from '../store'
import { Contract } from 'ethers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hexToDay } from '@/utils/contract'
import { IGetContratInfo } from '@/types/autoEscrowContractTypes'

export interface IContractInfoState extends IGetContratInfo {
  fetching: boolean
}

const initialState: IContractInfoState = {
  active: false,
  counter: 0,
  disputeEscrowsLenght: 0,
  fetching: false,
  minValueWei: 0,
  openDeadline: 0,
  openEscrowsLenght: 0,
  owner: '',
  paidDeadline: 0,
  paidEscrowsLenght: 0,
  taxPercentage: 0
}

export const contractInfoSlice = createSlice({
  initialState,
  name: 'contractInfo',
  reducers: {
    setContractInfo: (state, action: PayloadAction<IGetContratInfo>) => {
      state.owner = action.payload.owner
      state.taxPercentage = action.payload.taxPercentage
      state.openDeadline = action.payload.openDeadline
      state.paidDeadline = action.payload.paidDeadline
      state.counter = action.payload.counter
      state.openEscrowsLenght = action.payload.openEscrowsLenght
      state.paidEscrowsLenght = action.payload.paidEscrowsLenght
      state.disputeEscrowsLenght = action.payload.disputeEscrowsLenght
      state.active = action.payload.active
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setContractInfo, setFetching } = contractInfoSlice.actions

export const asyncGetContractInfo = (contract: Contract | null): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setFetching(true))
      const { ...resp } = await contract?.getContractInfo()
      dispatch(setFetching(false))
      const parsedContractInfo: IGetContratInfo = {
        active: resp.active,
        counter: parseInt(resp.counter),
        disputeEscrowsLenght: parseInt(resp.disputeEscrowsLenght),
        minValueWei: parseInt(resp.minValueWei),
        openDeadline: hexToDay(resp.openDeadline),
        openEscrowsLenght: parseInt(resp.openEscrowsLenght),
        owner: resp.owner,
        paidDeadline: hexToDay(resp.paidDeadline),
        paidEscrowsLenght: parseInt(resp.paidEscrowsLenght),
        taxPercentage: parseInt(resp.taxPercentage)
      }
      dispatch(setContractInfo(parsedContractInfo))
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default contractInfoSlice.reducer
