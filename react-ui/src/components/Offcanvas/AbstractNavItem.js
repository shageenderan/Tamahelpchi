import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'
import useEventCallback from '@restart/hooks/useEventCallback'
import warning from 'warning'
import NavContext from './NavContext'
import SelectableContext, { makeEventKey } from './SelectableContext'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  disabled: false,
}
const AbstractNavItem = /*#__PURE__*/ React.forwardRef(
  ({ active, className, eventKey, onSelect, onClick, as: Component, ...props }, ref) => {
    const navKey = makeEventKey(eventKey, props.href)
    const parentOnSelect = useContext(SelectableContext)
    const navContext = useContext(NavContext)
    let isActive = active

    if (navContext) {
      if (!props.role && navContext.role === 'tablist') props.role = 'tab'
      const contextControllerId = navContext.getControllerId(navKey)
      const contextControlledId = navContext.getControlledId(navKey)
      process.env.NODE_ENV !== 'production'
        ? warning(
            !contextControllerId || !props.id,
            `[react-bootstrap] The provided id '${props.id}' was overwritten by the current navContext with '${contextControllerId}'.`
          )
        : void 0
      process.env.NODE_ENV !== 'production'
        ? warning(
            !contextControlledId || !props['aria-controls'],
            `[react-bootstrap] The provided aria-controls value '${props['aria-controls']}' was overwritten by the current navContext with '${contextControlledId}'.`
          )
        : void 0
      props['data-rb-event-key'] = navKey
      props.id = contextControllerId || props.id
      props['aria-controls'] = contextControlledId || props['aria-controls']
      isActive = active == null && navKey != null ? navContext.activeKey === navKey : active
    }

    if (props.role === 'tab') {
      if (props.disabled) {
        props.tabIndex = -1
        props['aria-disabled'] = true
      }

      props['aria-selected'] = isActive
    }

    const handleOnclick = useEventCallback(e => {
      onClick == null ? void 0 : onClick(e)
      if (navKey == null) return
      onSelect == null ? void 0 : onSelect(navKey, e)
      parentOnSelect == null ? void 0 : parentOnSelect(navKey, e)
    })
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      ref: ref,
      onClick: handleOnclick,
      className: classNames(className, isActive && 'active'),
    })
  }
)
AbstractNavItem.defaultProps = defaultProps
export default AbstractNavItem
