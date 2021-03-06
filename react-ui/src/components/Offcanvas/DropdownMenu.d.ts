import * as React from 'react'
import { UseDropdownMenuOptions } from 'react-overlays/DropdownMenu'
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers'
import { AlignType } from './types'
export declare type DropdownMenuVariant = 'dark' | string
export interface DropdownMenuProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  show?: boolean
  renderOnMount?: boolean
  flip?: boolean
  align?: AlignType
  onSelect?: SelectCallback
  rootCloseEvent?: 'click' | 'mousedown'
  popperConfig?: UseDropdownMenuOptions['popperConfig']
  variant?: DropdownMenuVariant
}
declare const DropdownMenu: BsPrefixRefForwardingComponent<'div', DropdownMenuProps>
export default DropdownMenu
