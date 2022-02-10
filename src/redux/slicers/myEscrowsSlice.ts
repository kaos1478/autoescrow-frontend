import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contract } from 'ethers'
import { AppDispatch, AppThunk } from '../store'
import { IGetEscrowsBySender } from '@/types/autoEscrowContractTypes'
import {
  IOpensAsSender,
  IDisputesAsPayer,
  IDisputesAsSender,
  IPaidsAsPayer,
  IPaidsAsSender
} from '@/types/autoEscrowEscrowsTypes'
import { hexDateToNumber } from '@/utils/contract'
import { setEscrowsStatus } from './escrowsStatusSlice'

export interface IMyEscrowsState {
  escrows: IGetEscrowsBySender
  fetching: boolean
}

const initialState: IMyEscrowsState = {
  escrows: {
    opensAsSender: [],
    paidsAsPayer: [],
    paidsAsSender: [],
    disputesAsPayer: [],
    disputesAsSender: []
  },
  fetching: false
}

export const myEscrowsSlice = createSlice({
  name: 'myEscrows',
  initialState,
  reducers: {
    setMyEscrows: (state, action: PayloadAction<IGetEscrowsBySender>) => {
      state.escrows = action.payload
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMyEscrows, setFetching } = myEscrowsSlice.actions

export const asyncGetMyEscrows = (contract: Contract | null): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const opensAsSender: IOpensAsSender[] = []
    const paidsAsPayer: IPaidsAsPayer[] = []
    const paidsAsSender: IPaidsAsSender[] = []
    const disputesAsPayer: IDisputesAsPayer[] = []
    const disputesAsSender: IDisputesAsSender[] = []
    try {
      dispatch(setFetching(true))
      const resp = await contract?.getEscrowsBySender()
      dispatch(setFetching(false))
      resp?.opensAsSender?.forEach((openAsSender: any) => {
        opensAsSender.push({
          id: parseInt(openAsSender.id),
          sender: openAsSender.sender,
          timeStamp: hexDateToNumber(openAsSender.timeStamp),
          weiAmount: parseInt(openAsSender.weiAmount)
        })
      })
      resp?.paidsAsPayer?.forEach((paidAsPayer: any) => {
        paidsAsPayer.push({
          id: paidAsPayer.id,
          payer: paidAsPayer.payer,
          sender: paidAsPayer.sender,
          timeStamp: hexDateToNumber(paidAsPayer.timeStamp),
          weiAmount: parseInt(paidAsPayer.weiAmount)
        })
      })
      resp?.paidsAsSender?.forEach((paidAsSender: any) => {
        paidsAsSender.push({
          id: paidAsSender.id,
          payer: paidAsSender.payer,
          sender: paidAsSender.sender,
          timeStamp: hexDateToNumber(paidAsSender.timeStamp),
          weiAmount: parseInt(paidAsSender.weiAmount)
        })
      })
      resp?.disputesAsPayer?.forEach((disputeAsPayer: any) => {
        disputesAsPayer.push({
          id: disputeAsPayer.id,
          openDisputeBy: disputeAsPayer.openDisputeBy,
          payer: disputeAsPayer.payer,
          sender: disputeAsPayer.sender,
          timeStamp: hexDateToNumber(disputeAsPayer.timeStamp),
          weiAmount: parseInt(disputeAsPayer.weiAmount)
        })
      })
      resp?.disputesAsSender?.forEach((disputeAsSender: any) => {
        disputesAsSender.push({
          id: disputeAsSender.id,
          openDisputeBy: disputeAsSender.openDisputeBy,
          payer: disputeAsSender.payer,
          sender: disputeAsSender.sender,
          timeStamp: hexDateToNumber(disputeAsSender.timeStamp),
          weiAmount: parseInt(disputeAsSender.weiAmount)
        })
      })
      dispatch(
        setEscrowsStatus([
          { value: 'opensAsSender', text: 'Opens As Sender' },
          { value: 'paidsAsPayer', text: 'Paids As Payer' },
          { value: 'paidsAsSender', text: 'Paids As Sender' },
          { value: 'disputesAsPayer', text: 'Disputes As Payer' },
          { value: 'disputesAsSender', text: 'Disputes As Sender' }
        ])
      )
      dispatch(
        setMyEscrows({
          opensAsSender: opensAsSender,
          paidsAsPayer: paidsAsPayer,
          paidsAsSender: paidsAsSender,
          disputesAsPayer: disputesAsPayer,
          disputesAsSender: disputesAsSender
        })
      )
    } catch (e) {
      dispatch(setFetching(false))
      console.error(e)
    }
  }
}

export default myEscrowsSlice.reducer
