// External libs

// Assets

// Componentes
import Page from '@/components/templates/Page'
import PartnerList from '@/components/organisms/PartnerList'
import RoadmapList from '@/components/organisms/RoadmapList'
import SocialMediaList from '@/components/organisms/SocialMediaList'

// Subcomponentes and style

// Services

// Types

const Info: React.FC = () => {
  return (
    <Page title="Info">
      {/* <InfoList infoList={infoList} /> */}
      <RoadmapList />
      <PartnerList />
      <SocialMediaList />
    </Page>
  )
}

export default Info
