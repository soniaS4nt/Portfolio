import { Container } from "@chakra-ui/react";
import { ContainerMadre } from "../../styles/styles";
import ModalContact from "./components/ModalContact";

const Contact: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <ModalContact />
      </Container>
    </ContainerMadre>
  );
};
export default Contact;
