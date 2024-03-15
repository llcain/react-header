import React from "react";
import Header from "../../components/Header/Header";

const Layout = ({ children }) => {
    return (
        <div>
            {/* attach all file components */}
            <Header />
            {/* display the child prop */}
            {children}
        </div>
    );
}

export default Layout;