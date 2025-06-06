import {H3, LogoImg} from"./Style"
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/Capturar.PNG";

export default function Header(){
    const navigate = useNavigate();
    return(
        <H3>
           <LogoImg src = {logo} alt="Logo"  onClick={() => navigate('/')}/>
        </H3>
    );
}
