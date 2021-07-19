import * as React from 'react'
import { BsPrefixRefForwardingComponent, AsProp } from './helpers'
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>, AsProp {
  validated?: boolean
}
declare const _default: BsPrefixRefForwardingComponent<'form', FormProps> & {
  Group: BsPrefixRefForwardingComponent<'div', import('./FormGroup').FormGroupProps>
  Control: BsPrefixRefForwardingComponent<'input', import('./FormControl').FormControlProps> & {
    Feedback: BsPrefixRefForwardingComponent<'div', import('./Feedback').FeedbackProps>
  }
  Floating: BsPrefixRefForwardingComponent<'div', unknown>
  Check: BsPrefixRefForwardingComponent<'input', import('./FormCheck').FormCheckProps> & {
    Input: BsPrefixRefForwardingComponent<'input', import('./FormCheckInput').FormCheckInputProps>
    Label: React.ForwardRefExoticComponent<
      import('./FormCheckLabel').FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>
    >
  }
  Switch: BsPrefixRefForwardingComponent<
    BsPrefixRefForwardingComponent<'input', import('./FormCheck').FormCheckProps> & {
      Input: BsPrefixRefForwardingComponent<'input', import('./FormCheckInput').FormCheckInputProps>
      Label: React.ForwardRefExoticComponent<
        import('./FormCheckLabel').FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>
      >
    },
    {
      className?: string | undefined
      autoFocus?: boolean | undefined
      disabled?: boolean | undefined
      form?: string | undefined
      formAction?: string | undefined
      formEncType?: string | undefined
      formMethod?: string | undefined
      formNoValidate?: boolean | undefined
      formTarget?: string | undefined
      name?: string | undefined
      value?: string | number | readonly string[] | undefined
      defaultChecked?: boolean | undefined
      defaultValue?: string | number | readonly string[] | undefined
      suppressContentEditableWarning?: boolean | undefined
      suppressHydrationWarning?: boolean | undefined
      accessKey?: string | undefined
      contentEditable?: (boolean | 'true' | 'false') | 'inherit' | undefined
      contextMenu?: string | undefined
      dir?: string | undefined
      draggable?: (boolean | 'true' | 'false') | undefined
      hidden?: boolean | undefined
      id?: string | undefined
      lang?: string | undefined
      placeholder?: string | undefined
      slot?: string | undefined
      spellCheck?: (boolean | 'true' | 'false') | undefined
      style?: React.CSSProperties | undefined
      tabIndex?: number | undefined
      title?: string | undefined
      translate?: 'yes' | 'no' | undefined
      radioGroup?: string | undefined
      role?: React.AriaRole | undefined
      about?: string | undefined
      datatype?: string | undefined
      inlist?: any
      prefix?: string | undefined
      property?: string | undefined
      resource?: string | undefined
      typeof?: string | undefined
      vocab?: string | undefined
      autoCapitalize?: string | undefined
      autoCorrect?: string | undefined
      autoSave?: string | undefined
      color?: string | undefined
      itemProp?: string | undefined
      itemScope?: boolean | undefined
      itemType?: string | undefined
      itemID?: string | undefined
      itemRef?: string | undefined
      results?: number | undefined
      security?: string | undefined
      unselectable?: 'on' | 'off' | undefined
      inputMode?: 'text' | 'none' | 'search' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | undefined
      is?: string | undefined
      'aria-activedescendant'?: string | undefined
      'aria-atomic'?: boolean | 'true' | 'false' | undefined
      'aria-autocomplete'?: 'list' | 'none' | 'inline' | 'both' | undefined
      'aria-busy'?: boolean | 'true' | 'false' | undefined
      'aria-checked'?: boolean | 'true' | 'false' | 'mixed' | undefined
      'aria-colcount'?: number | undefined
      'aria-colindex'?: number | undefined
      'aria-colspan'?: number | undefined
      'aria-controls'?: string | undefined
      'aria-current'?: boolean | 'time' | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | undefined
      'aria-describedby'?: string | undefined
      'aria-details'?: string | undefined
      'aria-disabled'?: boolean | 'true' | 'false' | undefined
      'aria-dropeffect'?: 'link' | 'none' | 'copy' | 'execute' | 'move' | 'popup' | undefined
      'aria-errormessage'?: string | undefined
      'aria-expanded'?: boolean | 'true' | 'false' | undefined
      'aria-flowto'?: string | undefined
      'aria-grabbed'?: boolean | 'true' | 'false' | undefined
      'aria-haspopup'?: boolean | 'dialog' | 'menu' | 'true' | 'false' | 'grid' | 'listbox' | 'tree' | undefined
      'aria-hidden'?: boolean | 'true' | 'false' | undefined
      'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling' | undefined
      'aria-keyshortcuts'?: string | undefined
      'aria-label'?: string | undefined
      'aria-labelledby'?: string | undefined
      'aria-level'?: number | undefined
      'aria-live'?: 'off' | 'assertive' | 'polite' | undefined
      'aria-modal'?: boolean | 'true' | 'false' | undefined
      'aria-multiline'?: boolean | 'true' | 'false' | undefined
      'aria-multiselectable'?: boolean | 'true' | 'false' | undefined
      'aria-orientation'?: 'horizontal' | 'vertical' | undefined
      'aria-owns'?: string | undefined
      'aria-placeholder'?: string | undefined
      'aria-posinset'?: number | undefined
      'aria-pressed'?: boolean | 'true' | 'false' | 'mixed' | undefined
      'aria-readonly'?: boolean | 'true' | 'false' | undefined
      'aria-relevant'?:
        | 'text'
        | 'additions'
        | 'additions removals'
        | 'additions text'
        | 'all'
        | 'removals'
        | 'removals additions'
        | 'removals text'
        | 'text additions'
        | 'text removals'
        | undefined
      'aria-required'?: boolean | 'true' | 'false' | undefined
      'aria-roledescription'?: string | undefined
      'aria-rowcount'?: number | undefined
      'aria-rowindex'?: number | undefined
      'aria-rowspan'?: number | undefined
      'aria-selected'?: boolean | 'true' | 'false' | undefined
      'aria-setsize'?: number | undefined
      'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined
      'aria-valuemax'?: number | undefined
      'aria-valuemin'?: number | undefined
      'aria-valuenow'?: number | undefined
      'aria-valuetext'?: string | undefined
      children?: React.ReactNode
      dangerouslySetInnerHTML?:
        | {
            __html: string
          }
        | undefined
      onCopy?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onCopyCapture?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onCut?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onCutCapture?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onPasteCapture?: React.ClipboardEventHandler<HTMLInputElement> | undefined
      onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onCompositionEndCapture?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onCompositionStart?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onCompositionStartCapture?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onCompositionUpdate?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLInputElement> | undefined
      onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
      onFocusCapture?: React.FocusEventHandler<HTMLInputElement> | undefined
      onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
      onBlurCapture?: React.FocusEventHandler<HTMLInputElement> | undefined
      onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
      onChangeCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onBeforeInput?: React.FormEventHandler<HTMLInputElement> | undefined
      onBeforeInputCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onInput?: React.FormEventHandler<HTMLInputElement> | undefined
      onInputCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onReset?: React.FormEventHandler<HTMLInputElement> | undefined
      onResetCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onSubmit?: React.FormEventHandler<HTMLInputElement> | undefined
      onSubmitCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onInvalid?: React.FormEventHandler<HTMLInputElement> | undefined
      onInvalidCapture?: React.FormEventHandler<HTMLInputElement> | undefined
      onLoad?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onError?: React.ReactEventHandler<HTMLInputElement> | undefined
      onErrorCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onKeyDownCapture?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onKeyPressCapture?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onKeyUpCapture?: React.KeyboardEventHandler<HTMLInputElement> | undefined
      onAbort?: React.ReactEventHandler<HTMLInputElement> | undefined
      onAbortCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onCanPlay?: React.ReactEventHandler<HTMLInputElement> | undefined
      onCanPlayCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onCanPlayThrough?: React.ReactEventHandler<HTMLInputElement> | undefined
      onCanPlayThroughCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onDurationChange?: React.ReactEventHandler<HTMLInputElement> | undefined
      onDurationChangeCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEmptied?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEmptiedCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEncrypted?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEncryptedCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEnded?: React.ReactEventHandler<HTMLInputElement> | undefined
      onEndedCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadedData?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadedDataCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadedMetadata?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadedMetadataCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadStart?: React.ReactEventHandler<HTMLInputElement> | undefined
      onLoadStartCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPause?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPauseCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPlay?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPlayCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPlaying?: React.ReactEventHandler<HTMLInputElement> | undefined
      onPlayingCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onProgress?: React.ReactEventHandler<HTMLInputElement> | undefined
      onProgressCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onRateChange?: React.ReactEventHandler<HTMLInputElement> | undefined
      onRateChangeCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSeeked?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSeekedCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSeeking?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSeekingCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onStalled?: React.ReactEventHandler<HTMLInputElement> | undefined
      onStalledCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSuspend?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSuspendCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onTimeUpdate?: React.ReactEventHandler<HTMLInputElement> | undefined
      onTimeUpdateCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onVolumeChange?: React.ReactEventHandler<HTMLInputElement> | undefined
      onVolumeChangeCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onWaiting?: React.ReactEventHandler<HTMLInputElement> | undefined
      onWaitingCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onAuxClick?: React.MouseEventHandler<HTMLInputElement> | undefined
      onAuxClickCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
      onClickCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onContextMenu?: React.MouseEventHandler<HTMLInputElement> | undefined
      onContextMenuCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onDoubleClick?: React.MouseEventHandler<HTMLInputElement> | undefined
      onDoubleClickCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onDrag?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragEnd?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragEndCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragEnter?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragEnterCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragExit?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragExitCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragLeave?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragLeaveCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragOver?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragOverCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragStart?: React.DragEventHandler<HTMLInputElement> | undefined
      onDragStartCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onDrop?: React.DragEventHandler<HTMLInputElement> | undefined
      onDropCapture?: React.DragEventHandler<HTMLInputElement> | undefined
      onMouseDown?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseDownCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseEnter?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseLeave?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseMove?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseMoveCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseOut?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseOutCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseOver?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseOverCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseUp?: React.MouseEventHandler<HTMLInputElement> | undefined
      onMouseUpCapture?: React.MouseEventHandler<HTMLInputElement> | undefined
      onSelect?: React.ReactEventHandler<HTMLInputElement> | undefined
      onSelectCapture?: React.ReactEventHandler<HTMLInputElement> | undefined
      onTouchCancel?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchCancelCapture?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchEnd?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchEndCapture?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchMove?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchMoveCapture?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchStart?: React.TouchEventHandler<HTMLInputElement> | undefined
      onTouchStartCapture?: React.TouchEventHandler<HTMLInputElement> | undefined
      onPointerDown?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerDownCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerMove?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerMoveCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerUp?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerUpCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerCancel?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerCancelCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerEnter?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerEnterCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerLeave?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerLeaveCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerOver?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerOverCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerOut?: React.PointerEventHandler<HTMLInputElement> | undefined
      onPointerOutCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onGotPointerCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onLostPointerCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLInputElement> | undefined
      onScroll?: React.UIEventHandler<HTMLInputElement> | undefined
      onScrollCapture?: React.UIEventHandler<HTMLInputElement> | undefined
      onWheel?: React.WheelEventHandler<HTMLInputElement> | undefined
      onWheelCapture?: React.WheelEventHandler<HTMLInputElement> | undefined
      onAnimationStart?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onAnimationStartCapture?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onAnimationEnd?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onAnimationEndCapture?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onAnimationIteration?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onAnimationIterationCapture?: React.AnimationEventHandler<HTMLInputElement> | undefined
      onTransitionEnd?: React.TransitionEventHandler<HTMLInputElement> | undefined
      onTransitionEndCapture?: React.TransitionEventHandler<HTMLInputElement> | undefined
      label?: React.ReactNode
      pattern?: string | undefined
      list?: string | undefined
      inline?: boolean | undefined
      step?: string | number | undefined
      bsPrefix?: string | undefined
      as?: React.ElementType<any> | undefined
      height?: string | number | undefined
      max?: string | number | undefined
      min?: string | number | undefined
      width?: string | number | undefined
      crossOrigin?: string | undefined
      autoComplete?: string | undefined
      alt?: string | undefined
      src?: string | undefined
      accept?: string | undefined
      capture?: string | boolean | undefined
      checked?: boolean | undefined
      enterKeyHint?: 'search' | 'enter' | 'done' | 'go' | 'next' | 'previous' | 'send' | undefined
      maxLength?: number | undefined
      minLength?: number | undefined
      multiple?: boolean | undefined
      readOnly?: boolean | undefined
      required?: boolean | undefined
      size?: number | undefined
      feedback?: React.ReactNode
      isValid?: boolean | undefined
      isInvalid?: boolean | undefined
      bsSwitchPrefix?: string | undefined
      feedbackTooltip?: boolean | undefined
    }
  > & {
    Input: BsPrefixRefForwardingComponent<'input', import('./FormCheckInput').FormCheckInputProps>
    Label: React.ForwardRefExoticComponent<
      import('./FormCheckLabel').FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>
    >
  }
  Label: BsPrefixRefForwardingComponent<'label', import('./FormLabel').FormLabelProps>
  Text: BsPrefixRefForwardingComponent<'small', import('./FormText').FormTextProps>
  Range: React.ForwardRefExoticComponent<import('./FormRange').FormRangeProps & React.RefAttributes<HTMLInputElement>>
  Select: BsPrefixRefForwardingComponent<'select', import('./FormSelect').FormSelectProps>
  FloatingLabel: BsPrefixRefForwardingComponent<'div', import('./FloatingLabel').FloatingLabelProps>
}
export default _default
