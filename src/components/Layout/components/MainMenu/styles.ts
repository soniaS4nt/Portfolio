import styled from "styled-components";
import { Link } from "react-router-dom";

type NavbarProps = {
  extendNavbar: boolean;
};

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props: NavbarProps) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  @media (min-width: 700px) {
  align-items: center;
  justify-content: center;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  font-size: large;
  text-decoration: none;
  margin: 1rem;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
    color: orangered;
  }
  @media (max-width: 700px) {
    display: none;
  }

`;

export const NavbarLinkExtended = styled(Link)`
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;


export const OpenLinksButton = styled.div`
   @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;