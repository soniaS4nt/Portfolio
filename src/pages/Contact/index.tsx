import { Container } from "@chakra-ui/react";
import ModalContact from "./components/ModalContact";

const Contact: React.FC = () => {
  //la idea es abrir un modal con un pequeño form para enviar un mensaje
  return (
    <Container centerContent marginTop="20">
      <ModalContact />
    </Container>
  );
};
export default Contact;
