import {useEffect, useRef} from "react";
import modalManager from './ModalManagerV2'
 type VoidFn = () => void

export const useModalManager = (modalName: string, openModalFn: VoidFn, closeModalFn: VoidFn) => {
  const dismiss1 = useRef<VoidFn>()

  useEffect(() => {
    dismiss1.current = modalManager.registerModal({open: openModalFn, close: closeModalFn, name: modalName})

  }, [])

  const open = () => {
    modalManager.open(modalName)
  }

  const close = () => {
    modalManager.closeModal()
  }

  return [open, close, dismiss1.current]
}
