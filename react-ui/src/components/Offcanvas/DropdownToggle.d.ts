import * as React from 'react'
import { ButtonProps, CommonButtonProps } from './Button'
import { BsPrefixRefForwardingComponent } from './helpers'
export interface DropdownToggleProps extends ButtonProps {
  split?: boolean
  childBsPrefix?: string
}
declare type DropdownToggleComponent = BsPrefixRefForwardingComponent<'button', DropdownToggleProps>
export declare type PropsFromToggle = Partial<
  Pick<React.ComponentPropsWithRef<DropdownToggleComponent>, CommonButtonProps>
>
declare const DropdownToggle: DropdownToggleComponent
export default DropdownToggle
