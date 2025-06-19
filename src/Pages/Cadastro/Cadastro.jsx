import{toast} from "react-toastify"
import React from "react";
import{ 
    Container,
    Title,
    Form,
    Input,
    MainButton,
    TextField,
    LoginText
 } from './Styles'

import {useCreateUsuario} from "../../hooks/usuario";
import {useForm} from "react-hook-form";

function Cadastro() {
    const {handleSubmit, register, formState: {errors}} = useForm({});
    const { mutate: postUser, isPending } = useCreateUsuario({
        onSuccess: () =>{     
            toast.success("usuarios cadastrado");
            queryClient.invalidateQueries({
                queryKey: ['usuario'],
            });
        },
        onError:(data) =>{
            toast.error("cadastro ruim");
            console.log(data)
        }
    });

    
    const onSubmit = (data) =>{
        postUser(data);
    }
    return(
        <Container>           
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Cadastro</Title>
                <Input {...register("nome")} placeholder="Nome"/>
                <Input {...register("email")}  type="email" placeholder="E-mail"/>
                <Input {...register("cargo")} placeholder="Cargo"/>
                <Input {...register("status")} placeholder="status"/>
                <Input {...register("senha")} type="password" placeholder="Repita sua senha"/> 
                <MainButton>Criar Conta</MainButton> 
            </Form>   
            <TextField>
                Já tem conta? Faça o login<LoginText to="/Login">aqui.</LoginText>
            </TextField>

            
        </Container>
    )
}

export default Cadastro;