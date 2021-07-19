import * as React from 'react'
import { ArrowProps, Placement } from './types'
import { BsPrefixProps } from './helpers'
export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  id: string
  placement?: Placement
  title?: string
  arrowProps?: ArrowProps
  body?: boolean
  popper?: any
  show?: boolean
}
declare const _default: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>> & {
  Header: import('./helpers').BsPrefixRefForwardingComponent<'div', unknown>
  Body: import('./helpers').BsPrefixRefForwardingComponent<'div', unknown>
  POPPER_OFFSET: readonly [0, 8]
}
export default _default
