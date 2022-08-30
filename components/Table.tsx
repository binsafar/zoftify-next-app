import styles from "../styles/table/table.module.css";
import {useSelector} from "react-redux";
import {ChangeEvent} from "react";

const Table = (props: any) => {

    const posts = useSelector((state: any) => state.postSlice.posts)
    const renderPosts = posts

    const handleStatus = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
    };

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                {/*table header*/}
                <thead className={styles.thead}>
                <tr className={styles.th_tr}>
                    <td className={styles.main_tr}>ID</td>
                    <td className={styles.main_tr}>Title</td>
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
                        <td className={styles.td}>{item.title}</td>
                        <td className={styles.td}>{item.time}</td>
                        <td>
                            <select className={styles.select}
                                    onChange={handleStatus}
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
        </div>
    )
}
export default Table;