import 'react';
import ListedBook from '../ListedBook/ListedBook';
import Card from '../Card/Card';
import { useState } from 'react';


const Wish = () => {
    const [short, setShort] = useState([]);

    const storedDataString = localStorage.getItem("wish");
    let storedData = JSON.parse(storedDataString) || [];
    if (short.length != 0) {
        return (
            <>
                <ListedBook storedData={storedData} setShort={setShort} />
                {
                    short?.map((book) => (
                        <Card key={book?.bookId} book={book}></Card>
                    ))
                }
            </>
        )
    }
    else {
        return (
            <div>
                <ListedBook storedData={storedData} setShort={setShort} />
                {
                    storedData?.map((book) => (
                        <Card key={book?.bookId} book={book}></Card>
                    ))
                }
            </div>
        );
    }

};

export default Wish;

