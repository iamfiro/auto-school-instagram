import Modal from "./common";
import { TbSchool } from "react-icons/tb";
import style from "./modal.module.scss";
import { useState } from "react";

function ModalSchoolSetting() {
    const [disabled, setDisabled] = useState(true);
    return (
        <Modal.Backdrop>
            <Modal>
                <Modal.Top icon={<TbSchool />} color="#2fcc88">학교 설정</Modal.Top>
                <div className={style.selectedSchool}>
                    <h2>설정된 학교</h2>
                    <div>
                        <TbSchool size={18} />
                        <span>선린인터넷고등학교</span>
                    </div>
                </div>
                <select name="code" id="code">
                    <option value="1">서울특별시교육청</option>
                    <option value="2">부산광역시교육청</option>
                    <option value="3">선린인터넷고등학교</option>
                    <option value="4">선린인터넷고등학교</option>
                </select>
                <button className={style.submit} disabled={disabled}>눌러서 학교 수정하기</button>
            </Modal>
        </Modal.Backdrop>
    );
}

export default ModalSchoolSetting;