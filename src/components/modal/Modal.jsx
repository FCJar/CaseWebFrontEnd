//import { Button, Modal } from "antd";
import { ModalBackground, ModalContainer, Closepage } from "./Style";

function Modal({isOpen, children, isClose}){
    if(isOpen){
        return(
            <ModalBackground>
                <ModalContainer>
                    <Closepage onClick={isClose}>x</Closepage>
                    {children}
                </ModalContainer>
            </ModalBackground>
        );
    }
    return null;
}
export default Modal;