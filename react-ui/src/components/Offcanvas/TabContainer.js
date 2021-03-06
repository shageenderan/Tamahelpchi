import * as React from 'react'
import { useMemo } from 'react'
import { useUncontrolled } from 'uncontrollable'
import TabContext from './TabContext'
import SelectableContext from './SelectableContext'
import { jsx as _jsx } from 'react/jsx-runtime'

const TabContainer = props => {
  const {
    id,
    generateChildId: generateCustomChildId,
    onSelect,
    activeKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  })
  const generateChildId = useMemo(
    () => generateCustomChildId || ((key, type) => (id ? `${id}-${type}-${key}` : null)),
    [id, generateCustomChildId]
  )
  const tabContext = useMemo(
    () => ({
      onSelect,
      activeKey,
      transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: key => generateChildId(key, 'tabpane'),
      getControllerId: key => generateChildId(key, 'tab'),
    }),
    [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]
  )
  return /*#__PURE__*/ _jsx(TabContext.Provider, {
    value: tabContext,
    children: /*#__PURE__*/ _jsx(SelectableContext.Provider, {
      value: onSelect || null,
      children: children,
    }),
  })
}

export default TabContainer
