import Link from "next/link";

import icon from "../assets/tasks.png";
import styles from "../styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Link href={"/"}>
                <div>
                    <div className={styles.margin}></div>
                    <div className={styles.card}>
                        <img className={styles.img}
                             src={icon.src} alt="tasks"/>
                        <p className={styles.title}>Posts</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Dashboard;