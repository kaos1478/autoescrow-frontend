import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'

export interface IContractInfoState {
  owner: string
  taxPercentage: number
  openDeadline: number
  paidDeadline: number
  counter: number
  openEscrowsLenght: number
  paidEscrowsLenght: number
  disputeEscrowsLenght: number
  active: boolean
  fetching: boolean
}

type TSetContractInfo = Omit<IContractInfoState, 'fetching'>

const initialState: IContractInfoState = {
  owner: '',
  taxPercentage: 0,
  openDeadline: 0,
  paidDeadline: 0,
  counter: 0,
  openEscrowsLenght: 0,
  paidEscrowsLenght: 0,
  disputeEscrowsLenght: 0,
  active: false,
  fetching: false
}

export const contractInfoSlice = createSlice({
  name: 'contractInfo',
  initialState,
  reducers: {
    setContractInfo: (state, action: PayloadAction<TSetContractInfo>) => {
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
      const parsedContractInfo: TSetContractInfo = {
        owner: resp.owner,
        taxPercentage: parseInt(resp.taxPercentage),
        openDeadline: parseInt(resp.openDeadline) / 86400,
        paidDeadline: parseInt(resp.paidDeadline) / 86400,
        counter: parseInt(resp.counter),
        openEscrowsLenght: parseInt(resp.openEscrowsLenght),
        paidEscrowsLenght: parseInt(resp.paidEscrowsLenght),
        disputeEscrowsLenght: parseInt(resp.disputeEscrowsLenght),
        active: resp.active
      }
      dispatch(setContractInfo(parsedContractInfo))
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default contractInfoSlice.reducer
