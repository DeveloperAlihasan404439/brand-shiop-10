import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Home/Home"
import AddProduct from "../AddProduct/AddProduct"
import Products from "../Products/Products"
import Details from "../Details/Details"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addProduct',
                element: <AddProduct/>
            },
            {
                path: '/brandProducts/:brandName',
                element: <Products/>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
            },
            {
                path: '/products/:id',
                element: <Details/>,
                loader: () => fetch('http://localhost:5000/products')
            },
        ]
    }
])