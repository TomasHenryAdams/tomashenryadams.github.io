import React from "react";
import { GetProjectThumbnailInfo } from "../../helpers/queries";
import ThumbnailHelper from "../../helpers/thumbnailHelper";
import Container from "../Shared/container";


function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
     <ThumbnailHelper query={GetProjectThumbnailInfo} collection="projectCollection" link="/projects/" />
    </Container>
  );
}

export default Projects;
