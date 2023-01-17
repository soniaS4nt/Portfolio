import useTitle from "../../hooks/useTitle";
import { CustomContainer, Title } from "../../styles/styles";
import { INFO } from "../../utils";
import ModalContact from "./components/ModalContact";
import SocialMedia from "./components/SocialMedia";
import { SocialMediaContainer } from "./components/SocialMedia/styles";

const Contact: React.FC = () => {
  useTitle({ title: "Contact" });

  return (
    <CustomContainer centerContent>
      <Title>Contact</Title>
      <SocialMediaContainer>
        <p>{INFO.socialMedia}</p>
      </SocialMediaContainer>
      <ModalContact />
      <SocialMedia />
    </CustomContainer>
  );
};
export default Contact;
