import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Home/Home"
import AddProduct from "../AddProduct/AddProduct"
import Products from "../Products/Products"
import Details from "../Details/Details"
import MyCrat from "../MyCrat/MyCrat"
import UpdateCrat from "../UpdateCrat/UpdateCrat"
import SingUp from "../AuthProvider/SingUp/SingUp"
import SingIn from "../AuthProvider/SingIn/SingIn"
import PriveatRouter from "../PriveatRouter/PriveatRouter"
import Error from "../Error/Error"
import UserData from "../UserData/UserData"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
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
                element: <PriveatRouter><Details/></PriveatRouter>,// private/protected route.
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/myCrat',
                element: <PriveatRouter><MyCrat/></PriveatRouter>,// private/protected route.
                loader: () => fetch('http://localhost:5000/myCrat')
            },
            {
                path: '/UpdateProduct/:id',
                element: <PriveatRouter><UpdateCrat/></PriveatRouter>,// private/protected route.
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/singup',
                element: <SingUp/>
            },
            {
                path: '/singin',
                element: <SingIn/>
            },
            {
                path: '/userData',
                element: <UserData/>,
                loader: ()=>fetch('http://localhost:5000/contact')
            },
        ]
    }
])