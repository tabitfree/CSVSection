import { FC } from 'react'
import { useCSVDownloader } from 'react-papaparse'
import styled from 'styled-components'

type ExportCSVProps = {
  text: string
  dataToJson: () => JSON[]
}

const ExportCSV: FC<ExportCSVProps> = ({ text, dataToJson }) => {
  const { CSVDownloader } = useCSVDownloader()

  return (
    <Container>
      <CSVDownloader
        filename={'csv-export'}
        bom={true}
        config={{
          delimiter: ',',
        }}
        data={dataToJson}
      >
        {text} <img src='/assets/img/download.svg' />
      </CSVDownloader>
    </Container>
  )
}

const Container = styled.div`
  & a {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    cursor: pointer;
    background: ${(props) => props.theme.palette.secondary};
    border: 1px solid ${(props) => props.theme.palette.main};

    & img {
      width: 17px;
    }
  }
`

export default ExportCSV
