import { Container, Image, Text } from "@chakra-ui/react";
import { ContainerMadre } from "../../styles/styles";

const NotFound: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <Text fontSize={"2xl"}>
          Lo siento no he encontrado lo que buscas, pero puedes volver a la
          página principal
        </Text>
        <Image width="15rem" margin={20} src="/nofound.svg" alt="404" />
      </Container>
    </ContainerMadre>
  );
};
export default NotFound;
