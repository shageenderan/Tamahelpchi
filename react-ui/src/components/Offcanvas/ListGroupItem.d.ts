import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers'
import { Variant, EventKey } from './types'
export interface ListGroupItemProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>, BsPrefixProps {
  action?: boolean
  active?: boolean
  disabled?: boolean
  eventKey?: EventKey
  href?: string
  onClick?: React.MouseEventHandler
  variant?: Variant
}
declare const ListGroupItem: BsPrefixRefForwardingComponent<'a', ListGroupItemProps>
export default ListGroupItem
