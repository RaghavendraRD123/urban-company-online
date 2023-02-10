import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { SingleProduct } from "./SingleProduct";

export const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={ <HomePage  /> } />
        <Route path='/Single/:id' element={ <SingleProduct/> } />
    </Routes>
}