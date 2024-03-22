type ModalsStore = {
  [key: string]: ModalInterface
}

type ModalInterface = {
  name: string,
  open: () => void,
  close: () => void
}

class ModalManagement {
  private modals: ModalsStore
  private currentModal: string | null
  private queueModal: string | null


  constructor() {
    this.modals = {}
    this.currentModal = null
    this.queueModal = null
  }

  private openCurrentModal() {
    this.modals[this.currentModal]?.open()
  }

  private openQueuedModal() {
    this.closeCurrentModal()
    this.currentModal = this.queueModal
    this.queueModal = null

    this.openCurrentModal()
  }

  private closeCurrentModal() {
    this.modals[this.currentModal]?.close()
    this.currentModal = null
  }

  public cleanup() {
    this.modals = {}
  }

  public dismiss() {
    return () => {
      if (this.queueModal) {
        this.openQueuedModal()
      }
    }
  }

  public registerModal(modal: ModalInterface) {
    if (this.modals[modal.name]) {
      console.log('Modal with this name has already registered')
      return
    }

    this.modals[modal.name] = modal
    return this.dismiss()

  }

  public open(modalName: string) {
    if (!this.modals[modalName]) {
      console.log("Modal with such name hasn't been registered")
      return;
    }

    if (!this.currentModal) {
      this.currentModal = modalName
      this.openCurrentModal()
    } else {
      this.queueModal = modalName
      this.closeCurrentModal()
    }
  }

  public closeModal() {
    this.closeCurrentModal()
  }

}

export default new ModalManagement()
