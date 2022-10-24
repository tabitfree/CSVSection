import { ChangeEvent } from 'react'

type CellCheckbox = 'checkbox'
type CellNumber = 'number'

type CellType = CellCheckbox | CellNumber

export type CellProps = {
  type: CellType
  isActive: boolean
  value: number | string
  onChange: (e: ChangeEvent<HTMLInputElement>, x: number, y: number) => void
  x: number
  y: number
}

export type CellCheckboxProps = CellProps & {
  type: CellCheckbox
}

export type CellNumberProps = CellProps & {
  type: CellNumber
  onFocus: (e: ChangeEvent<HTMLInputElement>, x: number, y: number) => void
}
