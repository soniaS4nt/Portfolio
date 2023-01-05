import { Container, Image, Text } from "@chakra-ui/react";

const NotFound: React.FC = () => {
  return (
    <Container centerContent marginTop="20">
      <Text fontSize={"2xl"}>
        Lo siento no he encontrado lo que buscas, pero puedes volver a la página
        principal
      </Text>

      <Image width="15rem" margin={20} src="/nofound.svg" alt="404" />
    </Container>
  );
};
export default NotFound;
