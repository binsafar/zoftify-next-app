import {NextPage} from "next";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Content from "../components/Content";

const NewCard: NextPage = () => {
    return (
        <div>
            <Header/>
            <div className={"wrapper-page"}>
                <Dashboard/>
                <Content/>
            </div>
        </div>
    )
}
export default NewCard;