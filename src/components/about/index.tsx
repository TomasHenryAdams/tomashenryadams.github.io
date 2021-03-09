import { useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import { GetAbout } from "../../helpers/queries";
import Container from "../Shared/container";
import Loading from "../Shared/loading";

function About() {
  const { data, loading } = useQuery(GetAbout);
  return (
    <Container>
      <h1>About</h1>
      {loading ? (
        <Loading />
      ) : (
        data.aboutCollection.items.map(
          (document: { text: { json: Document } }) =>
            documentToReactComponents(document.text.json)
        )
      )}
    </Container>
  );
}

export default About;
