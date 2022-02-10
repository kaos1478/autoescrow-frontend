export interface IDisputesAsSender {
  id: number
  openDisputeBy: string
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IDisputesAsPayer {
  id: number
  openDisputeBy: string
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IOpensAsSender {
  id: number
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IPaidsAsPayer {
  id: number
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}

export interface IPaidsAsSender {
  id: number
  payer: string
  sender: string
  timeStamp: number
  weiAmount: number
}
