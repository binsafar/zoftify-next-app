import Link from "next/link";
import {useRouter} from "next/router";

import logo from "../assets/logo.png";
import arrow_left from "../assets/arrow_left.png";
import "../styles/header/Header.module.css";

const Header = () => {
    const router = useRouter()
    const isPostPage = router.pathname;

    return (
        <div className={"header-container"}>
            <Link href={"/"}>
                <img className={""}
                     width={78}
                     height={18}
                     src={logo.src} alt=""/>
            </Link>
            {isPostPage === "/" ?
                <div>
                    <p>Posts</p>
                </div>
                :
                <div className={"new-post"}>
                    <button className={"button"}>
                        <Link href={"/"}>
                            <img src={arrow_left.src} alt="arrow_left"/>
                        </Link>
                    </button>
                    <p>New Post</p>
                </div>
            }
        </div>
    )
}
export default Header;