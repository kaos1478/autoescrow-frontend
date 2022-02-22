import {
  IDisputeEscrow,
  IDisputesAsPayer,
  IDisputesAsSender,
  IOpenEscrow,
  IOpensAsSender,
  IPaidEscrow,
  IPaidsAsPayer,
  IPaidsAsSender
} from '@/types/autoEscrowEscrowsTypes'

export type TGetLastEscrows = IOpensAsSender[]

export interface IGetContratInfo {
  active: boolean
  counter: number
  disputeEscrowsLenght: number
  minValueWei: number
  openDeadline: number
  openEscrowsLenght: number
  owner: string
  paidDeadline: number
  paidEscrowsLenght: number
  taxPercentage: number
}

export interface IGetEscrowsBySender {
  disputesAsPayer: IDisputesAsPayer[]
  disputesAsSender: IDisputesAsSender[]
  opensAsSender: IOpensAsSender[]
  paidsAsPayer: IPaidsAsPayer[]
  paidsAsSender: IPaidsAsSender[]
}

export interface IGetEscrowById {
  disputes: IDisputeEscrow[]
  opens: IOpenEscrow[]
  paids: IPaidEscrow[]
}

export interface IGetContractInfo {
  currentDisputeAsPayer: number
  currentDisputeAsSender: number
  currentOpenAsSender: number
  currentPaidAsPayer: number
  currentPaidAsSender: number
  totalCreated: number
  totalDisputeAsPayer: number
  totalDisputeAsSender: number
  totalPaidAsPayer: number
  totalPaidAsSender: number
}
