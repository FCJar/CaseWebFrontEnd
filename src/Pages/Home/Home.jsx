import { Container, CarouselField, Table, Lbuton, LRow } from "./Styles";
import {Carousel} from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useCreateSessoes, useGetessoes } from "../../hooks/sessoes";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";

function Home(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data : sessoes = [], isLoading, isError } = useGetessoes({
        
        onSuccess: ()=>{
            toast.success("Sessões carregadas")
        },
        onError: (error)=>{
            toast.error(error);
        }
    });

    const token = useAuthStore((state) => state.token);
    const usuario = useAuthStore((state) => state.usuario);

    const { mutate: postUser, isPending } = useCreateSessoes({
        onSuccess: () =>{     
            toast.success("Sessão cadastrada");
            queryClient.invalidateQueries({
                queryKey: ['sessoes'],
            });
        },
        onError:(error) =>{
            console.log(error)
            toast.error("cadastro ruim")
            console.log(token)
            console.log(usuario._id)
        }
    });

    
    const onSubmit = () =>{
        postUser({ id_usuario: usuario._id});
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
        
        <LRow>
            <Lbuton onClick={onSubmit}>RealizarLogin</Lbuton>
        </LRow>

        <Table>
            
            <thead>
                <tr>
                    <th>MEMBRO</th>
                    <th>CHEGADA</th>
                    <th>TEMPO</th>
                </tr>
            </thead>
            <tbody>
                {sessoes && sessoes.filter(sessao => sessao != null && sessao.id_usuario != null).map(sessao =>{
                    const nome = sessao.id_usuario.nome;
                    const chegada = moment(sessao.createdAt).format("HH:mm");
                    const tempo = moment(sessao.createdAt).fromNow();
                    return(
                        <tr key={sessao._id}>
                            <td>{nome}</td>
                            <td>{chegada}</td>
                            <td>{tempo}</td>
                        </tr>

                    );
                })}

            </tbody>
        </Table>

        </Container>
    )
}

export default Home;