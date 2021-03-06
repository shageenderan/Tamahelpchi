import * as React from 'react'
import requiredForA11y from 'prop-types-extra/lib/isRequiredForA11y'
import { useUncontrolled } from 'uncontrollable'
import Nav from './Nav'
import NavLink from './NavLink'
import NavItem from './NavItem'
import TabContainer from './TabContainer'
import TabContent from './TabContent'
import TabPane from './TabPane'
import { forEach, map } from './ElementChildren'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
const defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false,
}

function getDefaultActiveKey(children) {
  let defaultActiveKey
  forEach(children, child => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey
    }
  })
  return defaultActiveKey
}

function renderTab(child) {
  const { title, eventKey, disabled, tabClassName, id } = child.props

  if (title == null) {
    return null
  }

  return /*#__PURE__*/ _jsx(NavItem, {
    as: 'li',
    role: 'presentation',
    children: /*#__PURE__*/ _jsx(NavLink, {
      as: 'button',
      type: 'button',
      eventKey: eventKey,
      disabled: disabled,
      id: id,
      className: tabClassName,
      children: title,
    }),
  })
}

const Tabs = props => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  })
  return /*#__PURE__*/ _jsxs(TabContainer, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    children: [
      /*#__PURE__*/ _jsx(Nav, { ...controlledProps, role: 'tablist', as: 'ul', children: map(children, renderTab) }),
      /*#__PURE__*/ _jsx(TabContent, {
        children: map(children, child => {
          const childProps = { ...child.props }
          delete childProps.title
          delete childProps.disabled
          delete childProps.tabClassName
          return /*#__PURE__*/ _jsx(TabPane, { ...childProps })
        }),
      }),
    ],
  })
}

Tabs.defaultProps = defaultProps
Tabs.displayName = 'Tabs'
export default Tabs
