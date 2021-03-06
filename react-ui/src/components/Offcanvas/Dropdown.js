import classNames from 'classnames'
import * as React from 'react'
import { useContext, useMemo } from 'react'
import BaseDropdown from 'react-overlays/Dropdown'
import { useUncontrolled } from 'uncontrollable'
import useEventCallback from '@restart/hooks/useEventCallback'
import DropdownContext from './DropdownContext'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'
import InputGroupContext from './InputGroupContext'
import SelectableContext from './SelectableContext'
import { useBootstrapPrefix } from './ThemeProvider'
import createWithBsPrefix from './createWithBsPrefix'
import { alignPropType } from './types'
import { jsx as _jsx } from 'react/jsx-runtime'
const DropdownHeader = createWithBsPrefix('dropdown-header', {
  defaultProps: {
    role: 'heading',
  },
})
const DropdownDivider = createWithBsPrefix('dropdown-divider', {
  Component: 'hr',
  defaultProps: {
    role: 'separator',
  },
})
const DropdownItemText = createWithBsPrefix('dropdown-item-text', {
  Component: 'span',
})
const defaultProps = {
  navbar: false,
  align: 'start',
  autoClose: true,
}
const Dropdown = /*#__PURE__*/ React.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop,
    show,
    className,
    align,
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    navbar: _4,
    autoClose,
    ...props
  } = useUncontrolled(pProps, {
    show: 'onToggle',
  })
  const onSelectCtx = useContext(SelectableContext)
  const isInputGroup = useContext(InputGroupContext)
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown')

  const isClosingPermitted = source => {
    // autoClose=false only permits close on button click
    if (autoClose === false) return source === 'click' // autoClose=inside doesn't permit close on rootClose

    if (autoClose === 'inside') return source !== 'rootClose' // autoClose=outside doesn't permit close on select

    if (autoClose === 'outside') return source !== 'select'
    return true
  }

  const handleToggle = useEventCallback((nextShow, event, source = event.type) => {
    if (event.currentTarget === document && (source !== 'keydown' || event.key === 'Escape')) source = 'rootClose'
    if (isClosingPermitted(source))
      onToggle == null
        ? void 0
        : onToggle(nextShow, event, {
            source,
          })
  })
  const handleSelect = useEventCallback((key, event) => {
    onSelectCtx == null ? void 0 : onSelectCtx(key, event)
    onSelect == null ? void 0 : onSelect(key, event)
    handleToggle(false, event, 'select')
  }) // TODO RTL: Flip directions based on RTL setting.

  let direction = drop

  if (drop === 'start') {
    direction = 'left'
  } else if (drop === 'end') {
    direction = 'right'
  }

  const contextValue = useMemo(
    () => ({
      align,
    }),
    [align]
  )
  return /*#__PURE__*/ _jsx(DropdownContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/ _jsx(SelectableContext.Provider, {
      value: handleSelect,
      children: /*#__PURE__*/ _jsx(BaseDropdown, {
        drop: direction,
        show: show,
        alignEnd: align === 'end',
        onToggle: handleToggle,
        focusFirstItemOnShow: focusFirstItemOnShow,
        itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
        children: isInputGroup
          ? props.children
          : /*#__PURE__*/ _jsx(Component, {
              ...props,
              ref: ref,
              className: classNames(
                className,
                show && 'show',
                (!drop || drop === 'down') && prefix,
                drop === 'up' && 'dropup',
                drop === 'end' && 'dropend',
                drop === 'start' && 'dropstart'
              ),
            }),
      }),
    }),
  })
})
Dropdown.displayName = 'Dropdown'
Dropdown.defaultProps = defaultProps
export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader,
})
