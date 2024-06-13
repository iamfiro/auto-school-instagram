import style from "@/styles/page.module.scss";
import { Header, Board } from "@/components";

export default function Home() {
    return (
        <main className={style.container}>
            <Header>
                <Header.Box>
                    <Header.DatePicker />
                </Header.Box>
                <Header.Box>
                    <Header.APIDocs />
                    <Header.ManualUpload />
                    <Header.CreateMeal />
                </Header.Box>
            </Header>
            <section className={style.boardContainer}>
                <Board date={new Date()}>
                    <Board.Meal name="백미밥" code={[]} />
                    <Board.Meal name="메밀소바" code={[3,5,6,7,13]} />
                    <Board.Meal name="등심돈까스" code={[1,2,5,6,10,12,16]} />
                    <Board.Meal name="샐러드" code={[13]} />
                    <Board.Meal name="배추김치" code={[9]} />
                    <Board.Meal name="메밀소바" code={[3,5,6,7,13]} />
                    <Board.Meal name="초코프리첼" code={[2,5,6]} />
                    <Board.Meal name="메밀소바" code={[13]} />
                </Board>
                <Board date={new Date()}>
                    <Board.Meal name="백미밥" code={[]} />
                    <Board.Meal name="메밀소바" code={[3,5,6,7,13]} />
                    <Board.Meal name="등심돈까스" code={[1,2,5,6,10,12,16]} />
                    <Board.Meal name="샐러드" code={[13]} />
                    <Board.Meal name="배추김치" code={[9]} />
                    <Board.Meal name="메밀소바" code={[3,5,6,7,13]} />
                    <Board.Meal name="초코프리첼" code={[2,5,6]} />
                    <Board.Meal name="메밀소바" code={[13]} />
                </Board>
            </section>
        </main>
    );
}
