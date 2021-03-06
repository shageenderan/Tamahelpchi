import PropTypes from 'prop-types'
import * as React from 'react'
import { TabPaneProps } from './TabPane'
import { EventKey } from './types'
export interface TabProps extends Omit<TabPaneProps, 'title'> {
  eventKey?: EventKey
  title: React.ReactNode
  disabled?: boolean
  tabClassName?: string
}
declare const _default: React.FC<TabProps> & {
  Container: {
    (props: import('./TabContainer').TabContainerProps): JSX.Element
    propTypes: {
      id: PropTypes.Validator<string>
      transition: PropTypes.Requireable<boolean | PropTypes.ReactComponentLike>
      mountOnEnter: PropTypes.Requireable<boolean>
      unmountOnExit: PropTypes.Requireable<boolean>
      generateChildId: PropTypes.Requireable<(...args: any[]) => any>
      onSelect: PropTypes.Requireable<(...args: any[]) => any>
      activeKey: PropTypes.Requireable<string | number>
    }
  }
  Content: import('./helpers').BsPrefixRefForwardingComponent<'div', unknown>
  Pane: import('./helpers').BsPrefixRefForwardingComponent<'div', TabPaneProps>
}
export default _default
