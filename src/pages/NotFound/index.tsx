import { Container, Image, Text } from "@chakra-ui/react";
import { ContainerMadre } from "../../styles/styles";
import { INFO } from "../../utils";

const NotFound: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <Text fontSize={"2xl"}>{INFO.noFound}</Text>
        <Image width="15rem" margin={20} src="/nofound.svg" alt="404" />
      </Container>
    </ContainerMadre>
  );
};
export default NotFound;
