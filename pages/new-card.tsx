import {NextPage} from "next";
import {ChangeEvent, useState} from "react";

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import {addPost} from "../store/feature/postSlice";
import {useDispatch} from "react-redux";
import styles from "../styles/content/Content.module.css";
import {set} from "immutable";

const NewCard: NextPage = () => {
    const dispatch = useDispatch()
    const [newPost, setNewPost] = useState<any>({
        title: '',
        status: 'status',
        date: ''
    });
    const [text, setText] = useState('Submit')
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPost({...newPost, title: event.target.value});
    };
    const handleInputChange2 = (event: ChangeEvent<HTMLSelectElement>) => {
        setNewPost({...newPost, status: event.target.value});
    };
    const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPost({...newPost, date: event.target.value});
    };
    const sendData = () => {
        dispatch(addPost({newPost}))
        setText('submitting...')
        setInterval(() => {
            setText('Submit')
        }, 300)
    }
    return (
        <div>
            <Header/>
            {/*<div className={styles.wrapper_page}>*/}
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

                        <button onClick={sendData}
                                className={styles.new_submit}
                                type={"submit"}>{text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewCard;