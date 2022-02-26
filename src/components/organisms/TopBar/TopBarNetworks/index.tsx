// External libs

// Assets

// Componentes

// Subcomponentes and style
import Select from '@/components/atoms/Select'
import { setSelectedNetwork } from '@/redux/slicers/networksSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'

// Services

// Types

const TopBarNetworks: React.FC = () => {
  const dispatch = useAppDispatch()
  const { networks, selected } = useAppSelector(
    (state: RootState) => state.networks
  )

  const handleChange = (network: string) => {
    dispatch(setSelectedNetwork(network))
  }

  return (
    <Select
      options={networks}
      handleChange={e => handleChange(e.currentTarget.value)}
      value={selected}
      margin="0 0.5rem"
    />
  )
}

export default TopBarNetworks
