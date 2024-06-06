'use client'

import { useSearchParams } from "next/navigation";
import ModalSchoolSetting from "./SchoolModal";

function ModalRouter() {
    const param = useSearchParams();
    const query = param.get("m");

    switch (query) {
        case "s":
            return <ModalSchoolSetting />;
            break;
        default:
            return null;
    }
}

export default ModalRouter;