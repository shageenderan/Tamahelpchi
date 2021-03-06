import * as React from 'react'
import { DropdownProps } from './Dropdown'
import { DropdownMenuVariant } from './DropdownMenu'
import { BsPrefixRefForwardingComponent } from './helpers'
export interface NavDropdownProps extends Omit<DropdownProps, 'onSelect' | 'title'> {
  id: string
  title: React.ReactNode
  disabled?: boolean
  active?: boolean
  menuRole?: string
  renderMenuOnMount?: boolean
  rootCloseEvent?: 'click' | 'mousedown'
  menuVariant?: DropdownMenuVariant
}
declare const _default: BsPrefixRefForwardingComponent<'div', NavDropdownProps> & {
  Item: BsPrefixRefForwardingComponent<
    BsPrefixRefForwardingComponent<'a', import('./SafeAnchor').SafeAnchorProps>,
    import('./DropdownItem').DropdownItemProps
  >
  ItemText: BsPrefixRefForwardingComponent<'span', unknown>
  Divider: BsPrefixRefForwardingComponent<'hr', unknown>
  Header: BsPrefixRefForwardingComponent<'div', unknown>
}
export default _default
