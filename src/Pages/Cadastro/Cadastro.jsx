import React from'react';
import{ 
    Container,
    Header,
    Form,
    Title,
    InputField,
    Input,
    CadastroButton,
    Logo,
    LoginText
 } from './Styles'

function Cadastro() {
    return(
        <Container>
            <Header>
                <Logo>CPE</Logo>
            </Header>
            <Form>
            <Title>CADASTRO</Title>
            <InputField>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="E-mail"/>
                <Input type="text" placeholder="Cargo"/>
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Repita sua senha"/>  
            </InputField>   
            <CadastroButton>Criar Conta</CadastroButton>
            <LoginText>Já tem conta? faça o login</LoginText>
            </Form>
        </Container>
    )
}

export default Cadastro;