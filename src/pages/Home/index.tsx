import { Image, Text } from "@chakra-ui/react";
import { CustomContainer, Title } from "../../styles/styles";
import { INFO } from "../../utils";

const Home: React.FC = () => {
  return (
    <CustomContainer centerContent>
      <Image
        width="20rem"
        src="/programer1.svg"
        alignItems="center"
        marginTop={10}
      />
      <Title>{INFO.position}</Title>
      <Text fontSize="3xl" textAlign="center">
        {INFO.name}
      </Text>
    </CustomContainer>
  );
};
export default Home;
