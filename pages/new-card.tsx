import {NextPage} from "next";
import {ChangeEvent, useState} from "react";

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import styles from "../styles/content/Content.module.css";

const NewCard: NextPage = () => {

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
            <Header/>
            <div className={"wrapper-page"}>
                <Dashboard/>
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
            </div>
        </div>
    )
}
export default NewCard;