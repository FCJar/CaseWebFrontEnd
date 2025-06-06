import React from'react';
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

function Login(){
    const navigate = useNavigate();
    const {handleSubmit, register, formState: {errors}} = useForm({});
    return (
        <Container>
                      
            <Form>
                <Title>LOGIN</Title> 
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha"/>
            <MainButton type = "submit" onClick={() => navigate('/')}>Entrar</MainButton>
            </Form>
                <TextField>
                    Não tem login? Faça seu cadastro<CadastroText to="/Cadastro">aqui.</CadastroText>
                </TextField>
            
        </Container>
    )

}

export default Login;