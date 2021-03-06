import classNames from 'classnames'
import * as React from 'react'
import { useBootstrapPrefix } from './ThemeProvider'
import SafeAnchor from './SafeAnchor'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
}
const Button = /*#__PURE__*/ React.forwardRef(
  ({ bsPrefix, variant, size, active, className, type, as, ...props }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, 'btn')
    const classes = classNames(
      className,
      prefix,
      active && 'active',
      variant && `${prefix}-${variant}`,
      size && `${prefix}-${size}`
    )

    if (props.href) {
      return /*#__PURE__*/ _jsx(SafeAnchor, {
        ...props,
        as: as,
        ref: ref,
        className: classNames(classes, props.disabled && 'disabled'),
      })
    }

    if (!type && !as) {
      type = 'button'
    }

    const Component = as || 'button'
    return /*#__PURE__*/ _jsx(Component, { ...props, ref: ref, type: type, className: classes })
  }
)
Button.displayName = 'Button'
Button.defaultProps = defaultProps
export default Button
