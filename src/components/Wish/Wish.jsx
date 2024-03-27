import  'react';
import ListedBook from '../ListedBook/ListedBook';
import Card from '../Card/Card';


const Wish = () => {
    const storedDataString = localStorage.getItem("wish");
    let storedData = JSON.parse(storedDataString) || [];
    // console.log(storedData)
    return (
        <div>
            <ListedBook />
            {
                storedData?.map((book) => (
                    <Card key={book?.bookId} book={book}></Card>
                ))
            }
        </div>
    );
};

export default Wish;

