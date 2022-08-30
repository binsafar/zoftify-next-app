import Link from "next/link";
import {useRouter} from "next/router";

import searchIcon from "../assets/search_icon.png";
import styles from "../styles/content/Content.module.css";

const Content = () => {
    const router = useRouter()
    const isPostPage = router.pathname;
    return (
        <div>
            {isPostPage === "/" ?
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
                            <button className={styles.button}>
                                <div>All statuses<span>20</span></div>
                            </button>
                            <button className={styles.button}>
                                <div>Draft<span>20</span></div>
                            </button>
                            <button className={styles.button}>
                                <div>Published<span>20</span></div>
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.content_container}>
                    <div className={styles.n_wrapper}>
                        <div className={styles.n_margin}></div>
                        <p className={styles.new_title}>Post information</p>
                        <div className={styles.new_wrapper}>
                            <input className={styles.new_input}
                                   type="text" placeholder={"Title"}/>
                            <select className={styles.select}
                                    id="status">
                                <option value="status" disabled selected hidden>Status</option>
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                            <input className={styles.new_date}
                                   type="date"
                                   placeholder={"Time"}
                            />
                        </div>
                        <button className={styles.new_submit}
                                type={"submit"}>Submit
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Content;