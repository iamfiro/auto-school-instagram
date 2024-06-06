import Modal from "./common";
import { TbSchool } from "react-icons/tb";
import style from "./modal.module.scss";

function ModalSchoolEdit() {
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
                <button className={style.submit}>눌러서 학교 수정하기</button>
            </Modal>
        </Modal.Backdrop>
    );
}

export default ModalSchoolEdit;