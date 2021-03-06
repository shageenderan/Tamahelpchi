import { AbstractNavItemProps } from './AbstractNavItem'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers'
export interface NavLinkProps extends BsPrefixProps, Omit<AbstractNavItemProps, 'as'> {}
declare const NavLink: BsPrefixRefForwardingComponent<'a', NavLinkProps>
export default NavLink
