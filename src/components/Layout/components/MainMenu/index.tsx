import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonColorMode from "../../../ButtonColorMode";
import { ItemListStyled, MenuIcon } from "./styles";

const MainMenu: React.FC = () => {
  return (
    <>
      <IconButton aria-label="Menu" icon={<HamburgerIcon />} />
      <ItemListStyled>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>

        <MenuIcon>
          <ButtonColorMode />
        </MenuIcon>
      </ItemListStyled>
    </>
  );
};

export default MainMenu;
