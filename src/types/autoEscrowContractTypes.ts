export interface ILastEscrows {
  id: number
  sender: string
  timeStamp: number
  weiAmount: number
}

export type TGetLastEscrows = ILastEscrows[]

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
