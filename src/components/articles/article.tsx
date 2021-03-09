import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DocumentHelper from "../../helpers/documentHelper";
import { GetArticle } from "../../helpers/queries";
import Container from "../Shared/container";

type TParams = { articleId: string };

function Article({ match }: RouteComponentProps<TParams>) {
  return (
    <Container>
      <DocumentHelper
        query={GetArticle(match.params.articleId)}
        collection="project"
      />
    </Container>
  );
}

export default Article;
