import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFrontElements
} from "react-router-dom";

import  Cadastro  from "./Pages/Cadastro/Cadastro";
import  Home  from "./Pages/Home/Home";
import  Login  from "./Pages/Login/Login";

const router = createBrowserRouter(
    createRoutesFrontElements(
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="Cadastro" element={<Cadastro/>}/>
            <Route path="Login" element={<Login/>}/>
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
    
}