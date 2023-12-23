import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = ({ handleSearch }) => {
    return (
        <>
            <Header handleSearch={handleSearch} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root