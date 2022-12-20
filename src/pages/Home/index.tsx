import { Container, Image } from "@chakra-ui/react";
import { Title } from "../../styles/styles";
const programer = new URL("./programer1.svg", import.meta.url).href;

const Home: React.FC = () => {
  return (
    <Container centerContent marginTop="20">
      <Image width="20rem" src={programer} alignItems="center" />
      <Title>Sonia Chaparro</Title>
    </Container>
  );
};
export default Home;
