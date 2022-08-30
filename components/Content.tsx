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
    //new post
    const [newPost, setNewPost] = useState<any>({
        id: 1,
        title: '',
        status: 'status',
        date: ''
    });
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNewPost({...newPost, title: event.target.value});
    };
    const handleInputChange2 = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setNewPost({...newPost, status: event.target.value});
    };
    const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNewPost({...newPost, date: event.target.value});
    };
    const handleButton = () => {
        console.log(newPost)
    }
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
                :
                //creating new post
                <div className={styles.content_container}>
                    <div className={styles.n_wrapper}>
                        <div className={styles.n_margin}></div>
                        <p className={styles.new_title}>Post information</p>

                        <div className={styles.new_wrapper}>
                            <input className={styles.new_input}
                                   value={newPost.title}
                                   onChange={handleInputChange}
                                   type="text" placeholder={"Title"}/>

                            <select className={styles.select}
                                    onChange={handleInputChange2}
                                    defaultValue={"status"}
                                    id="status">
                                <option value="status" disabled hidden>Status</option>
                                <option value={'draft'}>Draft</option>
                                <option value={'published'}>Published</option>
                            </select>

                            <input className={styles.new_date}
                                   value={newPost.date}
                                   onChange={handleInputChange3}
                                   type="datetime-local"
                                   placeholder={"Time"}
                            />
                        </div>

                        <button onClick={handleButton}
                                className={styles.new_submit}
                                type={"submit"}>Submit
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Content;