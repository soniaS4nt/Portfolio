import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "../Footer/styles";
import { Props } from "./interfaces";

const RepoGithub: React.FC<Props> = ({ repository }) => {
  return (
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
  );
};

export default RepoGithub;
