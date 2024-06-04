import { ReactNode } from "react";
import style from "./style.module.scss";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";

function Box({ children }: { children: ReactNode }) {
    return (
        <div className={style.box}>
            {children}
        </div>
    )
}

function DatePicker() {
    return (
        <div className={style.dateContainer}>
            <button className={style.dateSelector}>
                <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <span className={style.dateTitle}>2024년 6월</span>
            <button className={style.dateSelector}>
                <MdOutlineKeyboardDoubleArrowRight />
            </button>
        </div>
    )
}

function ManualUploadButton() {
    return (
        <button className={style.manualUploadButton}>
            <FaCloudUploadAlt />
            <span>Instagram 수동으로 게시</span>
        </button>
    )
}

function CreateMealButton() {
    return (
        <>
        <button className={style.createMealButton}>
            <IoMdAdd />
            <span>날짜 추가하기</span>
        </button>
        </>
    )
}

function APIDocsButton() {
    return ( //TODO: Add link to API Docs
        <a className={style.apiDocsButton} target="_blank">
            <SiDocsdotrs />
            <span>API 문서 바로가기</span>
        </a>
    )
}

interface HeaderProps {
    children: ReactNode;
}

function Header({ children }: HeaderProps) {
    return (
        <header className={style.container}>
            {children}
        </header>
    );
}

Header.DatePicker = DatePicker;
Header.CreateMeal = CreateMealButton;
Header.ManualUpload = ManualUploadButton;
Header.APIDocs = APIDocsButton;
Header.Box = Box;

export default Header;