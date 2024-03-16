import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            {/* attach all file components */}
            <Header />
            {/* display the child prop */}
            {children}
            <Footer />
        </div>
    );
}

export default Layout;