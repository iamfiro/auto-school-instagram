import Modal from "./common";
import { TbSchool } from "react-icons/tb";
import style from "./modal.module.scss";
import { useState } from "react";
import { koreaEducationOffice } from "@/constant/koreaEducationOffice";

function ModalSchoolSetting() {
    const [disabled, setDisabled] = useState(true);
    return (
        <Modal.Backdrop>
            <Modal>
                <Modal.Top icon={<TbSchool />} color="#2fcc88">학교 설정</Modal.Top>
                <div className={style.form} id="">
                    <label htmlFor="educationOffice" className={style.label}>교육청</label>
                    <select name="educationOffice" id="educationOffice" className={style.option}>
                        {
                            koreaEducationOffice.map((office, index) => {
                                return <option key={index} value={office.value}>{office.label}</option>
                            })
                        }
                    </select>
                    <label htmlFor="schoolName" className={style.label}>학교 교육청</label>
                    <input id="schoolName" placeholder="학교 이름을 입력해주세요" className={style.input}></input>
                </div>
                <button className={style.submit} disabled={disabled}>눌러서 학교 수정하기</button>
            </Modal>
        </Modal.Backdrop>
    );
}

export default ModalSchoolSetting;