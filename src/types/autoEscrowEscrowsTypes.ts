export interface IOpenEscrow {
  id: number
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IPaidEscrow {
  id: number
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IDisputeEscrow {
  id: number
  openDisputeBy: string
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IDisputesAsSender extends IDisputeEscrow {}

export interface IDisputesAsPayer extends IDisputeEscrow {}

export interface IOpensAsSender extends IOpenEscrow {}

export interface IPaidsAsPayer extends IPaidEscrow {}

export interface IPaidsAsSender extends IPaidEscrow {}
