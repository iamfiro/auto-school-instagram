import Modal from "./common";
import { TbSchool } from "react-icons/tb";

function ModalSchoolSetting() {
    return (
        <Modal.Backdrop>
            <Modal>
                <Modal.Top icon={<TbSchool />} color="#2fcc88">학교 설정</Modal.Top>
                <h1>School Setting</h1>
                <p>Change school settings here</p>
            </Modal>
        </Modal.Backdrop>
    );
}

export default ModalSchoolSetting;