import { Container, CarouselField, Table } from "./Styles";
import {Carousel} from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useGetessoes } from "../../hooks/sessoes";

function Home(){
    const { data : sessoes = [], isLoading, isError } = useGetessoes({

        onSuccess: (data)=>{
            console.log(data);
            console.success("Sessões carregadas")
        },
        onError: (error)=>{
            console.log(data);
            toast.error(error);
        }
    });

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
                        <tr key={sessao._id}>
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