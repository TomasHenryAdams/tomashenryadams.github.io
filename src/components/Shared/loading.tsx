import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  delay: string;
}

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 2em;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const Dot = styled.div<Props>`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

function Loading() {
  return (
    <Container>
      <TextWrapper>Loading</TextWrapper>
      <DotWrapper>
        <Dot delay="" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </Container>
  );
}

export default Loading;
