import { Image, Text } from "@chakra-ui/react";
import { CustomContainer } from "../../styles/styles";
import { INFO } from "../../utils";

const NotFound: React.FC = () => {
  return (
    <CustomContainer centerContent marginTop="10rem">
      <Text fontSize={"2xl"}>{INFO.noFound}</Text>
      <Image width="15rem" margin={20} src="/nofound.svg" alt="404" />
    </CustomContainer>
  );
};
export default NotFound;
