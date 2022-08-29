import Link from "next/link";
import {useRouter} from "next/router";

import logo from "../assets/logo.png";
import arrow_left from "../assets/arrow_left.png";
import styles from "../styles/header/Header.module.css";

const Header = () => {
    const router = useRouter()
    const isPostPage = router.pathname;

    return (
        <div className={styles.header_container}>
            <Link href={"/"}>
                <img className={styles.header_img}
                     src={logo.src} alt=""/>
            </Link>

            {isPostPage === "/" ?
                <div>
                    <p className={styles.header_title}>Posts</p>
                </div>
                :
                <div className={styles.header_wrapper}>
                    <Link href={"/"}>
                        <div className={styles.header_link}>
                            <img className={styles.header_img_link}
                                 src={arrow_left.src} alt="arrow_left"/>
                        </div>
                    </Link>
                    <p className={styles.header_title}>New Post</p>
                </div>
            }
        </div>
    )
}
export default Header;