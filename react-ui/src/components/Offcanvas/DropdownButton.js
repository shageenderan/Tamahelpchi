import * as React from 'react'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'
import { alignPropType } from './types'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
const propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: PropTypes.any,

  /** An `href` passed to the Toggle component */
  href: PropTypes.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: PropTypes.func,

  /** The content of the non-toggle Button.  */
  title: PropTypes.node.isRequired,

  /** Disables both Buttons  */
  disabled: PropTypes.bool,

  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: PropTypes.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: PropTypes.string,

  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: PropTypes.oneOf(['dark']),

  /** @ignore */
  bsPrefix: PropTypes.string,

  /** @ignore */
  variant: PropTypes.string,

  /** @ignore */
  size: PropTypes.string,
}
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */

const DropdownButton = /*#__PURE__*/ React.forwardRef(
  (
    {
      title,
      children,
      bsPrefix,
      rootCloseEvent,
      variant,
      size,
      menuRole,
      renderMenuOnMount,
      disabled,
      href,
      id,
      menuVariant,
      ...props
    },
    ref
  ) =>
    /*#__PURE__*/ _jsxs(Dropdown, {
      ref: ref,
      ...props,
      children: [
        /*#__PURE__*/ _jsx(DropdownToggle, {
          id: id,
          href: href,
          size: size,
          variant: variant,
          disabled: disabled,
          childBsPrefix: bsPrefix,
          children: title,
        }),
        /*#__PURE__*/ _jsx(DropdownMenu, {
          role: menuRole,
          renderOnMount: renderMenuOnMount,
          rootCloseEvent: rootCloseEvent,
          variant: menuVariant,
          children: children,
        }),
      ],
    })
)
DropdownButton.displayName = 'DropdownButton'
DropdownButton.propTypes = propTypes
export default DropdownButton
