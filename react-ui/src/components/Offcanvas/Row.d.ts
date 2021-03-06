import * as React from 'react'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers'
declare type RowColWidth = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto'
declare type RowColumns =
  | RowColWidth
  | {
      cols?: RowColWidth
    }
export interface RowProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
  xs?: RowColumns
  sm?: RowColumns
  md?: RowColumns
  lg?: RowColumns
  xl?: RowColumns
  xxl?: RowColumns
}
declare const Row: BsPrefixRefForwardingComponent<'div', RowProps>
export default Row
