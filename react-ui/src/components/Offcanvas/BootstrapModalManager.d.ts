import ModalManager from 'react-overlays/ModalManager'
declare class BootstrapModalManager extends ModalManager {
  private adjustAndStore
  private restore
  setContainerStyle(containerState: any, container: any): void
  removeContainerStyle(containerState: any, container: any): void
}
export declare function getSharedManager(): BootstrapModalManager
export default BootstrapModalManager
