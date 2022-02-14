import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'
import { IGetEscrowById } from '@/types/autoEscrowContractTypes'
import {
  IOpenEscrow,
  IPaidEscrow,
  IDisputeEscrow
} from '@/types/autoEscrowEscrowsTypes'
import { hexDateToNumber } from '@/utils/contract'

export interface IGetEscrowByIDState {
  escrows: IGetEscrowById
  fetching: boolean
}

const initialState: IGetEscrowByIDState = {
  escrows: {
    opens: [],
    paids: [],
    disputes: []
  },
  fetching: false
}

export const findBydIDSlice = createSlice({
  name: 'myEscrows',
  initialState,
  reducers: {
    setFindByID: (state, action: PayloadAction<IGetEscrowById>) => {
      state.escrows = action.payload
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFindByID, setFetching } = findBydIDSlice.actions

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
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default findBydIDSlice.reducer
