import React, { useState } from'react';
import{
    Container,
    Form,
    Title,
    Input,
    MainButton,
    CadastroText,
    TextField,
} from './Styles'

import { useNavigate } from "react-router-dom"; 
import {useForm} from "react-hook-form";
import api from "../../services/api/api";
import useAuthStore from '../../stores/auth';
import{toast} from "react-toastify"


function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false)
    const token = useAuthStore((state) => state.token)
    const usuario = useAuthStore((state) => state.usuario);
    const setToken = useAuthStore((state) => state.setToken);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setCarregando(true);
        try{
            const res = await api.post("/login",{email, senha});
            const { token } = res.data;

            setToken(token);
            console.log(token);

            toast.success("usuarios Logado");
            navigate("/");
        }catch(error){
          console.error(erro);
          alert(erro.response.data.message);
        } finally{
            setCarregando(false);
        }
    };

    if(carregando){
        return(
            <Container>
                <h1>CARREGANDO....</h1>
            </Container>
        )
    
    }
    return (
        <Container>
                      
            <Form onSubmit={handleSubmit}>
                <Title>LOGIN</Title> 
                    <Input type="email" name="email" id="email" placeholder="E-mail"
                     required onChange={(e)=>setEmail(e.target.value)}/>
                    <Input type="password" name="senha" id="senha" placeholder="Senha"
                    required onChange={(e)=>setSenha(e.target.value)}/>
            <MainButton type = "submit" >Entrar</MainButton>
            </Form>
                <TextField>
                    Não tem login? Faça seu cadastro<CadastroText to="/Cadastro">aqui.</CadastroText>
                </TextField>
            
        </Container>
    )

}

export default Login;