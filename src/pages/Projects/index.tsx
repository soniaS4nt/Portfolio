import { Container } from "@chakra-ui/react";
import RepoGithub from "../ReposGitHub";

const Projects: React.FC = () => {
  return (
    <Container centerContent marginTop="20">
      <RepoGithub />
    </Container>
  );
};
export default Projects;
