import {ChangeEvent} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

import Table from "./Table";
import searchIcon from "../assets/search_icon.png";
import styles from "../styles/content/Content.module.css";
import {useState} from "react";

const Content = () => {
    const router = useRouter()
    const isPostPage = router.pathname;

    const [btn, setBtn] = useState<number>(1);

    const render = (type: number) => {
        setBtn(type)
        if (type === btn) console.log(btn);
    }
    return (
        <div className={styles.content_container}>
            {/*main bar*/}
            <div className={styles.top_side}>
                <div className={styles.top_t}>
                    <input
                        placeholder={"Search"}
                        type="text"/>
                    <img className={styles.search_icon}
                         src={searchIcon.src} alt="search icon"/>
                    <Link className={styles.top_t_link}
                          href={"new-card"}>Create Post</Link>
                </div>
                <div className={styles.top_b}>
                    <button onClick={() => render(1)}
                            className={styles.button}>
                        <div>All statuses<span>20</span></div>
                    </button>
                    <button onClick={() => render(2)}
                            className={styles.button}>
                        <div>Draft<span>20</span></div>
                    </button>
                    <button onClick={() => render(3)}
                            className={styles.button}>
                        <div>Published<span>20</span></div>
                    </button>
                </div>
            </div>
            {/*rendering table*/}
            <Table/>
        </div>
    )
}
export default Content;