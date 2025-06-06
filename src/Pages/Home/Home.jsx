import { Container } from "./Styles";
//import {useCreateUsuario, useGetUsuario} from "../../hooks/usuario";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import api from "../../services/api/api";

function Home(){
    const[carregando, setCarregando] = useState(false);
    const[usuarios, setUsuarios] = useState([]);
    const[sessoes, setSessoes] = useState([]);

    
    const queryClient = useQueryClient();
    //const {handleSubmit, register, formState: {errors}} = useForm({});

    const getUsuarios = async() =>{
        setCarregando(true);
            try{
                
                const res = await api.get("/usuarios");
                setUsuarios(res.data);

            }catch(error){
              console.error(erro);
              alert(erro.response.data.message);
            } finally{
                setCarregando(false);
            }
        };

        const getSessoes = async() =>{
            setCarregando(true);
                try{
                    
                    const res = await api.get("/sessoes");
                    setSessoes(res.data);

                }catch(error){
                    console.error(erro);
                    alert(erro.response.data.message);
                } finally{
                    setCarregando(false);
                }
        };


    useEffect(()=>{
        getUsuarios();
        getSessoes();
    },[]);

    if(carregando){
        return(
            <Container>
                <h1>  CARREGANDO....</h1>
            </Container>
        )
    
    }

    return(
        <Container>
            {usuarios.map((sessoes) => <h1> {sessoes.idusuario?.nome}</h1>)}
        </Container>
    )
}

export default Home;