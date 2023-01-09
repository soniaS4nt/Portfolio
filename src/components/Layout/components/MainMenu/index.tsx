import { useState } from "react";
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "./styles";
import ButtonColorMode from "../../../ButtonColorMode";
//import { Container } from "@chakra-ui/react";

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
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
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
