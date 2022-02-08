export interface IDisputesAsSender {
  openDisputeBy: string
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IDisputesAsPayer {
  openDisputeBy: string
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IOpensAsSender {
  sender: string
  id: number
  timeStamp: number
  weiAmount: number
}

export interface IPaidsAsPayer {
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IPaidsAsSender {
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}
