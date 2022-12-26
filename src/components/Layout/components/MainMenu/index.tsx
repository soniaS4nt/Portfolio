import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonColorMode from "../../../ButtonColorMode";
import { ItemListStyled, MenuIcon } from "./styles";

const MainMenu: React.FC = () => {
  return (
    <>
      <Show breakpoint="(max-width: 400px)">
        <Menu closeOnSelect={false} closeOnBlur>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList color={"-moz-initial"}>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/projects">Projects</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>

      <Show breakpoint="(min-width: 401px)">
        <ItemListStyled>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>
        </ItemListStyled>
      </Show>
      <MenuIcon>
        <ButtonColorMode />
      </MenuIcon>
    </>
  );
};

export default MainMenu;
