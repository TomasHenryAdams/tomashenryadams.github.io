import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  link: string;
  image: string;
  title: string;
}

const Border = styled.div`
  width: 25%;
  margin: 50px;
  height: 300px;
  border-radius: 10px;
  border: 10px solid black;
  overflow: hidden;
  position: relative;
  display: inline-block;

  &:hover div:before {
    display: block;
  }
  &:hover div {
    display: block;
  }
`;

const StyledThumbnail = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  vertical-align: bottom;
  transition: all 0.5s;

  &:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Text = styled.div`
  display: none;
  font-size: 35px;
  font-weight: bold;
  color: white !important;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  text-decoration: none;
`;

function Thumbnail(props: Props) {
  return (
    <Border>
      <Link to={props.link}>
        <StyledThumbnail className="project" {...props}>
          <Text>{props.title}</Text>
        </StyledThumbnail>
      </Link>
    </Border>
  );
}

export default Thumbnail;
