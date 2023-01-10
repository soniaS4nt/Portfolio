import { Container, Text } from "@chakra-ui/react";
import { NavPage } from "../../components";
import { ContainerMadre, Title } from "../../styles/styles";
import { INFO } from "../../utils";
import RepoGithub from "../ReposGitHub";
import useFetchRepo from "../ReposGitHub/hooks/useFetchRepo";
import { ContainerGrid } from "../ReposGitHub/styles";
import { ContainerNavPagebottom } from "./styles";

const Projects: React.FC = () => {
  const { repositories, setPage, page } = useFetchRepo();

  return (
    <ContainerMadre>
      <Container centerContent>
        <Title>Projects</Title>
        <p>{INFO.projects}</p>
        <div>
          {repositories.map((repository) => (
            <ContainerGrid key={repository.id}>
              <RepoGithub repository={repository} />
            </ContainerGrid>
          ))}
        </div>
        <ContainerNavPagebottom>
          <NavPage setPage={setPage} page={page} />
        </ContainerNavPagebottom>
      </Container>
    </ContainerMadre>
  );
};
export default Projects;
