// External libs

// Assets

// Componentes
import Page from '@/components/templates/Page'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style

// Services

// Types

const Help: React.FC = () => {
  return (
    <Page title="Help">
      {/* <InfoList infoList={infoList} /> */}
      <Typography as="heading2" align="center" marginTop="1rem">
        In Construction! More info:{' '}
        <a href="https://discord.gg/sBUyJgPsPR">Discord</a>
      </Typography>
    </Page>
  )
}

export default Help
