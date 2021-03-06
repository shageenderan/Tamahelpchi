import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'
import useEventCallback from '@restart/hooks/useEventCallback'
import SelectableContext, { makeEventKey } from './SelectableContext'
import { useBootstrapPrefix } from './ThemeProvider'
import NavContext from './NavContext'
import SafeAnchor from './SafeAnchor'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  as: SafeAnchor,
  disabled: false,
}
const DropdownItem = /*#__PURE__*/ React.forwardRef(
  (
    { bsPrefix, className, eventKey, disabled, href, onClick, onSelect, active: propActive, as: Component, ...props },
    ref
  ) => {
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item')
    const onSelectCtx = useContext(SelectableContext)
    const navContext = useContext(NavContext)
    const { activeKey } = navContext || {}
    const key = makeEventKey(eventKey, href)
    const active = propActive == null && key != null ? makeEventKey(activeKey) === key : propActive
    const handleClick = useEventCallback(event => {
      // SafeAnchor handles the disabled case, but we handle it here
      // for other components
      if (disabled) return
      onClick == null ? void 0 : onClick(event)
      onSelectCtx == null ? void 0 : onSelectCtx(key, event)
      onSelect == null ? void 0 : onSelect(key, event)
    })
    return (
      /*#__PURE__*/
      // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
      // @ts-ignore
      _jsx(Component, {
        ...props,
        ref: ref,
        href: href,
        disabled: disabled,
        className: classNames(className, prefix, active && 'active', disabled && 'disabled'),
        onClick: handleClick,
      })
    )
  }
)
DropdownItem.displayName = 'DropdownItem'
DropdownItem.defaultProps = defaultProps
export default DropdownItem
