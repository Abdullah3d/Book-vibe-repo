import { NavLink } from "react-router-dom";
import ShowBook from "../ShowBook/ShowBook";


const Home = () => {
    return (
        <div>
            <div className="flex  p-7 bg-gray-100 rounded-3xl " >
                <div className="bg-[ #1313130D] bg-gray-100">
                    <h2 className="text-5xl ml-20 mt-20 font-bold "> Books to freshen <br /> up your bookshelf </h2>
                    <NavLink to="/listed" className=" btn btn-success text-xl ml-20 mt-20">View the list</NavLink>
                </div>
                <div className="text-center px-80 py-24 bg-gray-100  ">
                    <img src="https://images-platform.99static.com//mN90IwBVp74kHGLcw-bLXUfGzP4=/408x1578:1620x2790/fit-in/500x500/99designs-contests-attachments/118/118932/attachment_118932625" alt="" />
                </div>
            </div>
            <ShowBook></ShowBook>
        </div>
    );
};

export default Home;