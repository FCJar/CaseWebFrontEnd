import { Container, CarouselField, Table } from "./Styles";
//import {useCreateUsuario, useGetUsuario} from "../../hooks/usuario";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {Carousel} from "antd";
import moment from "moment";

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
            <CarouselField>
                <Carousel autoplay>
                    <div><div className="img">Slide 1</div></div>
                    <div><div className="img">Slide 2</div></div>
                    <div><div className="img">Slide 3</div></div>
                </Carousel>
        </CarouselField>
        
        <Table>
            <thead>
                <tr>
                    <th>MEMBRO</th>
                    <th>CHEGADA</th>
                </tr>
            </thead>
            <tbody>
                {sessoes && sessoes.filter(sessao => sessao != null && sessao.id_usuario != null).map(sessao =>{
                    const nome = sessao.id_usuario.nome;
                    const chegada = moment(sessao.createdAt).format("HH:mm");
                    return(
                        <tr>
                            <td>{nome}</td>
                            <td>{chegada}</td>
                        </tr>

                    );
                })}

            </tbody>
        </Table>

        </Container>
    )
}

export default Home;