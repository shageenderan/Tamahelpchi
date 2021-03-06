import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'
import { useDropdownMenu } from 'react-overlays/DropdownMenu'
import useMergedRefs from '@restart/hooks/useMergedRefs'
import warning from 'warning'
import DropdownContext from './DropdownContext'
import InputGroupContext from './InputGroupContext'
import NavbarContext from './NavbarContext'
import { useBootstrapPrefix } from './ThemeProvider'
import useWrappedRefWithWarning from './useWrappedRefWithWarning'
import { alignPropType } from './types'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  flip: true,
}
const DropdownMenu = /*#__PURE__*/ React.forwardRef(
  (
    {
      bsPrefix,
      className,
      align,
      rootCloseEvent,
      flip,
      show: showProps,
      renderOnMount,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'div',
      popperConfig,
      variant,
      ...props
    },
    ref
  ) => {
    let alignRight = false
    const isNavbar = useContext(NavbarContext)
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu')
    const { align: contextAlign } = useContext(DropdownContext)
    align = align || contextAlign
    const isInputGroup = useContext(InputGroupContext)
    const alignClasses = []

    if (align) {
      if (typeof align === 'object') {
        const keys = Object.keys(align)
        process.env.NODE_ENV !== 'production'
          ? warning(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`')
          : void 0

        if (keys.length) {
          const brkPoint = keys[0]
          const direction = align[brkPoint] // .dropdown-menu-end is required for responsively aligning
          // left in addition to align left classes.
          // Reuse alignRight to toggle the class below.

          alignRight = direction === 'start'
          alignClasses.push(`${prefix}-${brkPoint}-${direction}`)
        }
      } else if (align === 'end') {
        alignRight = true
      }
    }

    const [menuProps, { hasShown, popper, show, alignEnd, toggle }] = useDropdownMenu({
      flip,
      rootCloseEvent,
      show: showProps,
      alignEnd: alignRight,
      usePopper: !isNavbar && alignClasses.length === 0,
      offset: [0, 2],
      popperConfig,
    })
    menuProps.ref = useMergedRefs(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref)
    if (!hasShown && !renderOnMount && !isInputGroup) return null // For custom components provide additional, non-DOM, props;

    if (typeof Component !== 'string') {
      menuProps.show = show

      menuProps.close = () => (toggle == null ? void 0 : toggle(false))

      menuProps.align = align
    }

    let style = props.style

    if (popper != null && popper.placement) {
      // we don't need the default popper style,
      // menus are display: none when not shown.
      style = { ...props.style, ...menuProps.style }
      props['x-placement'] = popper.placement
    }

    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      ...menuProps,
      style: style, // Bootstrap css requires this data attrib to style responsive menus.
      ...((alignClasses.length || isNavbar) && {
        'data-bs-popper': 'static',
      }),
      className: classNames(
        className,
        prefix,
        show && 'show',
        alignEnd && `${prefix}-end`,
        variant && `${prefix}-${variant}`,
        ...alignClasses
      ),
    })
  }
)
DropdownMenu.displayName = 'DropdownMenu'
DropdownMenu.defaultProps = defaultProps
export default DropdownMenu
