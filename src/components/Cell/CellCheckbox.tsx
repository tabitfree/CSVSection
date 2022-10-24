import { FC } from 'react'
import { CellCheckboxProps } from '../../_types/props'

const CellCheckbox: FC<CellCheckboxProps> = ({
  type,
  isActive,
  value,
  onChange,
  x,
  y,
}) => {
  return (
    <input
      type={type}
      value={value}
      checked={isActive}
      onChange={(e) => onChange(e, x, y)}
      data-x={x}
      data-y={y}
    />
  )
}

export default CellCheckbox
