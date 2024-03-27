import { NavLink } from "react-router-dom";

const ListedBook = () => {
    
    return (
        <div>
            <h1 className="text-center text-4xl font-extrabold">Books</h1>
            <select className="select select-accent text-center w-full max-w-xs">
                <option className="text-center">Sort by</option>
                <option>Rating</option>
                <option>NUmber of pages</option>
                <option>Publish year</option>
            </select>
            <ul className="flex gap-5 text-2xl font-bold p-5">
                <li><NavLink to="/listed">Read books</NavLink></li>
                <li><NavLink to="/listed/wishlist">Wish list</NavLink></li>
            </ul>
           
        </div>
    );
};

export default ListedBook;