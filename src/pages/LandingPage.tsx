import React, { Component } from "react";
import { CardLogin } from "../components/CardLogin";
import { LandingPageStyle } from "../styled/styled-components/LandingPageStyle";
import { Container } from "../styled/styled-components/Container";
export class Landing extends Component {
  render() {
    return (
      <Container>
        <LandingPageStyle>
          <CardLogin />
        </LandingPageStyle>
      </Container>
    );
  }
}

export default Landing;
