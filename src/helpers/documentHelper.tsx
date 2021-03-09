import { useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DocumentNode } from "graphql";
import React from "react";
import styled from "styled-components";
import Loading from "../components/Shared/loading";

interface Props {
  query: DocumentNode;
  collection: string;
}
const MainImage = styled.img`
  height: 150px;
  width: 300px;
  margin-top: 50px;
  margin-bottom: 0px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

function DocumentHelper({ query, collection }: Props) {
  const { data, loading } = useQuery(query);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <MainImage src={data[collection].image.url} alt="" />
      <Title>{data.project.title}</Title>
      {documentToReactComponents(data.project.text.json)}
    </div>
  );
}

export default DocumentHelper;
