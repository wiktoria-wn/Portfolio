import React from "react";
import {
  LogoPlace,
  Logo,
  Media,
  Icon,
  ImagePlace,
  Image,
} from "../styles/WelcomePageStyles";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import HomeImg from "../assets/homeimg.svg";

class WelcomePage extends React.Component {
  render() {
    return (
      <>
        <LogoPlace>
          <Media>
            <Icon src={LinkedIn} alt="linkedin" />
            <Icon src={Github} alt="linkedin" />
          </Media>
          <Logo>Wiktoria Niezborała.</Logo>
        </LogoPlace>
        <ImagePlace>
          <Image src={HomeImg} alt="home" />
        </ImagePlace>
      </>
    );
  }
}

export default WelcomePage;
