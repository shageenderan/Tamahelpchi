import * as React from 'react'
import SafeAnchor from './SafeAnchor'
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers'
import { EventKey } from './types'
export interface DropdownItemProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  active?: boolean
  disabled?: boolean
  eventKey?: EventKey
  href?: string
  onSelect?: SelectCallback
}
declare const DropdownItem: BsPrefixRefForwardingComponent<typeof SafeAnchor, DropdownItemProps>
export default DropdownItem
