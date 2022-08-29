import {NextPage} from "next";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const NewCard: NextPage = () => {
    return (
        <div>
            <Header/>
            <div>
                <Dashboard/>
            </div>
        </div>
    )
}
export default NewCard;