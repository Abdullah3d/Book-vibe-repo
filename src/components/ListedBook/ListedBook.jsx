import "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ListedBook = ({ storedData }) => {
    // const [short, setShort] = useState([]);

    // console.log(short,"sorted",storedData)

    // Event handler function to update the selected value
    const handleCollegeChange = (event) => {
        const selectedCollege = event.target.value;
        console.log(selectedCollege)
    };





    return (
        <div className=" grid justify-center">
            <h1 className="text-center text-4xl font-extrabold">Books</h1>
            <select onChange={handleCollegeChange} className="select select-success w-full max-w-xs">
                <option disabled selected>Sort by</option>
                <option value="rating">Rating</option>
                <option value="page">Page number</option>
                <option value="year">Publish year</option>
               
            </select>
            <ul className="flex gap-5 text-2xl font-bold p-5">
                <li><NavLink to="/listed">Read books</NavLink></li>
                <li><NavLink to="/listed/wishlist">Wish list</NavLink></li>
            </ul>

        </div>
    );
};

export default ListedBook;