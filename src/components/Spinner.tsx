//
import React from "react";
import {
  SpinnerOverlay,
  SpinnerContainer
} from "../styled/styled-components/Spinner";

//
const Spinner: React.FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
