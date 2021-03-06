import * as React from 'react'
import { OverlayProps as BaseOverlayProps } from 'react-overlays/Overlay'
import { TransitionType } from './helpers'
import { ArrowProps, Placement, RootCloseEvent } from './types'
export interface OverlayInjectedProps {
  ref: React.RefCallback<HTMLElement>
  style: React.CSSProperties
  'aria-labelledby'?: string
  arrowProps: ArrowProps
  show: boolean
  placement: Placement
  popper: {
    state: any
    outOfBoundaries: boolean
    placement: Placement
    scheduleUpdate: () => void
  }
  [prop: string]: any
}
export declare type OverlayChildren =
  | React.ReactElement<OverlayInjectedProps>
  | ((injected: OverlayInjectedProps) => React.ReactNode)
export interface OverlayProps extends Omit<BaseOverlayProps, 'children' | 'transition' | 'rootCloseEvent'> {
  children: OverlayChildren
  transition?: TransitionType
  placement?: Placement
  rootCloseEvent?: RootCloseEvent
}
declare const Overlay: React.ForwardRefExoticComponent<OverlayProps & React.RefAttributes<HTMLElement>>
export default Overlay
