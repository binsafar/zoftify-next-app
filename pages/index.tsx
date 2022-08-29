import type {NextPage} from 'next'
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {

    return (
        <div>
            <Header/>
            <div className={"wrapper"}>
                <Dashboard/>
            </div>
        </div>
    )
}

export default Home;