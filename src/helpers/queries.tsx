import { gql } from "@apollo/client";

export const GetProjectThumbnailInfo = gql`
  {
    projectCollection {
      items {
        title
        image {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const GetArticlesThumbnailInfo = gql`
  {
    articleCollection {
      items {
        title
        image {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const GetProject = (projectId: string) => gql`
{
  project(id: "${projectId}"){
    title
    image{url}
    text{json}
  }
}
`;

export const GetArticle = (articleId: string) => gql`
{
  article(id: "${articleId}"){
    title
    image{url}
    text{json}
  }
}
`;

export const GetAbout = gql`
  {
    aboutCollection {
      items {
        text {
          json
        }
      }
    }
  }
`;
