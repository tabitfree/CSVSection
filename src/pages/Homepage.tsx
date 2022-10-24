import { FC } from 'react'
import { useLocales } from '../_utils'
import CSVSection from '../components/CSVSection'
import styled from 'styled-components'

const Homepage: FC = () => {
  const locales = useLocales()

  return (
    <PageContainer>
      <CSVSection />
    </PageContainer>
  )
}

const PageContainer = styled.main`
  padding: 0 15px;
`

export default Homepage
