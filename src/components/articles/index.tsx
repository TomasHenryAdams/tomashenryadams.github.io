import React from "react";
import { GetArticlesThumbnailInfo } from "../../helpers/queries";
import ThumbnailHelper from "../../helpers/thumbnailHelper";
import Container from "../Shared/container";

function Articles() {
  return (
    <Container>
      <h1>Articles</h1>
      <ThumbnailHelper
        query={GetArticlesThumbnailInfo}
        collection="articleCollection"
        link="/articles/"
      />
    </Container>
  );
}

export default Articles;
