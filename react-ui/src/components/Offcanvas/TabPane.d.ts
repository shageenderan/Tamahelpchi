import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent, TransitionCallbacks, TransitionType } from './helpers'
import { EventKey } from './types'
export interface TabPaneProps extends TransitionCallbacks, BsPrefixProps, React.HTMLAttributes<HTMLElement> {
  eventKey?: EventKey
  active?: boolean
  transition?: TransitionType
  mountOnEnter?: boolean
  unmountOnExit?: boolean
}
declare const TabPane: BsPrefixRefForwardingComponent<'div', TabPaneProps>
export default TabPane
