import React, { CSSProperties, FC } from 'react'

import { useCSVReader } from 'react-papaparse'
import styled from 'styled-components'
import { useLocales } from '../_utils'

const styles = {
  csvReader: {} as CSSProperties,
  browseFile: {} as CSSProperties,
  acceptedFile: {} as CSSProperties,
  remove: {} as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: 'red',
  } as CSSProperties,
}

type CSVReaderProps = {
  handleFileUploadAccepted: (results: any) => void
}

const CSVReader: FC<CSVReaderProps> = ({ handleFileUploadAccepted }) => {
  const locales = useLocales()
  const { CSVReader } = useCSVReader()

  return (
    <CSVReader
      onUploadAccepted={handleFileUploadAccepted}
      bom={true} // tells excel that encoding is UTF8
    >
      {({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
        <>
          <Reader>
            <AcceptedFile>{acceptedFile && acceptedFile.name}</AcceptedFile>
            <BrowseFile
              type='button'
              {...getRootProps()}
              style={styles.browseFile}
            >
              {locales.uploadFile}
            </BrowseFile>
          </Reader>
        </>
      )}
    </CSVReader>
  )
}

const Reader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: auto;
`

const BrowseFile = styled.button`
  width: 40%;
`

const AcceptedFile = styled.div`
  border: 1px solid #ccc;
  height: 45px;
  line-height: 2.5;
  padding-left: 10px;
  width: 60%;
`

export default CSVReader
