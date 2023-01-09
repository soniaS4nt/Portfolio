import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import about from "../../about.json";
import { Title, ContainerMadre } from "../../styles/styles";
const About: React.FC = () => {
  const [language, setLanguage] = useState("En");
  const [content, setContent] = useState({ description: "" });

  useEffect(() => {
    language == "En" ? setContent(about.En) : setContent(about.Es);
  });

  return (
    <ContainerMadre>
      <Container centerContent>
        <Title>About</Title>
        <p>{content.description}</p>
      </Container>
    </ContainerMadre>
  );
};
export default About;
