import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = ({ handleSearch, resetSearch }) => {
    return (
        <>
            <Header 
            handleSearch={handleSearch}
            resetSearch={resetSearch} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root