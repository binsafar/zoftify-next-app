import {ChangeEvent} from 'react';
import {useState} from "react";
import Link from "next/link";

import Table from "./Table";
import searchIcon from "../assets/search_icon.png";
import styles from "../styles/content/Content.module.css";

const Content = () => {
    const [btn, setBtn] = useState<number>(1);
    const [search, setSearch] = useState<string>('');

    const searchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    };

    return (
        <div className={styles.content_container}>
            {/*main bar*/}
            <div className={styles.top_side}>
                <div className={styles.top_t}>
                    <input
                        value={search}
                        onChange={searchInput}
                        placeholder={"Search"}
                        type="text"/>
                    <img className={styles.search_icon}
                         src={searchIcon.src} alt="search icon"/>
                    <Link className={styles.top_t_link}
                          href={"new-card"}>Create Post</Link>
                </div>
                <div className={styles.top_b}>
                    <button onClick={() => setBtn(1)}
                            className={styles.button}>
                        All statuses
                    </button>
                    <button onClick={() => setBtn(2)}
                            className={styles.button}>
                        Draft
                    </button>
                    <button onClick={() => setBtn(3)}
                            className={styles.button}>
                        Published
                    </button>
                </div>
            </div>
            {/*rendering table*/}
            <Table show={btn} search={search}/>
        </div>
    )
}
export default Content;