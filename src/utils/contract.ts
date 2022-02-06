import web3 from 'web3'
import ethers from 'ethers'

export const toWei = (amount: string) => web3.utils.toWei(amount)

export const toEther = (amount: string) => ethers.utils.formatEther(amount)

export const hexToDay = (value: string) => parseInt(value) / 86400

export const hexToDate = (value: string) => new Date(parseInt(value) * 1000)

export const hexDateToNumber = (value: string) => parseInt(value) * 1000
