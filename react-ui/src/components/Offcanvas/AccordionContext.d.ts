import * as React from 'react'
import { SelectCallback } from './helpers'
export interface AccordionContextValue {
  activeEventKey?: string
  onSelect?: SelectCallback
}
declare const context: React.Context<AccordionContextValue>
export default context
