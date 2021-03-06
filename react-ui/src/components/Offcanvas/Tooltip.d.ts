import * as React from 'react'
import { ArrowProps, Placement } from './types'
import { BsPrefixProps } from './helpers'
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  id: string
  placement?: Placement
  arrowProps?: ArrowProps
  show?: boolean
  popper?: any
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>
export default Tooltip
