import { FC, ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { CSVData } from '../_types/types'
import { useLocales } from '../_utils'
import CSVReader from './CSVReader'
import CSVTable from './CSVTable'
import ExportCSV from './ExportCSV'

const CSVSection: FC = () => {
  const locales = useLocales()
  const headers = locales.csvTableHeaders

  // data from csv file read via PapaParse library
  const [csvData, setCsvData] = useState<CSVData>([])
  const [csvError, setCsvError] = useState<string>('')

  // current selected value for each row
  const [rowValues, setRowValues] = useState<number[]>([])
  // map of each row, there should be one true(selected) element per one row
  const [arraySelected, setArraySelected] = useState<boolean[][]>([])

  const [hours, setHours] = useState<number>(0)
  const [perHour, setPerHour] = useState<string>('')

  function handleFileUploadAccepted(results: any) {
    const data = results.data

    // validate data
    const isDataAlright =
      data.filter((dataRow: string[]) => dataRow.length != headers.length - 1)
        .length === 0
    if (!isDataAlright) {
      setCsvError('Provide a useful csv please!')
      return
    }

    // data is alright
    setCsvError('')
    setCsvData(data)

    initCSVTableData(data)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerHour(e.target.value)
  }

  const initCSVTableData = (data: CSVData) => {
    let newArraySelected = Array.from(Array(data.length), () =>
      Array(data[0].length).fill(false)
    )
    setArraySelected(newArraySelected)

    let newRowValues = Array(data[0].length).fill(0)
    setRowValues(newRowValues)
  }

  //
  const processHours = (x: number, value: number) => {
    let newHours: number = hours
    let newRowValues: number[] = [...rowValues]

    newHours -= newRowValues[x]
    newHours += value
    newRowValues[x] = value

    setHours(newHours)
    setRowValues(newRowValues)
  }

  /**
   *
   * @returns array of objects, each object has values based on col1: val1, col2: val2
   */
  const dataToJson = () => {
    let retArr = []
    let data: CSVData = csvData
    let headers: string[] = locales.csvTableHeaders

    // fill the array with values
    for (let i = 0; i < data.length; i++) {
      let curRow = data[i]
      let tmpObj: any = {}
      for (let j = 0; j < headers.length - 1; j++) {
        tmpObj[`${headers[j]}`] = curRow[j] // create new record

        if (arraySelected[i][j - 1]) {
          tmpObj[`${headers[j]}`] += locales.marked // mark it as chosen
        }
      }
      retArr.push(tmpObj)
    }

    // fill in the "others" column
    retArr.forEach((obj: any, i: number) => {
      if (arraySelected[i][data[0].length - 1]) {
        obj[`${headers[headers.length - 1]}`] = rowValues[i] + locales.marked
        return
      }
      obj[`${headers[headers.length - 1]}`] = '-'
    })

    return retArr
  }

  return (
    <Section>
      <CSVReader handleFileUploadAccepted={handleFileUploadAccepted} />
      {csvError && <Error>{csvError}</Error>}
      {!!csvData.length && !!arraySelected.length && (
        <>
          <CSVTable
            headers={headers}
            csvData={csvData}
            processHours={processHours}
            arraySelected={arraySelected}
            setArraySelected={setArraySelected}
          />
          <FlexContainer>
            <HoursPriceInTotal>
              <div>
                <NumberInput
                  type='number'
                  onChange={handleInputChange}
                  value={perHour}
                  min={0}
                />{' '}
                <span>{locales.perHour}</span>
              </div>
              <div>
                {hours} {locales.hours}
              </div>
              <PerHour>
                {hours * Number(perHour) || 0} {locales.inTotal}
              </PerHour>
            </HoursPriceInTotal>
            <ExportCSV text={locales.exportCSV} dataToJson={dataToJson} />
          </FlexContainer>
        </>
      )}
    </Section>
  )
}

const NumberInput = styled.input`
  margin-bottom: 10px;
`

const Error = styled.div`
  color: ${(props) => props.theme.palette.error};
`

const Section = styled.section`
  padding: 60px 15px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const HoursPriceInTotal = styled.div`
  width: 100%;
  max-width: 300px;
`

const PerHour = styled.div`
  border-top: 1px solid #000;
  padding-top: 10px;
`

export default CSVSection
