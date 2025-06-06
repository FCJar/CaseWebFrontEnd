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

            <HLink to="/Cadastro">Cadastro</HLink>
            <HLink to="/">Home</HLink>
            <HLink to="/">Perfil</HLink>
            
            {!usuario && <HLink to="/Login">Login</HLink>}
            {usuario &&  <LogoButton type="button" onClick={logout}>Logout</LogoButton>} 
            
        </H3>


    );
}
