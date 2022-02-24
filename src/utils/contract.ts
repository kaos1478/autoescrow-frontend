import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'

export const toWei = (amount: number) =>
  ethers.utils.parseEther(amount.toString()) // new BigNumber(amount).multipliedBy(new BigNumber(10).pow(18)).toNumber() // web3.utils.toWei(amount.toString())

export const toEther = (amount: number) =>
  new BigNumber(amount).dividedBy(new BigNumber(10).pow(18)).toNumber()

export const hexToDay = (value: string) => parseInt(value) / 86400

export const hexToDate = (value: string) => new Date(parseInt(value) * 1000)

export const hexDateToNumber = (value: string) => parseInt(value) * 1000

export const checkValidAmount = (value: number, minValueWei: number) =>
  value >= minValueWei

export const numberToHex = (value: number) => `0x${value.toString(16)}`

export const hexToNumber = (value: string) => parseInt(value, 10)
