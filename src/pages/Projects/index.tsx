import { Container } from "@chakra-ui/react";
import { ContainerMadre } from "../../styles/styles";
import RepoGithub from "../ReposGitHub";

const Projects: React.FC = () => {
  return (
    <ContainerMadre>
      <Container centerContent>
        <RepoGithub />
      </Container>
    </ContainerMadre>
  );
};
export default Projects;
