import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers'
import { EventKey } from './types'
export interface NavProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  navbarBsPrefix?: string
  cardHeaderBsPrefix?: string
  variant?: 'tabs' | 'pills'
  activeKey?: EventKey
  defaultActiveKey?: EventKey
  fill?: boolean
  justify?: boolean
  onSelect?: SelectCallback
  navbar?: boolean
  navbarScroll?: boolean
}
declare const _default: BsPrefixRefForwardingComponent<'div', NavProps> & {
  Item: BsPrefixRefForwardingComponent<'div', unknown>
  Link: BsPrefixRefForwardingComponent<'a', import('./NavLink').NavLinkProps>
}
export default _default
