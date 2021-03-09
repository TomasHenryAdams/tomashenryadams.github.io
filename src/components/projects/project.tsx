import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DocumentHelper from "../../helpers/documentHelper";
import { GetProject } from "../../helpers/queries";
import Container from "../Shared/container";

type TParams = { projectId: string };

function Project({ match }: RouteComponentProps<TParams>) {
  return (
    <Container>
      <DocumentHelper
        query={GetProject(match.params.projectId)}
        collection="project"
      />
    </Container>
  );
}

export default Project;
