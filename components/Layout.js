import Navbar from "./Navbar"
import background from "../public/background.jpg";
//import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {
    return (
        <div style={styles.container}>
            <Navbar/>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default Layout


const styles = {
    container: {
        backgroundImage: `url("/background.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};