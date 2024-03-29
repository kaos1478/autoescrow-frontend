import { AppDispatch, AppThunk } from '../store'
import { Contract } from 'ethers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hexDateToNumber } from '@/utils/contract'
import { IGetEscrowById } from '@/types/autoEscrowContractTypes'
import {
  IDisputeEscrow,
  IOpenEscrow,
  IPaidEscrow
} from '@/types/autoEscrowEscrowsTypes'

export interface IGetEscrowByIDState {
  error: string
  escrows: IGetEscrowById
  fetching: boolean
}

const initialState: IGetEscrowByIDState = {
  error: '',
  escrows: {
    opens: [],
    paids: [],
    disputes: []
  },
  fetching: false
}

export const findBydIDSlice = createSlice({
  initialState,
  name: 'myEscrows',
  reducers: {
    setFindByID: (state, action: PayloadAction<IGetEscrowById>) => {
      state.escrows = action.payload
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
export const { setFindByID, setFetching, setError } = findBydIDSlice.actions

export const asyncGetEscrowByID = (
  contract: Contract | null,
  id: string
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const opens: IOpenEscrow[] = []
    const paids: IPaidEscrow[] = []
    const disputes: IDisputeEscrow[] = []
    try {
      dispatch(setFetching(true))
      dispatch(setError(''))
      const resp = await contract?.getEscrowById(id)
      dispatch(setFetching(false))
      resp?.opens?.forEach((openAsSender: any) => {
        opens.push({
          id: parseInt(openAsSender.id),
          sender: openAsSender.sender,
          timeStamp: hexDateToNumber(openAsSender.timeStamp),
          weiAmount: parseInt(openAsSender.weiAmount)
        })
      })
      resp?.paids?.forEach((paidAsPayer: any) => {
        paids.push({
          id: parseInt(paidAsPayer.id),
          payer: paidAsPayer.payer,
          sender: paidAsPayer.sender,
          timeStamp: hexDateToNumber(paidAsPayer.timeStamp),
          weiAmount: parseInt(paidAsPayer.weiAmount)
        })
      })
      resp?.disputes?.forEach((disputeAsPayer: any) => {
        disputes.push({
          id: parseInt(disputeAsPayer.id),
          openDisputeBy: disputeAsPayer.openDisputeBy,
          payer: disputeAsPayer.payer,
          sender: disputeAsPayer.sender,
          timeStamp: hexDateToNumber(disputeAsPayer.timeStamp),
          weiAmount: parseInt(disputeAsPayer.weiAmount)
        })
      })
      dispatch(
        setFindByID({
          opens: opens,
          paids: paids,
          disputes: disputes
        })
      )
    } catch (e: any) {
      dispatch(setFetching(false))
      dispatch(setError(e.data?.message || e.message))
    }
  }
}

export default findBydIDSlice.reducer
