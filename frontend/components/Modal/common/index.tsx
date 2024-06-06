'use client'

import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import { IoCloseSharp } from "react-icons/io5";

interface TopProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    color?: string;
}

function Top({ children, icon, color }: TopProps) {
    const router = useRouter();

    const handleClose = () => {
        router.push('/')
    }
    
    return (
        <div className={style.top}>
            <div className={style.left}>
                <div className={style.iconContainer} style={{ backgroundColor: `${color}35`, color }}>{icon}</div>
                <span>{children}</span>
            </div>
            <button className={style.closeButton} onClick={() => handleClose()}>
                <IoCloseSharp />
            </button>
        </div>
    )
}

function Backdrop({ onClick, children }: { onClick?: () => void, children: React.ReactNode }) {
    return (
        <div onClick={onClick} className={style.backdrop}>
            {children}
        </div>
    );
}

function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.modal}>
            {children}
        </div>
    );
}

Modal.Backdrop = Backdrop;
Modal.Top = Top;

export default Modal;