//css, icons
import styles from './modal.module.css';
import { FaWindowClose } from "react-icons/fa";
//interfaces
import { ReactElement } from "react"


export function toggleModal(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    const isOpen = modal?.open;

    const close = () => {
        modal.close();
    }

    const open = () => {
        modal.showModal();
    }

    if (modal) {
        isOpen ? close() : open();
    }
}

type ModalProps = { children: ReactElement, label: string };

export const Modal = (
    { children, label }: ModalProps
) => {
    return (
        <dialog className={styles.container} id={label} aria-labelledby="dialog_title" aria-describedby="dialog_description">

            <FaWindowClose className={styles.closeBtn} onClick={() => toggleModal(label)} />

            <div className={styles.contentWrapper}>
                {children}
            </div>
        </dialog>
    )
}
