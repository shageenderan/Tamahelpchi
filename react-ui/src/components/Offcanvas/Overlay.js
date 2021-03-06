import * as React from 'react'
import { useRef } from 'react'
import classNames from 'classnames'
import BaseOverlay from 'react-overlays/Overlay'
import safeFindDOMNode from 'react-overlays/safeFindDOMNode'
import useMergedRefs from '@restart/hooks/useMergedRefs'
import useOverlayOffset from './useOverlayOffset'
import Fade from './Fade'
import { jsx as _jsx } from 'react/jsx-runtime'
const defaultProps = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: 'top',
}

function wrapRefs(props, arrowProps) {
  const { ref } = props
  const { ref: aRef } = arrowProps

  props.ref = ref.__wrapped || (ref.__wrapped = r => ref(safeFindDOMNode(r)))

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = r => aRef(safeFindDOMNode(r)))
}

const Overlay = /*#__PURE__*/ React.forwardRef(
  ({ children: overlay, transition, popperConfig = {}, ...outerProps }, outerRef) => {
    const popperRef = useRef({})
    const [ref, modifiers] = useOverlayOffset()
    const mergedRef = useMergedRefs(outerRef, ref)
    const actualTransition = transition === true ? Fade : transition || undefined
    return /*#__PURE__*/ _jsx(BaseOverlay, {
      ...outerProps,
      ref: mergedRef,
      popperConfig: { ...popperConfig, modifiers: modifiers.concat(popperConfig.modifiers || []) },
      transition: actualTransition,
      children: ({ props: overlayProps, arrowProps, show, update, forceUpdate: _, placement, state, ...props }) => {
        var _state$modifiersData$

        wrapRefs(overlayProps, arrowProps)
        const popper = Object.assign(popperRef.current, {
          state,
          scheduleUpdate: update,
          placement,
          outOfBoundaries:
            (state == null
              ? void 0
              : (_state$modifiersData$ = state.modifiersData.hide) == null
              ? void 0
              : _state$modifiersData$.isReferenceHidden) || false,
        })
        if (typeof overlay === 'function')
          return overlay({
            ...props,
            ...overlayProps,
            placement,
            show,
            ...(!transition &&
              show && {
                className: 'show',
              }),
            popper,
            arrowProps,
          })
        return /*#__PURE__*/ React.cloneElement(overlay, {
          ...props,
          ...overlayProps,
          placement,
          arrowProps,
          popper,
          className: classNames(overlay.props.className, !transition && show && 'show'),
          style: { ...overlay.props.style, ...overlayProps.style },
        })
      },
    })
  }
)
Overlay.displayName = 'Overlay'
Overlay.defaultProps = defaultProps
export default Overlay
