import React from "react";
import Container from "../Shared/Container";
import Thumbnail from "../thumbnails/thumbnail";

const articles = [
  {
    title: "Test1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
  {
    title: "Test2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
  {
    title: "Test3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
  {
    title: "Test4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
  {
    title: "Test5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
  {
    title: "Test6",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
    link: "/articles/test",
  },
];

function Articles() {
  return (
    <Container>
      <h1>Articles</h1>
      {articles.map(({ title, image, link }) => (
        <Thumbnail title={title} image={image} link={link} key={title}/>
      ))}
    </Container>
  );
}
 
export default Articles;