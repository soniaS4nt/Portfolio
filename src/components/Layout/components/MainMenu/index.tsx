import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import ButtonColorMode from "../../../ButtonColorMode";
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
} from "./styles";

const MainMenu: React.FC = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <ButtonColorMode />
      <NavbarInnerContainer>
        <NavbarLinkContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          <OpenLinksButton>
            <IconButton
              aria-label="Search database"
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              icon={
                extendNavbar ? (
                  <CloseIcon boxSize={8} />
                ) : (
                  <HamburgerIcon boxSize={8} />
                )
              }
            />
          </OpenLinksButton>
        </NavbarLinkContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default MainMenu;
