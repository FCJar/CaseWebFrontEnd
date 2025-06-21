import {H3, LogoImg, HLink, LogoButton} from"./Style"
import { useNavigate } from "react-router-dom"; 

import logo from "../assets/Capturar.PNG";
import useAuthStore from "../../stores/auth";

export default function Header(){
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate();

    const logout = () =>{
        clearAuth();
        navigate("/Login")
    };


    return(
        <H3>
            <LogoImg src = {logo} alt="Logo"/> 

            {usuario && <HLink to="/">Perfil</HLink>}
            
            {usuario && <HLink to="/">Home</HLink>}

            {usuario && <HLink onClick={logout} to="/Login">Logout</HLink>}
            
            {!usuario && <HLink to="/Cadastro">Cadastro</HLink>}

            {!usuario && <HLink to="/Login">Login</HLink>}
            
        </H3>


    );
}
