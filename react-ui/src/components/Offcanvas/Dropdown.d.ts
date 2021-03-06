import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers'
import { AlignType } from './types'
export interface DropdownProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  drop?: 'up' | 'start' | 'end' | 'down'
  align?: AlignType
  show?: boolean
  flip?: boolean
  onToggle?: (
    isOpen: boolean,
    event: React.SyntheticEvent,
    metadata: {
      source: 'select' | 'click' | 'rootClose' | 'keydown'
    }
  ) => void
  focusFirstItemOnShow?: boolean | 'keyboard'
  onSelect?: SelectCallback
  navbar?: boolean
  autoClose?: boolean | 'outside' | 'inside'
}
declare const _default: BsPrefixRefForwardingComponent<'div', DropdownProps> & {
  Toggle: BsPrefixRefForwardingComponent<'button', import('./DropdownToggle').DropdownToggleProps>
  Menu: BsPrefixRefForwardingComponent<'div', import('./DropdownMenu').DropdownMenuProps>
  Item: BsPrefixRefForwardingComponent<
    BsPrefixRefForwardingComponent<'a', import('./SafeAnchor').SafeAnchorProps>,
    import('./DropdownItem').DropdownItemProps
  >
  ItemText: BsPrefixRefForwardingComponent<'span', unknown>
  Divider: BsPrefixRefForwardingComponent<'hr', unknown>
  Header: BsPrefixRefForwardingComponent<'div', unknown>
}
export default _default
