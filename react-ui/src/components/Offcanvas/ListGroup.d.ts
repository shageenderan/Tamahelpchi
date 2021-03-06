import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers'
import { EventKey } from './types'
export interface ListGroupProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  variant?: 'flush'
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  activeKey?: EventKey
  defaultActiveKey?: EventKey
  onSelect?: SelectCallback
}
declare const _default: BsPrefixRefForwardingComponent<'div', ListGroupProps> & {
  Item: BsPrefixRefForwardingComponent<'a', import('./ListGroupItem').ListGroupItemProps>
}
export default _default
