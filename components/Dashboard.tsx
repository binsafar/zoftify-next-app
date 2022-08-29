import icon from "../assets/tasks.png";
import Link from "next/link";

import "../styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
    return (
        <Link href={"/"} className={"link"}>
            <div className={"wrapper"}>
                <img src={icon.src} alt="tasks"/>
                <p>Posts</p>
            </div>
        </Link>
    )
}
export default Dashboard;