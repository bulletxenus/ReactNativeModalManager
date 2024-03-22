type ModalInterface = {
  open: () => void,
  close: () => void
}

class ModalManagement {
  private currentModal: ModalInterface | null
  private queueModal: ModalInterface | null


  constructor() {
    this.currentModal = null
    this.queueModal = null
  }

  public dismiss() {}

  public open (modal: ModalInterface) {
    if (!this.currentModal) {
      this.currentModal = modal
      this.openCurrentModal()
    } else {
      this.queueModal = modal
      this.openQueuedModal()
    }
  }

  private openCurrentModal() {
    this.currentModal?.open()
  }

  private openQueuedModal() {
    this.closeCurrentModal()
    this.currentModal = this.queueModal
    this.queueModal = null

    this.openCurrentModal()
  }

  private closeCurrentModal() {
    this.currentModal?.close()
    this.currentModal = null
  }

  public closeModal() {
    this.closeCurrentModal()
  }

}

export default new ModalManagement()
