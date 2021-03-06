import * as React from 'react'
import PropTypes from 'prop-types'
import { SelectCallback, TransitionType } from './helpers'
import { EventKey } from './types'
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  activeKey?: EventKey
  defaultActiveKey?: EventKey
  onSelect?: SelectCallback
  variant?: 'tabs' | 'pills'
  transition?: TransitionType
  id?: string
  mountOnEnter?: boolean
  unmountOnExit?: boolean
}
declare const Tabs: {
  (props: TabsProps): JSX.Element
  propTypes: {
    /**
     * Mark the Tab with a matching `eventKey` as active.
     *
     * @controllable onSelect
     */
    activeKey: PropTypes.Requireable<string | number>
    /** The default active key that is selected on start */
    defaultActiveKey: PropTypes.Requireable<string | number>
    /**
     * Navigation style
     *
     * @type {('tabs'| 'pills')}
     */
    variant: PropTypes.Requireable<string>
    /**
     * Sets a default animation strategy for all children `<TabPane>`s.
     * Defaults to `<Fade>` animation, else use `false` to disable or a
     * react-transition-group `<Transition/>` component.
     *
     * @type {Transition | false}
     * @default {Fade}
     */
    transition: PropTypes.Requireable<boolean | PropTypes.ReactComponentLike>
    /**
     * HTML id attribute, required if no `generateChildId` prop
     * is specified.
     *
     * @type {string}
     */
    id: any
    /**
     * Callback fired when a Tab is selected.
     *
     * ```js
     * function (
     *   Any eventKey,
     *   SyntheticEvent event?
     * )
     * ```
     *
     * @controllable activeKey
     */
    onSelect: PropTypes.Requireable<(...args: any[]) => any>
    /**
     * Wait until the first "enter" transition to mount tabs (add them to the DOM)
     */
    mountOnEnter: PropTypes.Requireable<boolean>
    /**
     * Unmount tabs (remove it from the DOM) when it is no longer visible
     */
    unmountOnExit: PropTypes.Requireable<boolean>
  }
  defaultProps: {
    variant: string
    mountOnEnter: boolean
    unmountOnExit: boolean
  }
  displayName: string
}
export default Tabs
