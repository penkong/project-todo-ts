/// <reference types="styled-components/cssprop" />
import styled from "styled-components";

//
export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ErrorProps {
  imageUrl: string;
}

export const ErrorImageContainer = styled.div<ErrorProps>`
  display: inline-block;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
