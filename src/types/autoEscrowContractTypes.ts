import {
  IOpensAsSender,
  IPaidsAsPayer,
  IPaidsAsSender,
  IDisputesAsPayer,
  IDisputesAsSender
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
