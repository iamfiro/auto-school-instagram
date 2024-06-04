import Image from "next/image";
import style from "@/styles/page.module.scss";
import { Header } from "@/components";

export default function Home() {
    return (
        <main className={style.container}>
            <Header>
                <Header.DatePicker />
                <Header.Box>
                    <Header.APIDocs />
                    <Header.ManualUpload />
                    <Header.CreateMeal />
                </Header.Box>
            </Header>
            asd
        </main>
    );
}
