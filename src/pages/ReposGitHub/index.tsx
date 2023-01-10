import { Button, Card, CardBody, IconButton, Text } from "@chakra-ui/react";
import { Link } from "../Footer/styles";
import { Props } from "./interfaces";
import github from "../../../public/github.svg";
import { ContainerRepo } from "./styles";

const RepoGithub: React.FC<Props> = ({ repository }) => {
  return (
    <Card key={repository.id} margin="2">
      <CardBody margin="2">
        <Text color="#F50057" fontWeight="bold" fontSize="2xl">
          {repository.name}
        </Text>
        <Text>{repository.description}</Text>
        <ContainerRepo>
          <Text color="#ee5122" fontSize="small" aria-label="language">
            {repository.language}
          </Text>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={repository.html_url}
          >
            <img src={github} alt="Github" style={{ width: "1.5rem" }} />
          </Link>
        </ContainerRepo>
      </CardBody>
    </Card>
  );
};

export default RepoGithub;
