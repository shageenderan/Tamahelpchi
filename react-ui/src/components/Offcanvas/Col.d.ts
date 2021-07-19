import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers'
declare type NumberAttr = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
declare type ColOrderNumber = number | '1' | '2' | '3' | '4' | '5'
declare type ColOrder = ColOrderNumber | 'first' | 'last'
declare type ColSize = boolean | 'auto' | NumberAttr
declare type ColSpec =
  | ColSize
  | {
      span?: ColSize
      offset?: NumberAttr
      order?: ColOrder
    }
export interface ColProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
  xs?: ColSpec
  sm?: ColSpec
  md?: ColSpec
  lg?: ColSpec
  xl?: ColSpec
  xxl?: ColSpec
}
declare const Col: BsPrefixRefForwardingComponent<'div', ColProps>
export default Col
