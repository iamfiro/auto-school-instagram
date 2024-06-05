import style from './style.module.scss';
import { IoEllipsisHorizontal } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";
import { MdEditNote } from "react-icons/md";

interface MealProps {
    name: string;
    code: number[];
}

function Meal({ name, code }: MealProps) {
    return (
        <article className={style.article}>
            <div className={style.MealTop}>
                <span className={style.mealTitle}>{name}</span>
                <div className={style.mealAction}>
                    <button className={style.mealActionButton}>
                        <LuTrash2 size={12} />
                    </button>
                    <button className={style.mealActionButton}>
                        <MdEditNote />
                    </button>
                </div>
            </div>
            <p className={style.allergy}>
                {code.length === 0 && "알레르기 정보가 없습니다"}
                {code.map((allergy, index) => {
                    return (
                        <span key={index} className={style.allergyItem}>
                            {allergy}.&nbsp;
                        </span>
                    );
                })}
            </p>
        </article>
    )
}

interface BoardProps {
    date: Date;
    children: React.ReactNode;
}

function Board({ date, children }: BoardProps) {
    const d = new Date(date);
    const dateString = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;

    return (
        <section className={style.container}>
            <div className={style.top}>
                <h1 className={style.title}>{dateString}</h1>
                <button className={style.button}>
                    <IoEllipsisHorizontal />
                </button>
            </div>
            <div className={style.list}>
                {children}
            </div>
        </section>
    );
}

Board.Meal = Meal;

export default Board;