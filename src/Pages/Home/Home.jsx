import { Container } from "./Styles";
import {useCreateUsuario, useGetUsuario} from "../../hooks/usuario";
import {useForm} from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import{toast} from "react-toastify"
import React from "react";
 
function Home(){
    const queryClient = useQueryClient();

    const {handleSubmit, register, formState: {errors}} = useForm({});


    
    const{data: usuario, isLoading } = useGetUsuario({});
    
    function response(data){
        postUser(data);
    }
    return(
        <Container>
            {isLoading ? (<p>carregando</p>) :
                ((Array.isArray(usuario) ? usuario : [] ).map((usuario) => {
                    return <div key={usuario.id}>{usuario?.nome}</div>;
                }))}
        </Container>
    )
}

export default Home;