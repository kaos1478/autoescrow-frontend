import { toast } from 'react-toastify'

type TUseContractMiddleware = (data: any) => any

export const useAsyncValidator = () =>
  async function useAsyncValidator(
    func: TUseContractMiddleware,
    successMsg: string,
    promiseMsg: string
  ) {
    try {
      toast(promiseMsg, {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        progress: undefined
      })
      await func
      toast.dismiss()
      toast.success(successMsg, {
        autoClose: 2500,
        closeOnClick: false,
        draggable: false,
        progress: undefined
      })
    } catch (e: any) {
      toast.dismiss()
      toast.error(e.data?.message || e.message, {
        autoClose: 2500,
        closeOnClick: false,
        draggable: false,
        progress: undefined
      })
    }
  }
