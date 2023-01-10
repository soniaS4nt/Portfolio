import { Container } from "@chakra-ui/react";
import { ContainerMadre, Title } from "../../styles/styles";
import { INFO } from "../../utils";
import ModalContact from "./components/ModalContact";
import SocialMedia from "./components/SocialMedia";
import { SocialMediaContainer } from "./components/SocialMedia/styles";

const Contact: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <Title>Contact</Title>
        <SocialMediaContainer>
          <p>{INFO.socialMedia}</p>
        </SocialMediaContainer>
        <ModalContact />
        <SocialMedia />
      </Container>
    </ContainerMadre>
  );
};
export default Contact;
