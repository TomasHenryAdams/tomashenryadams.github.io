import { DocumentNode, useQuery } from "@apollo/client";
import React from "react";
import Loading from "../components/Shared/loading";
import ThumbnailData from "../components/Shared/thumbnailData";
import Thumbnail from "../components/thumbnails/thumbnail";

interface Props {
  query: DocumentNode;
  collection: string;
  link: string;
}

function ThumbnailHelper({ query, collection, link }: Props) {
  const { data, loading } = useQuery(query);
  return loading ? (
    <Loading />
  ) : (
    data[collection].items.map((thumbnailData: ThumbnailData) => (
      <Thumbnail
        title={thumbnailData.title}
        image={thumbnailData.image.url}
        link={link + thumbnailData.sys.id}
        key={thumbnailData.title}
      />
    ))
  );
}

export default ThumbnailHelper;
