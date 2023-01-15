import { CustomContainer, Title } from "../../styles/styles";
import { INFO } from "../../utils";
const About: React.FC = () => {
  return (
    <CustomContainer centerContent>
      <Title>About</Title>
      <p>{INFO.description}</p>
    </CustomContainer>
  );
};
export default About;
