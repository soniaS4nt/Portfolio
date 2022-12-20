import { useColorMode, IconButton, Container } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ButtonColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode} aria-label={"Button mode"}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ButtonColorMode;
