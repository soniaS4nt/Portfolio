import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import useFetchRepo from "./hooks/useFetchRepo";
import { Title } from "../../styles/styles";
import { ContainerGrid } from "./styles";
import { Link } from "../Footer/styles";

const RepoGithub: React.FC = () => {
  const { repositories } = useFetchRepo();

  return (
    <>
      <Title>Projects</Title>
      <ContainerGrid>
        {repositories.map((repository) => (
          <Card key={repository.id} margin="2">
            <CardBody margin="2">
              <Text color="#F50057" fontWeight={"bold"}>
                {repository.name}
              </Text>
              <Text>{repository.description}</Text>

              <Button margin="2">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={repository.html_url}
                >
                  Acceder
                </Link>
              </Button>
            </CardBody>
          </Card>
        ))}
      </ContainerGrid>
    </>
  );
};

export default RepoGithub;
