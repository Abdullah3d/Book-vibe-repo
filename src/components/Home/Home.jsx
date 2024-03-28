import { NavLink } from "react-router-dom";
import ShowBook from "../ShowBook/ShowBook";


const Home = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row p-7 bg-gray-100 rounded-3xl " >
                <div className="bg-[ #1313130D] bg-gray-100 text-center md:text-left md:mr-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-6 md:mt-20 "> Books to freshen <br /> up your bookshelf </h2>
                    <NavLink to="/listed" className=" btn btn-success text-lg md:text-xl">View the list</NavLink>
                </div>
                <div className="text-center mt-10 md:mt-0  ">
                    <img src="https://images-platform.99static.com//mN90IwBVp74kHGLcw-bLXUfGzP4=/408x1578:1620x2790/fit-in/500x500/99designs-contests-attachments/118/118932/attachment_118932625" alt=""  className="mx-auto max-w-full h-auto"/>
                </div>
            </div>
            <ShowBook></ShowBook>
        </div>
    );
};

export default Home;