import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'
import { useBootstrapPrefix } from './ThemeProvider'
import TabContext from './TabContext'
import SelectableContext, { makeEventKey } from './SelectableContext'
import Fade from './Fade'
import { jsx as _jsx } from 'react/jsx-runtime'

function useTabContext(props) {
  const context = useContext(TabContext)
  if (!context) return props
  const { activeKey, getControlledId, getControllerId, ...rest } = context
  const shouldTransition = props.transition !== false && rest.transition !== false
  const key = makeEventKey(props.eventKey)
  return {
    ...props,
    active: props.active == null && key != null ? makeEventKey(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || Fade),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit,
  }
}

const TabPane = /*#__PURE__*/ React.forwardRef((props, ref) => {
  const {
    bsPrefix,
    className,
    active,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    eventKey: _,
    ...rest
  } = useTabContext(props)
  const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane')
  if (!active && !Transition && unmountOnExit) return null

  let pane = /*#__PURE__*/ _jsx(Component, {
    ...rest,
    ref: ref,
    role: 'tabpanel',
    'aria-hidden': !active,
    className: classNames(className, prefix, {
      active,
    }),
  })

  if (Transition)
    pane = /*#__PURE__*/ _jsx(Transition, {
      in: active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit,
      children: pane,
    }) // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/ _jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/ _jsx(SelectableContext.Provider, {
      value: null,
      children: pane,
    }),
  })
})
TabPane.displayName = 'TabPane'
export default TabPane
