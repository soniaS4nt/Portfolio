import { Container } from "@chakra-ui/react";
import { NavPage } from "../../components";
import { ContainerMadre, Title } from "../../styles/styles";
import RepoGithub from "../ReposGitHub";
import useFetchRepo from "../ReposGitHub/hooks/useFetchRepo";
import { ContainerGrid } from "../ReposGitHub/styles";

const Projects: React.FC = () => {
  const { repositories, setPage, page } = useFetchRepo();

  return (
    <ContainerMadre>
      <Container centerContent>
        <Title>Projects</Title>
        {repositories.map((repository) => (
          <ContainerGrid key={repository.id}>
            <RepoGithub repository={repository} />
          </ContainerGrid>
        ))}
        <NavPage setPage={setPage} page={page} />
      </Container>
    </ContainerMadre>
  );
};
export default Projects;
