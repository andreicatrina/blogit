import styled from "styled-components";

export const LandingPageSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  background-color: white;
  padding: 12px;
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
    color: var(--color-light-blue);
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
    font-weight: 300;
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
  max-width: 1300px;
  margin: 0 auto;
  gap: 24px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 600px;
  padding: 20px 0;
  width: 100%;
  /* gap: 24px; */
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  max-width: 600px;
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
export const FilterPostsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 60px;
  border-radius: 4px;
  gap: 12px;
  background-color: white;
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
    font-weight: 600;
    line-height: 14px;
    color: #1a1a1b;
    cursor: pointer;
  }
`;

export const NewsFeedContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin-top: 24px;
`;
export const NewsFeedPost = styled.div`
  display: flex;
`;
export const PostLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 25px;

  svg {
    width: 22px;
    height: 22px;
    color: var(--color-orange);
  }

  span {
    font-size: 12px;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 575px;
`;
