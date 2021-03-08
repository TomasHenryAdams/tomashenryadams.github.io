import React from "react";
import Container from "../Shared/Container";
import Thumbnail from "../thumbnails/thumbnail";

const projects = [
  {
    title: "Test1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
  {
    title: "Test2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
  {
    title: "Test3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
  {
    title: "Test4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
  {
    title: "Test5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
  {
    title: "Test6",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/projects/test",
  },
];

function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      {projects.map(({ title, image, link }) => (
        <Thumbnail title={title} image={image} link={link} key={title}/>
      ))}
    </Container>
  );
}

export default Projects;
