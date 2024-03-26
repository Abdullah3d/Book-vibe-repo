import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ShowBook from "../ShowBook/ShowBook";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>  
            <ShowBook></ShowBook>  
        </div>
    );
};

export default Root;