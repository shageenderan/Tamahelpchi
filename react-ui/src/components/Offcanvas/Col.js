import classNames from 'classnames'
import * as React from 'react'
import { useBootstrapPrefix } from './ThemeProvider'
import { jsx as _jsx } from 'react/jsx-runtime'
const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
const Col = /*#__PURE__*/ React.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({ bsPrefix, className, as: Component = 'div', ...props }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, 'col')
    const spans = []
    const classes = []
    DEVICE_SIZES.forEach(brkPoint => {
      const propValue = props[brkPoint]
      delete props[brkPoint]
      let span
      let offset
      let order

      if (typeof propValue === 'object' && propValue != null) {
        ;({ span = true, offset, order } = propValue)
      } else {
        span = propValue
      }

      const infix = brkPoint !== 'xs' ? `-${brkPoint}` : ''
      if (span) spans.push(span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`)
      if (order != null) classes.push(`order${infix}-${order}`)
      if (offset != null) classes.push(`offset${infix}-${offset}`)
    })

    if (!spans.length) {
      spans.push(prefix) // plain 'col'
    }

    return /*#__PURE__*/ _jsx(Component, { ...props, ref: ref, className: classNames(className, ...spans, ...classes) })
  }
)
Col.displayName = 'Col'
export default Col
