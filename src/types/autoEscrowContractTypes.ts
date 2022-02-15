import {
  IOpensAsSender,
  IPaidsAsPayer,
  IPaidsAsSender,
  IDisputesAsPayer,
  IDisputesAsSender,
  IOpenEscrow,
  IPaidEscrow,
  IDisputeEscrow
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
  disputesAsSender: IDisputesAsSender[]
  disputesAsPayer: IDisputesAsPayer[]
  opensAsSender: IOpensAsSender[]
  paidsAsPayer: IPaidsAsPayer[]
  paidsAsSender: IPaidsAsSender[]
}

export interface IGetEscrowById {
  opens: IOpenEscrow[]
  paids: IPaidEscrow[]
  disputes: IDisputeEscrow[]
}

export interface IGetContractInfo {
  currentDisputeAsSender: number
  currentOpenAsSender: number
  currentPaidAsSender: number
  totalCreated: number
  totalDisputeAsSender: number
  totalPaidAsSender: number
  currentDisputeAsPayer: number
  currentPaidAsPayer: number
  totalDisputeAsPayer: number
  totalPaidAsPayer: number
}
