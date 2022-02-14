// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
import InfoList from '@/components/organisms/InfoList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services

// Types

const Help: React.FC = () => {
  const infoList = [
    { title: 'Teste1', description: 'Description1' },
    { title: 'Teste2', description: 'Description2' }
  ]

  return (
    <Page title="Help">
      {/* <InfoList infoList={infoList} /> */}
      <Typography as="heading2" align="center">
        In Contruction
      </Typography>
    </Page>
  )
}

export default Help
