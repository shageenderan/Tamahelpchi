import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers'
import { ButtonVariant } from './types'
export declare type ButtonType = 'button' | 'reset' | 'submit' | string
export interface ButtonProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {
  active?: boolean
  variant?: ButtonVariant
  size?: 'sm' | 'lg'
  type?: ButtonType
  href?: string
  disabled?: boolean
  target?: any
}
export declare type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled'
declare const Button: BsPrefixRefForwardingComponent<'button', ButtonProps>
export default Button
