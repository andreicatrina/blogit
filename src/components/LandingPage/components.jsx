import styled from "styled-components";

export const LandingPageSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const SideMenuParent = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 100%;
  background-color: #fff;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  background-color: white;
  padding: 12px;
  position: fixed;
  top: 60px;
`;

export const PopularTrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 10px;
    font-weight: 600;
    color: var(--color-gray);
    margin: 4px 0;
    padding: 4px;
  }
`;

export const PopularTrendsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #1c1c1c;
  transition: 0.6s;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    rotate: 290deg;
    color: var(--color-orange);
    background-color: white;
  }

  :hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--color-light-blue);
    text-decoration-thickness: 2px;
  }
`;

export const TopicsContainer = styled.div``;

export const TopicSpan = styled.span`
  display: flex;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-gray);
  margin: 4px 0;
  padding: 4px;
`;

export const TopicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
  padding: 0 4px;
  border-radius: 2px;
  cursor: pointer;

  span {
    color: #1c1c1c;
  }

  a {
    font-weight: 300;
    font-size: 16px;
    text-decoration: none;
    color: #1c1c1c;
    font-family: "Noto-sans", sans-serif;
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--color-gray);
  }
  :hover {
    background-color: var(--color-light-gray);

    svg {
      color: var(--color-orange);
    }
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  margin-top: 60px;
`;

export const TrendingTodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const TrendingTodayTitleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 980px;
  h4 {
    color: #1a1a1b;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 8px;
  }
`;

export const PopularContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.marginAuto};
  gap: 24px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  flex-direction: column;
  max-width: ${(props) => props.maxWidth};
  padding: 20px 0;
  width: 100%;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`;

export const TrendingSubjectsContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 240px;
  height: 180px;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    filter: brightness(40%);
    transition: 0.6s;
  }

  :hover {
    img {
      filter: brightness(100%);
    }
  }
`;

export const ImageTitle = styled.span`
  width: 100%;
  max-width: 240px;
  position: absolute;
  top: 50%;
  left: 0;
  color: white;
  padding: 6px;
  font-size: 18px;
  font-weight: 600;
`;

export const ImageSpan = styled.span`
  width: 240px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

export const PopularPostsTitleDiv = styled.div`
  display: flex;
  width: 100%;

  h4 {
    color: #1a1a1b;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

export const FilterPostsParent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterPostsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: 60px;
  border-radius: 4px;
  gap: 12px;
  background-color: white;
`;

export const PostViewMenu = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 16px;
  position: relative;

  :hover {
    background-color: #f6f7f8;
  }

  svg {
    width: 20px;
    height: 20px;
    color: rgb(124, 124, 124);
    cursor: pointer;
  }
`;

export const FeedViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 8px;
  gap: 8px;
  border-radius: 8px;
  -webkit-box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;
  -moz-box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;
  box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;
  position: absolute;
  top: 40px;
  left: 16px;

  span {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0;
    font-size: 14px;
    color: #7c7c7c;
    font-weight: 600;
    cursor: pointer;

    :hover {
      color: var(--color-light-blue);
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const HotDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 72px;
  height: 32px;
  margin-left: 12px;
  background-color: var(--color-light-gray);
  gap: 2px;
  border-radius: 16px;
  transition: 0.6s;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-light-blue);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--color-light-blue);
  }

  :hover {
    background-color: var(--color-gray);
  }
`;
export const CountryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100px;
  height: 32px;
  background-color: var(--color-light-gray);
  gap: 2px;
  border-radius: 16px;
  transition: 0.6s;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-light-blue);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--color-light-blue);
  }

  :hover {
    background-color: var(--color-gray);
  }
`;
export const NewPostsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 72px;
  height: 32px;
  gap: 2px;
  border-radius: 16px;
  transition: 0.6s;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-gray);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--color-gray);
  }

  :hover {
    background-color: var(--color-light-gray);
  }
`;
export const TopPostsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 72px;
  height: 32px;
  gap: 2px;
  border-radius: 16px;
  transition: 0.6s;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-gray);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--color-gray);
  }

  :hover {
    background-color: var(--color-light-gray);
  }
`;

export const PopularCommunitiesContainer = styled.div`
  background-color: white;
  margin-top: 48px;
  width: 100%;
  max-width: 360px;
  border-radius: 4px;
`;

export const ShortcutLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: 100%;
`;

export const ShortcutLinksTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;

  h4 {
    color: #1a1a1b;
    font-size: 12px;
    font-weight: 600;
    /* padding-bottom: 10px; */
  }

  svg {
    color: var(--color-gray);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 8px 8px 8px 8px;

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: #1a1a1b;
    cursor: pointer;
  }
`;

export const NewsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: 100%;
  margin-top: 24px;
`;
export const NewsFeedPost = styled.div`
  display: flex;
  background-color: #faf9f6;
  border-radius: 4px;
`;
export const PostLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 25px;
  padding: 8px 4px 0 4px;
  border-radius: 4px;

  svg {
    width: 22px;
    height: 22px;
    color: var(--color-orange);
    cursor: pointer;
  }

  span {
    font-size: 12px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: 100%;
  background-color: #faf9f6;
  border-radius: 4px;
`;

export const UpperPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 4px 4px;
`;
export const UpperPostTextContainer = styled.div``;
export const VisitPostButton = styled.button`
  width: 100%;
  max-width: 56px;
  height: 24px;
  background-color: var(--color-light-blue);
  border: none;
  border-radius: 12px;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const BlogNamePost = styled.div`
  font-size: 12px;
  color: #1c1c1c;
  font-weight: 600;

  span {
    color: #787c7e;
    padding-left: 4px;
  }
`;

export const MiddleContainerPost = styled.div`
  width: 100%;
  /* max-width: 575px; */
  height: 100%;
`;
export const MiddlePostTitleContainer = styled.div`
  h4 {
    padding: 4px;
    color: #222222;

    span {
      text-align: center;
      background-color: #2ecc71;
      color: white;
      padding: 2px 6px;
      border-radius: 12px;
      font-size: 12px;
      margin-left: 6px;
    }
  }
`;
export const PostImageContainer = styled.div`
  width: 100%;
  max-width: 575px;
  height: 100%;
  /* max-height: 500px; */
  margin-top: 4px;

  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-height: 500px;
    object-fit: cover;
  }
`;

export const DownPostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;

  span {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #878a8c;
    cursor: pointer;
  }

  svg {
    color: #878a8c;
    cursor: pointer;
  }
`;

export const TopicsSubcategotyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 0;

  span {
    padding: 0 2px;
    color: #7c7c7c;
    cursor: pointer;

    :hover {
      background-color: var(--color-light-blue);
      color: white;
    }
  }
`;
