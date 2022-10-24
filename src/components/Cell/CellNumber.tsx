import { ChangeEvent, FC, useState } from 'react'
import { CellNumberProps } from '../../_types/props'

const CellNumber: FC<CellNumberProps> = ({
  type,
  isActive,
  value,
  onChange,
  onFocus,
  x,
  y,
}) => {
  const [val, setVal] = useState<number>(Number(value))
  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    onFocus(e, x, y)
  }

  return (
    <input
      type={type}
      onChange={(e) => {
        onChange(e, x, y)
        setVal(Number(e.target.value))
      }}
      onFocus={(e) => onFocus(e, x, y)}
      value={val}
      min={0}
    />
  )
}

export default CellNumber
