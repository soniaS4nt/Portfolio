import { Container } from "@chakra-ui/react";
import { Title, ContainerMadre } from "../../styles/styles";
import { INFO } from "../../utils";
const About: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <Title>About</Title>
        <p>{INFO.description}</p>
      </Container>
    </ContainerMadre>
  );
};
export default About;
