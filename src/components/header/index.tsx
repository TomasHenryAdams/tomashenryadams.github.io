import React from "react";
import { AppBar } from "@material-ui/core";
import NavLinks from "./navLinks";
import styled from "styled-components";

const HeaderStyle = styled(AppBar)`
  box-sizing: border-box;
  height: 79px;
  background-color: #ffffff;
  overflow: hidden;
  border: 10px solid #000000;
  display: flex;
  justify-content: center;
  box-flex: center;
`;

const TextRight = styled.div`
  text-align: right;
  width: 50%;
  display: inline-block;
`;

const TextLeft = styled.div`
  text-align: left;
  width: 49%;
  display: inline-block;
  font-size: 2em;
  color: black;
  font-weight: bold;
  padding: 0 0.5em;
`;

const Header = () => {
  return (
    <HeaderStyle position="static">
      <div>
        <TextLeft>Tomas Henry Adams</TextLeft>
        <TextRight>
          <NavLinks />
        </TextRight>
      </div>
    </HeaderStyle>
  );
};

export default Header;
