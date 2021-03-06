import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'
import { useBootstrapPrefix } from './ThemeProvider'
import Collapse from './Collapse'
import AccordionContext from './AccordionContext'
import { jsx as _jsx } from 'react/jsx-runtime'
const AccordionCollapse = /*#__PURE__*/ React.forwardRef(
  ({ bsPrefix, className, children, eventKey, ...props }, ref) => {
    const { activeEventKey } = useContext(AccordionContext)
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-collapse')
    return /*#__PURE__*/ _jsx(Collapse, {
      ref: ref,
      in: activeEventKey === eventKey,
      ...props,
      className: classNames(className, bsPrefix),
      children: /*#__PURE__*/ _jsx('div', {
        children: React.Children.only(children),
      }),
    })
  }
)
AccordionCollapse.displayName = 'AccordionCollapse'
export default AccordionCollapse
