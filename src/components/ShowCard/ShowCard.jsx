import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowCard = () => {

    const [book, setBook] = useState(null);
    const [data, setData] = useState([]);
    const [wish, setWish] = useState([]);
    console.log(wish);

    const { id } = useParams();
    console.log()
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                const selectedBook = data?.find(item => item?.bookId === parseInt(id));
                setBook(selectedBook);
            })
            .catch(error => console.error('Error fetching data:', error));


    }, [id]);

    if (!book) {
        return <p className="text-center text-4xl"> Loading....</p>
    }


    const addItem = (book) => {
        const storedDataString = localStorage.getItem("read");
        let storedData = JSON.parse(storedDataString) || [];
        const isIdExist = data?.some(cocktail => cocktail?.id === parseInt(id));
        if (!isIdExist) {
            storedData?.push({
                id: book?.bookId,
                name: book?.bookName,
                author: book?.author,
                img: book?.image,
                rat: book?.rating,
                cat: book?.category,
                tags: book?.tags,
                pub: book?.publisher,
                year: book?.yearOfPublishing,
                total: book?.totalPages
            });
        }
        else{
            alert("error")
        }
        localStorage.setItem("read", JSON.stringify(storedData));
        setData(storedData);
    };


    const wishItem = (book) => {
        const storedDataString = localStorage.getItem("wish");
        let storedData = JSON.parse(storedDataString) || [];
        const isIdExist = data?.some(cocktail => cocktail?.id === parseInt(id));
        if (!isIdExist) {
            storedData?.push({
                id: book?.bookId,
                name: book?.bookName,
                author: book?.author,
                img: book?.image,
                rat: book?.rating,
                cat: book?.category,
                tags: book?.tags,
                pub: book?.publisher,
                year: book?.yearOfPublishing,
                total: book?.totalPages
            });
        }
        else{
            alert("error")
        }
        localStorage.setItem("wish", JSON.stringify(storedData));
        setWish(storedData);
    };

    return (
        <div className="flex px-10 rounded-2xl">
            <div>
                <img className="w-[800px] h-[600px] object-cover" src={book?.image} />
            </div>
            <div>
                <div className="p-5  text-2xl px-5 font-semibold">
                    <h2>{book?.bookName}</h2>
                    <p>{book?.author}</p>
                    <hr />
                    <p>{book?.category}</p>
                    <p>{book?.review}</p>
                </div>
                <div className="flex gap-24 text-2xl font-bold  px-5">
                    <p>{book?.tags}</p>
                    <p className="text-green-500">#Young Adult</p>
                    <p className="text-green-500">#Identity</p>
                </div>
                <hr />
                <div className="text-xl px-7 py-5">
                    <p>{book?.totalPages}</p>
                    <p>{book?.publisher}</p>
                    <p>{book?.yearOfPublishing}</p>
                    <p>{book?.rating}</p>
                </div>
                <div className="px-7">
                    <button onClick={() => { addItem(book) }} className="btn bg-white text-xl">Read</button>
                    <button onClick={() => {wishItem(book) }} className="btn btn-accent text-xl">Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;


