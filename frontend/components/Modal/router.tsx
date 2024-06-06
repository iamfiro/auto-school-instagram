'use client'

import { useSearchParams } from "next/navigation";
import ModalSchoolSetting from "./SchoolModal";
import ModalSchoolEdit from "./SchoolEditModal";

function ModalRouter() {
    const param = useSearchParams();
    const query = param.get("m");

    switch (query) {
        case "s":
            return <ModalSchoolSetting />;
        case "se":
            return <ModalSchoolEdit />;
        default:
            return null;
    }
}

export default ModalRouter;