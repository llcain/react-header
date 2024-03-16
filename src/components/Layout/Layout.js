import React from "react";

import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            {/* attach all file components */}
            
            {/* display the child prop */}
            {children}
            <Footer />
        </div>
    );
}

export default Layout;