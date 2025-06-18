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
import useAuthStore from '../../stores/auth';
import{toast} from "react-toastify"
import { useForm } from 'react-hook-form';
import { uselogin } from '../../hooks/login'; 


function Login(){
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const setToken = useAuthStore((state) => state.setToken);

    const{
        handleSubmit,
        register,
        formState: {errors},
   } = useForm({});

   const{mutate: postLogin, isPending } = uselogin({
        onSuccess: (data)=>{
            if(!data || !data.token){
                toast.error("Token não recebido")
                return;
            }

            console.log(data);

            const { token } = data;

            setToken(token);
            console.log(token);

            toast.success("usuarios Logado");
            navigate("/");
        }, 
        onError:( error )=>{
           
            toast.error(error.message)
            console.log(error.message)

        }
   });

   const onSubmit = (data)=>{
    postLogin(data);
   }

    if(carregando){
        return(
            <Container>
                <h1>CARREGANDO....</h1>
            </Container>
        )
    
    }
    return (
        <Container>
                      
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>LOGIN</Title> 
                    <Input  {...register("email")} type="email" id="email" placeholder="E-mail"/>
                    <Input  {...register("senha")} type="password" placeholder="Senha"/>
            <MainButton type = "submit" >Entrar</MainButton>
            </Form>
                <TextField>
                    Não tem login? Faça seu cadastro<CadastroText to="/Cadastro">aqui.</CadastroText>
                </TextField>
            
        </Container>
    )

}

export default Login;