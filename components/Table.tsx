import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, useState} from "react";

import {editPost} from "../store/feature/postSlice";
import styles from "../styles/table/table.module.css";
import left from "../assets/pagination/left.png"
import right from "../assets/pagination/right.png"

const Table = (props: any) => {

    const rootData = useSelector((state: any) => state.postSlice.posts)
    const dispatch = useDispatch();
    const [select, setSelect] = useState<any>('5')

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.target.value)
    };
    let posts: any[] = [];
    //filtering by status
    switch (props.show) {
        case 1:
            for (let i = 0; i < rootData.length; i++) {
                if (rootData[i].title.toLowerCase().startsWith(props.search)) {
                    posts.push(rootData[i])
                }
            }
            break;
        case 2:
            for (let i = 0; i < rootData.length; i++) {
                if (rootData[i].status === "draft") {
                    posts.push(rootData[i])
                }
            }
            break;
        case 3:
            for (let i = 0; i < rootData.length; i++) {
                if (rootData[i].status === "published") {
                    posts.push(rootData[i])
                }
            }
            break;
        default:
            console.log('error')
    }
    let pagination: number[] = [];
    let pages = Math.ceil(posts.length / 5);
    for (let i = 1; i < pages + 1; i++) {
        pagination.push(i)
    }
    console.log(pagination)
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                {/*table header*/}
                <thead className={styles.thead}>
                <tr className={styles.th_tr}>
                    <td className={styles.main_tr}>ID</td>
                    <td className={styles.main_title}>Title</td>
                    <td className={styles.main_tr}>Time</td>
                    <td className={styles.main_tr}>Status</td>
                </tr>
                </thead>
                {/*main content*/}
                <tbody className={styles.tbody}>
                {posts && posts.map((item: any, index: any) => {
                    return <tr key={item.id}
                               className={styles.tbody_tr}>
                        <td className={styles.td}>{item.id}</td>
                        <td className={styles.td_title}>{item.title}</td>
                        <td className={styles.td}>{item.time}</td>
                        <td>
                            <select className={styles.select}
                                    onChange={(event: any) => {
                                        dispatch(editPost({id: item.id, status: event.target.value}))
                                    }}
                                    defaultValue={item.status}
                                    id="status">
                                <option value={'draft'}>Draft</option>
                                <option value={'published'}>Published</option>
                            </select>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <select className={styles.select}
                            onChange={handleSelect}
                            defaultValue={select}
                            id="status">
                        <option value={'5'}>5</option>
                    </select>
                    {posts && <p>Showing 1 - {select} of {posts.length}</p>}
                </div>
                <div className={styles.right}>
                    <button className={styles.arrow_btn}><img src={left.src} alt=""/></button>
                    {pagination.map((item: any, index: number) => {
                        return <button key={index}>{item}</button>})}
                    <button className={styles.arrow_btn}><img src={right.src} alt=""/></button>
                </div>
            </div>
        </div>
    )
}
export default Table;