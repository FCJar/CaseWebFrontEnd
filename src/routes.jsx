import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import  {AppLayout} from "./layouts"
import  {NotFound, Login, Home, Cadastro}  from "./pages";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="Cadastro" element={<Cadastro/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
    
}