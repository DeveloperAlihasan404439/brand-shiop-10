import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loder from "./Loder/Loder";

const PriveatRouter = ({children}) => {
    const location = useLocation()
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <Loder/>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to = '/singin'></Navigate>;
};

export default PriveatRouter;