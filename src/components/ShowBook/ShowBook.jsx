import { useEffect, useState } from "react";
import Book from "../Book/Book";


const ShowBook = () => {
    const [books ,setBooks] = useState([]);

    useEffect(() =>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div>
            <div>
            <h2 className="text-5xl font-bold text-center mb-5">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-5 p-7">
                {
                    books.map(book => <Book key={books.bookId} book={book}></Book>)
                }
            </div>
        </div>
        
    );
};

export default ShowBook;