import { Container, Link, Text } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        Made with 🧡 by{" "}
        <Link
          href="https://github.com/soniaS4nt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sonia Chaparro
        </Link>
      </Text>
    </Container>
  );
};

export default Footer;
