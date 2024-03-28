import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowCard = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                const selectedBook = data.find(item => item.bookId === parseInt(id));
                setBook(selectedBook);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!book) {
        return <p className="text-center text-4xl">Loading....</p>;
    }

    const addItem = (book) => {
        const storedDataString = localStorage.getItem("read");
        const storedData = JSON.parse(storedDataString) || [];
        const isIdExist = storedData.some(cocktail => cocktail.id === book.bookId);

        if (!isIdExist) {
            storedData.push({
                id: book.bookId,
                name: book.bookName,
                author: book.author,
                img: book.image,
                rat: book.rating,
                cat: book.category,
                tags: book.tags,
                pub: book.publisher,
                year: book.yearOfPublishing,
                total: book.totalPages
            });
            toast.success("Added to read list successfully");
            localStorage.setItem("read", JSON.stringify(storedData));
        } else {
            toast.error("Already added");
        }
    };

    const wishItem = (book) => {
        const storedData = JSON.parse(localStorage.getItem("wish")) || [];
        const read = JSON.parse(localStorage.getItem("read")) || [];
        console.log(read)
        const isIdExist = storedData.some(cocktail => cocktail.id === book.bookId);
        const isIdInWish = read.some(cocktail => cocktail.id === book.bookId);
        console.log("isex",isIdExist, "iswish" ,isIdInWish)
        if (!isIdExist && !isIdInWish) {
            storedData.push({
                id: book.bookId,
                name: book.bookName,
                author: book.author,
                img: book.image,
                rat: book.rating,
                cat: book.category,
                tags: book.tags,
                pub: book.publisher,
                year: book.yearOfPublishing,
                total: book.totalPages
            });
            toast.success("Added to wish list successfully");
            localStorage.setItem("wish", JSON.stringify(storedData));
        }      
        else {
            toast.error("Already added ");
        }
    };

    return (
        <div className="flex px-5 md:px-10 rounded-2xl">
            <div>
                <img className="w-[800px] h-[600px] object-cover" src={book.image} alt={book.bookName} />
            </div>
            <div>
                <div className="p-5 text-lg md:text-2xl font-semibold">
                    <h2>{book.bookName}</h2>
                    <p>{book.author}</p>
                    <hr />
                    <p>{book.category}</p>
                    <p>{book.review}</p>
                </div>
                <div className="flex flex-wrap justify-between text-lg md:text-2xl font-bold px-5">
                    <p>{book.tags}</p>
                    <p className="text-green-500">#Young Adult</p>
                    <p className="text-green-500">#Identity</p>
                </div>
                <hr />
                <div className="text-xl px-7 py-5 font-bold">
                    <p>Total page:   {book.totalPages}</p>
                    <p>Publisher:    {book.publisher}</p>
                    <p>Year Of Publishing:  {book.yearOfPublishing}</p>
                    <p>Rating:{book.rating}</p>
                </div>
                <div className="px-7">
                    <button onClick={() => addItem(book)} className="btn bg-white text-xl">Read</button>
                    <button onClick={() => wishItem(book)} className="btn btn-accent text-xl">Wish List</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShowCard;
