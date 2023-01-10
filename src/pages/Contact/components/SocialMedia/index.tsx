import {
  SocialMediaContainer,
  SocialMediaIcon,
  SocialMediaLink,
  SocialMediaText,
  SocialMediaWrapper,
} from "./styles";

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaText>Follow me on social media</SocialMediaText>
      <SocialMediaWrapper>
        <SocialMediaLink href="https://www.instagram.com/soni4.chsant/">
          <SocialMediaIcon
            src="https://img.icons8.com/color/48/000000/instagram-new.svg"
            alt="Instagram"
          />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.linkedin.com/in/sonia-chaparro-santis/"
          target="_blank"
        >
          <SocialMediaIcon
            src="https://img.icons8.com/color/48/000000/linkedin.svg"
            alt="Linkedin"
          />
        </SocialMediaLink>

        <SocialMediaLink
          href="mailto:soniachaparro21@gmail.com"
          target="_blank"
        >
          <SocialMediaIcon
            src="https://img.icons8.com/color/48/000000/gmail.svg"
            alt="Gmail"
          />
        </SocialMediaLink>
      </SocialMediaWrapper>
    </SocialMediaContainer>
  );
}

export default SocialMedia;
