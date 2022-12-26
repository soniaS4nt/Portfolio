import { Container, Image } from "@chakra-ui/react";
import { Title, ContainerMadre } from "../../styles/styles";
const programer = new URL("./programer1.svg", import.meta.url).href;

const Home: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent marginTop="20">
        <Image width="20rem" src={programer} alignItems="center" />
        <Title>Sonia Chaparro</Title>
      </Container>
    </ContainerMadre>
  );
};
export default Home;
