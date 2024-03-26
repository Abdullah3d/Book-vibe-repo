import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-3xl text-center font-bold mt-10">
            <h2>Opss!!</h2>
            <p>404 not found</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;