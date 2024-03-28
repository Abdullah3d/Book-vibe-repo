import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PageToRead from './components/PageToReas/PageToRead';
import ShowCard from './components/ShowCard/ShowCard';
import ReadBook from './components/Read/ReadBook';
import Wish from './components/Wish/Wish';
import Form from './components/Form/Form';
import Contact from './components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/listed",
        element: <ReadBook></ReadBook>
      },
      {
        path:"/listed/wishlist",
        element: <Wish></Wish>
      },
      {
        path:"/form",
        element: <Form></Form>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/pages",
        element: <PageToRead></PageToRead>
      },
      {
        path:"/books/:id",
        element: <ShowCard></ShowCard>,
        loader: ()=> fetch('books.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
