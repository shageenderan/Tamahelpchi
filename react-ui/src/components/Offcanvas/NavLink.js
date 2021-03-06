import classNames from 'classnames'
import * as React from 'react'
import SafeAnchor from './SafeAnchor'
import AbstractNavItem from './AbstractNavItem'
import { useBootstrapPrefix } from './ThemeProvider'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  disabled: false,
  as: SafeAnchor,
}
const NavLink = /*#__PURE__*/ React.forwardRef(({ bsPrefix, disabled, className, as, ...props }, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link')
  return /*#__PURE__*/ _jsx(AbstractNavItem, {
    ...props,
    ref: ref,
    as: as,
    disabled: disabled,
    className: classNames(className, bsPrefix, disabled && 'disabled'),
  })
})
NavLink.displayName = 'NavLink'
NavLink.defaultProps = defaultProps
export default NavLink
