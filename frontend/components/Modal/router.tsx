'use client'

import { useSearchParams } from "next/navigation";
import ModalSchoolSetting from "./SchoolModal";
import ModalSchoolEdit from "./SchoolEditModal";
import ModalAddDate from "./AddDate";

function ModalRouter() {
    const param = useSearchParams();
    const query = param.get("m");

    switch (query) {
        case "s":
            return <ModalSchoolSetting />;
        case "se":
            return <ModalSchoolEdit />;
        case "ad":
            return <ModalAddDate />;
        default:
            return null;
    }
}

export default ModalRouter;