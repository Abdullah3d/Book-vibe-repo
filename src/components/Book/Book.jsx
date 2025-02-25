import { IoIosStarOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  // eslint-disable-next-line react/prop-types
  const { bookName, author, rating, image, category, tags, totalPages, bookId } = book;


  return (
    <>
      <NavLink to={`books/${bookId}`} className="card card-compact w-64 h-96 bg-base-100 shadow-xl py-5 ">
        <figure><img
          className="max-h-64 " src={image} /></figure>
        <div className="card-actions gap-12">
          <h4 className="text-green-600 ">{tags}</h4>
          <h4 className="text-green-600 ">{totalPages}</h4>
        </div>
        <div className="card-body" >
          <h2 className="card-title text-2xl">{bookName}</h2>
          <hr />
          <p className="text-xl">{author}</p>
          <hr />
          <div className="card-actions  text-xl">
            <p>{category}</p>
            <p className="flex">{rating}<IoIosStarOutline className="text-xl  mr-2 mt-1" /> </p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Book;