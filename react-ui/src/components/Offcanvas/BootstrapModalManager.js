import css from 'dom-helpers/css'
import qsa from 'dom-helpers/querySelectorAll'
import getScrollbarSize from 'dom-helpers/scrollbarSize'
import ModalManager from 'react-overlays/ModalManager'
const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
}

class BootstrapModalManager extends ModalManager {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop] // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual
    css(element, {
      [prop]: `${parseFloat(css(element, prop)) + adjust}px`,
    })
  }

  restore(prop, element) {
    const value = element.dataset[prop]

    if (value !== undefined) {
      delete element.dataset[prop]
      css(element, {
        [prop]: value,
      })
    }
  }

  setContainerStyle(containerState, container) {
    super.setContainerStyle(containerState, container)
    if (!containerState.overflowing) return
    const size = getScrollbarSize()
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore('paddingRight', el, size))
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore('marginRight', el, -size))
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore('marginRight', el, size))
  }

  removeContainerStyle(containerState, container) {
    super.removeContainerStyle(containerState, container)
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore('paddingRight', el))
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore('marginRight', el))
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore('marginRight', el))
  }
}

let sharedManager
export function getSharedManager() {
  if (!sharedManager) sharedManager = new BootstrapModalManager()
  return sharedManager
}
export default BootstrapModalManager
