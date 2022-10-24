import { FC, ChangeEvent, SetStateAction, Dispatch } from 'react'
import styled from 'styled-components'
import CellCheckbox from '../components/Cell/CellCheckbox'
import CellNumber from '../components/Cell/CellNumber'
import { CSVData, Locales } from '../_types/types'
import { useLocales } from '../_utils'

type CSVTableProps = {
  headers: string[]
  csvData: CSVData
  arraySelected: boolean[][]
  setArraySelected: Dispatch<SetStateAction<boolean[][]>>
  processHours: (x: number, value: number) => void
}

const CSVTable: FC<CSVTableProps> = ({
  headers,
  csvData,
  arraySelected,
  setArraySelected,
  processHours,
}) => {
  const locales: Locales = useLocales()

  const handleCellChange = (
    e: ChangeEvent<HTMLInputElement>,
    x: number,
    y: number
  ) => {
    let newArraySelected: boolean[][] = [...arraySelected]

    let curRow: boolean[] = newArraySelected[x]
    //mark selected item as true and every other item as false
    for (let i = 0; i < curRow.length; i++) {
      if (i == y) {
        newArraySelected[x][i] = true
      } else newArraySelected[x][i] = false
    }

    processHours(x, parseInt(e.target.value))
    setArraySelected(newArraySelected)
  }

  if (!arraySelected) return <div>{locales.pleaseUpload}</div>

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, key) => (
            <th key={key}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvData.map((rowData, x) => (
          <tr key={x}>
            <td>{rowData[0]}</td>
            {rowData.slice(1).map((cellData, y) => (
              <td key={y} className={arraySelected[x][y] ? 'selected' : ''}>
                <CellCheckbox
                  type={'checkbox'}
                  value={cellData}
                  isActive={arraySelected[x][y]}
                  onChange={handleCellChange}
                  x={x}
                  y={y}
                />
              </td>
            ))}
            <td
              className={arraySelected[x][rowData.length - 1] ? 'selected' : ''}
            >
              <CellNumber
                type='number'
                onChange={handleCellChange}
                value={rowData[rowData.length - 1]}
                isActive={arraySelected[x][rowData.length - 1]}
                x={x}
                y={rowData.length - 1}
                onFocus={handleCellChange}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme.palette.main};
  text-align: left;
  margin-bottom: 30px;

  & td,
  & th {
    padding: 10px;
  }

  & td:not(:first-child) {
    text-align: center;
  }

  & td.selected {
    background: ${(props) => props.theme.palette.grey};
  }

  & :is(tr, td, th) {
    border: 1px solid ${(props) => props.theme.palette.main};
  }
`

export default CSVTable
