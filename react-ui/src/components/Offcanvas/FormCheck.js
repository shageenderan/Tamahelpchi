import classNames from 'classnames'
import * as React from 'react'
import { useContext, useMemo } from 'react'
import Feedback from './Feedback'
import FormCheckInput from './FormCheckInput'
import FormCheckLabel from './FormCheckLabel'
import FormContext from './FormContext'
import { useBootstrapPrefix } from './ThemeProvider'
import { jsx as _jsx } from 'react/jsx-runtime'
import { Fragment as _Fragment } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
const FormCheck = /*#__PURE__*/ React.forwardRef(
  (
    {
      id,
      bsPrefix,
      bsSwitchPrefix,
      inline = false,
      disabled = false,
      isValid = false,
      isInvalid = false,
      feedbackTooltip = false,
      feedback,
      className,
      style,
      title = '',
      type = 'checkbox',
      label,
      children,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as = 'input',
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check')
    bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch')
    const { controlId } = useContext(FormContext)
    const innerFormContext = useMemo(
      () => ({
        controlId: id || controlId,
      }),
      [controlId, id]
    )
    const hasLabel = label != null && label !== false && !children

    const input = /*#__PURE__*/ _jsx(FormCheckInput, {
      ...props,
      type: type === 'switch' ? 'checkbox' : type,
      ref: ref,
      isValid: isValid,
      isInvalid: isInvalid,
      disabled: disabled,
      as: as,
    })

    return /*#__PURE__*/ _jsx(FormContext.Provider, {
      value: innerFormContext,
      children: /*#__PURE__*/ _jsx('div', {
        style: style,
        className: classNames(
          className,
          label && bsPrefix,
          inline && `${bsPrefix}-inline`,
          type === 'switch' && bsSwitchPrefix
        ),
        children:
          children ||
          /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
              input,
              hasLabel &&
                /*#__PURE__*/ _jsx(FormCheckLabel, {
                  title: title,
                  children: label,
                }),
              (isValid || isInvalid) &&
                /*#__PURE__*/ _jsx(Feedback, {
                  type: isValid ? 'valid' : 'invalid',
                  tooltip: feedbackTooltip,
                  children: feedback,
                }),
            ],
          }),
      }),
    })
  }
)
FormCheck.displayName = 'FormCheck'
export default Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel,
})