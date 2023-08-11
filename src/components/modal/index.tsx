import React, { useRef, useEffect } from 'react'

type DialogProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void
}

function Dialog({ children, isOpen, onClose }: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            if (isOpen) {
                dialog.showModal()
            } else {
                dialog.close()
            }
        }
    }, [isOpen])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            onClose()
        }
    };

    return (
        <dialog ref={dialogRef} onKeyDown={handleKeyDown}>
            {children}
        </dialog>
    )
}

export default Dialog;