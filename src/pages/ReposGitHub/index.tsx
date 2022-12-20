import { Button, Card, CardBody, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFetchRepo from "./hooks/useFetchRepo";
import { Title } from "../../styles/styles";
import { ContainerGrid } from "./styles";

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
              {/* <Button margin="2">
                <Link target={"_blank"} to={repository.html_url}>
                  Acceder
                </Link>
              </Button> */}
            </CardBody>
          </Card>
        ))}
      </ContainerGrid>
    </>
  );
};

export default RepoGithub;
