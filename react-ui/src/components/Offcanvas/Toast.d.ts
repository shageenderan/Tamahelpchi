import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent, TransitionComponent } from './helpers'
import { Variant } from './types'
export interface ToastProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
  animation?: boolean
  autohide?: boolean
  delay?: number
  onClose?: () => void
  show?: boolean
  transition?: TransitionComponent
  bg?: Variant
}
declare const _default: BsPrefixRefForwardingComponent<'div', ToastProps> & {
  Body: BsPrefixRefForwardingComponent<'div', unknown>
  Header: React.ForwardRefExoticComponent<
    import('./ToastHeader').ToastHeaderProps & React.RefAttributes<HTMLDivElement>
  >
}
export default _default
