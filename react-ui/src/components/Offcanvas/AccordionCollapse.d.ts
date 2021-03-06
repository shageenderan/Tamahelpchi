import { CollapseProps } from './Collapse'
import { BsPrefixRefForwardingComponent, BsPrefixOnlyProps } from './helpers'
export interface AccordionCollapseProps extends BsPrefixOnlyProps, CollapseProps {
  eventKey: string
}
declare const AccordionCollapse: BsPrefixRefForwardingComponent<'div', AccordionCollapseProps>
export default AccordionCollapse
