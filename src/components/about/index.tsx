import { useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";
import { GetAbout } from "../../helpers/queries";
import Container from "../Shared/container";
import Loading from "../Shared/loading";

const Wrapper = styled.div`
  display: flex;
`;

const StyledText = styled.p`
  text-align: left;
  max-width: 50%;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 100px;
`;
const StyledImg = styled.img`
  text-align: right;
  align-items: flex-end;
  width: 500px;
  height: 500px;
`;

function About() {
  const { data, loading } = useQuery(GetAbout);
  return (
    <Container>
      <h1>About</h1>
      {loading ? (
        <Loading />
      ) : (
        data.aboutCollection.items.map(
          (document: { text: { json: Document }; image: { url: string } }) => (
            <Wrapper>
              <StyledText>
                {documentToReactComponents(document.text.json)}
              </StyledText>
              <StyledImg src={document.image.url} />
            </Wrapper>
          )
        )
      )}
    </Container>
  );
}

export default About;
