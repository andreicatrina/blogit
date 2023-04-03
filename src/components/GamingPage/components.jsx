import styled from "styled-components";

export const GamingLandingPage = styled.div`
  display: flex;
`;

export const SideMenuParent = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  min-height: 100vh;
  background-color: #fff;
`;

export const GamingFeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 80px auto;
  /* margin-top: 80px; */
  width: 100%;
  max-width: 950px;
  gap: 20px;
  padding: 0 24px;
`;

export const GamePostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  gap: 20px;
`;

export const GameTopicTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    color: #7c7c7c;
  }
`;

export const MenuSelectionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: #7c7c7c;
    transition: 0.4s;
    cursor: pointer;

    :hover {
      text-decoration-line: underline;
      text-decoration-style: "solid";
      text-decoration-color: #7cd6f1;
      text-decoration-thickness: 3px;
      text-underline-offset: 8px;
      color: #1c1c1c;
    }
  }
`;

export const PostsViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  span {
    padding-left: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #7c7c7c;
  }
`;

export const SelectViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #7c7c7c;
  padding-right: 8px;
  position: relative;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SelectedViewDiv = styled.div`
  border-radius: 16px;
  padding: 8px;
  cursor: pointer;

  :hover {
    background-color: #f6f7f8;
  }
`;

export const FeedViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  -webkit-box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;
  -moz-box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;
  box-shadow: -2.5px -1.5px 17px -1px #a3a0a0;

  span {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0;
    font-size: 14px;
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

export const UserPostContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
`;

export const PostLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 25px;
  background-color: #faf9f6;
  padding: 8px 4px 0 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  svg {
    width: 20px;
    height: 20px;
    color: #787c7e;
    cursor: pointer;

    :hover {
      color: var(--color-light-blue);
    }
  }

  span {
    font-size: 12px;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  /* max-width: 640px; */
`;

export const UpperPostContainer = styled.div`
  padding: 8px;
`;

export const BlogNamePost = styled.div`
  display: flex;
  font-size: 12px;
  color: #1c1c1c;
  font-weight: 600;
  span {
    color: #787c7e;
    padding-left: 4px;
  }
`;

export const MiddlePostContainer = styled.div`
  width: 100%;
`;

export const MiddlePostTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px 8px;
  h4 {
    padding: 4px;
    color: #222222;
  }

  span {
    text-align: center;
    background-color: rgb(1, 73, 128);
    color: white;
    padding: 2px 6px;
    border-radius: 12px;
    font-size: 12px;
    margin-left: 6px;
  }
`;

export const PostTextContainer = styled.div`
  display: flex;
  padding: 4px 8px 4px 8px;
  /* min-height: 200px; */

  span {
    /* width: 100%;
    max-width: 590px;
    height: 100%;
    max-height: 300px; */
    font-size: 14px;
    font-weight: 500;
    color: #878a8c;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
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

export const GamingCommunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  width: 100%;
  /* height: 100%; */
  margin-top: 112px;
  gap: 16px;
`;

export const CommunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 4px 0;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    max-width: 100px;
    height: 30px;
    color: rgb(0, 121, 211);
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const CommunityContainerOne = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-light-blue);
    color: var(--color-orange);
  }
`;
export const CommunityContainerTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    /* border-radius: 50%; */
    background-color: #9ba5a8;
    color: #e01e5a;
  }
`;
export const CommunityContainerThree = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
    padding: 1px;
    border-radius: 50%;
    background-color: #fff;
    color: #ff9900;
  }
`;
export const CommunityContainerFour = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    padding: 1px;
    border-radius: 50%;
    background-color: #128c7e;
    color: #cee3f8;
  }
`;

export const CommunitySpanContainer = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-size: 12px;
    color: #1c1c1c;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #7c7c7c;
  }
`;

export const PublishersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 8px 0;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    max-width: 160px;
    height: 30px;
    color: rgb(0, 121, 211);
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PublishersSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    color: #1c1c1c;
  }
`;

export const WebsitesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 8px 0;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    max-width: 160px;
    height: 30px;
    color: rgb(0, 121, 211);
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const WebitesSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    color: #1c1c1c;
  }
`;

export const DevelopersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 8px 0;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    max-width: 160px;
    height: 30px;
    color: rgb(0, 121, 211);
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const DevelopersSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    color: #1c1c1c;
  }
`;

export const SubtopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 8px 0;
  }
`;

export const SubtopicsSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    color: #1c1c1c;
  }
`;

export const DistributorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  padding: 8px 8px 12px 8px;
  border-radius: 4px;

  p {
    font-size: 10px;
    font-weight: 600;
    color: #7c7c7c;
    padding: 6px 0 8px 0;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    max-width: 160px;
    height: 30px;
    color: rgb(0, 121, 211);
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const DistributorsSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    color: #1c1c1c;
  }
`;
