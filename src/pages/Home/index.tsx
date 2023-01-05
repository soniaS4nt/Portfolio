import { Container, Image } from "@chakra-ui/react";
import { Title, ContainerMadre } from "../../styles/styles";


const Home: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent marginTop="20">
        <Image width="20rem" src="/programer1.svg" alignItems="center" />
        <Title>Sonia Chaparro</Title>
      </Container>
    </ContainerMadre>
  );
};
export default Home;
