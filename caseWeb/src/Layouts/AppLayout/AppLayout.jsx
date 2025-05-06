import { Container } from "./Styles";

export default function AppLayout(){
    return(
        <Container>
            <p>HEADER</p>
            <Outlet/>
            <p>FOOTER</p>    
        </Container>
    )
}