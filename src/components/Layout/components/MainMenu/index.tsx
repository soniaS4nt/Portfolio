import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonColorMode from "../../../ButtonColorMode";
import { ItemListStyled, MenuIcon } from "./styles";

const MainMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Show breakpoint="(max-width: 400px)">
        <IconButton
          onClick={handleOpenMenu}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />
      </Show>
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            backgroundColor: "#eee",
            padding: "20px",
          }}
        >
          <li style={{ marginBottom: "10px" }}>Menu item 1</li>
          <li style={{ marginBottom: "10px" }}>Menu item 2</li>
          <li style={{ marginBottom: "10px" }}>Menu item 3</li>
        </ul>
      )}

      <Show breakpoint="(min-width: 401px)">
        <ItemListStyled>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

          <MenuIcon>
            <ButtonColorMode />
          </MenuIcon>
        </ItemListStyled>
      </Show>
    </>
  );
};

export default MainMenu;
