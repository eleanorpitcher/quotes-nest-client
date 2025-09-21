import { useCallback, useRef, useState } from 'react'

function useConfirmationModal() {

    const [isOpen, setIsOpen] = useState(false);
    const confirmCallback = useRef<(() => void) | null>(null);

    const openModal = useCallback((onConfirm: () => void) => {
        confirmCallback.current = onConfirm;
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        confirmCallback.current = null;
    }, []);

    const confirm = useCallback(() => {
        if (confirmCallback.current) {
            confirmCallback.current();
        }
        closeModal();
    }, [closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    confirm
  }
}

export default useConfirmationModal