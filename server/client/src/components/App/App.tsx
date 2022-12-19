import * as React from "react";
import styles from "./App.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

//import background from "../../assets/images/background.png";

const App = () => {
    console.log(styles);

    return (
        <div className={styles.app}>
            <Header />
            <div style={{ backgroundColor: "green" }} className={styles.content} >
                <h2>Main Content</h2>
            </div>
            <Footer />
        </div>
    )
}

export default App;