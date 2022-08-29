import type {NextPage} from 'next'
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";

const Home: NextPage = () => {

    const posts = useAppSelector((state) => state)
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(posts)
    }, [])

    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

export default Home
