import Link from "next/link"
import { useRouter } from "next/router";
import styles from '../styles/navbar.module.css'
const Navbar = (params) => {

    const router = useRouter();
console.log(router.pathname
    )

    return (
        <div className={styles.container}>
            <div className={styles.title}>Target Energy</div>
            <nav>
            <Link href="/">
                <a className={router.pathname == "/" ? styles.active : styles.notActive}>Home</a>
                </Link>
            <Link href="/products">
            <a className={ router.pathname.indexOf("/products")>=0 ? styles.active : styles.notActive}>Products</a>
                </Link>
            <Link href="/about">
            <a className={router.pathname == "/about" ? styles.active : styles.notActive}>About</a>
                </Link>
        </nav>
        </div>
    )
}
export default Navbar
