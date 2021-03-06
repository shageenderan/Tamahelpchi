import * as React from 'react'
import { ButtonType } from './Button'
import { DropdownProps } from './Dropdown'
import { PropsFromToggle } from './DropdownToggle'
import { BsPrefixProps } from './helpers'
export interface SplitButtonProps extends Omit<DropdownProps, 'title' | 'id'>, PropsFromToggle, BsPrefixProps {
  id: string | number
  menuRole?: string
  renderMenuOnMount?: boolean
  rootCloseEvent?: 'click' | 'mousedown'
  target?: string
  title: React.ReactNode
  toggleLabel?: string
  type?: ButtonType
}
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */
declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLElement>>
export default SplitButton
