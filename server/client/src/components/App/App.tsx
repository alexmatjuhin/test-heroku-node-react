import * as React from "react";
import styles from "./App.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

import background from "../../assets/images/background.png";

const App = () => {
    const biStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center'
    };

    console.log(biStyle);

    return (
        <div className={styles.app} style={biStyle} >
            <Header />
            <div className={styles.content} >
                <h2>Main Content</h2>
            </div>
            <Footer />
        </div>
    )
}

export default App;